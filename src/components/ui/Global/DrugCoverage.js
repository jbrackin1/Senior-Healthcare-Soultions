/** @format */
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { fetchDrugSuggestions } from "../../../utils/api/fetchDrugSuggestions";
import { fetchDrugCoverage } from "../../../utils/api/fetchDrugCoverage"; // Correct import path
import AsyncSelect from "react-select/async";
import Button from "../Global/button";
import DrugCoverageDetail from "../Plan/DrugCoverageDetail"; // Assuming DrugCoverageDetail is correctly imported

// Styled components for layout
const CoverageContainer = styled.div`
	padding: 2rem;
	background-color: ${({ theme }) => theme.colors.background || "#f8f9fa"};
	border-radius: 8px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	max-width: 800px;
	margin: auto;
`;

const ResultsTable = styled.table`
	width: 100%;
	margin-top: 1rem;
	border-collapse: collapse;
	border: 1px solid #ccc;

	th,
	td {
		padding: 0.5rem;
		text-align: left;
		border: 1px solid #ddd;
	}

	th {
		background-color: #f4f4f4;
	}
`;

const SpacedDiv = styled.div`
	margin: 1rem 0;
`;

const DrugCoverage = ({ isAuthenticated }) => {
	const location = useLocation();
	const selectedPlans = location.state?.selectedPlans || [];

	// State hooks for handling RxCUI, coverage data, and errors
	const [drugRxCuis, setDrugRxCuis] = useState(""); // Capture and store RxCUI
	const [coverageData, setCoverageData] = useState([]);
	const [fetchCostData, setFetchCostData] = useState(null);
	const [error, setError] = useState("");

	useEffect(() => {
		console.log("Initial selectedPlans: ", selectedPlans); // For debugging selectedPlans
	}, [selectedPlans]);

	// Handle fetching coverage and cost data
	const handleFetchCoverage = async () => {
		if (selectedPlans.length === 0 || !drugRxCuis) {
			setError(
				"Please select at least one plan and provide a drug identifier."
			);
			return;
		}

		try {
			// Fetch coverage data for selected plans
			const data = await fetchDrugCoverage({
				planIds: selectedPlans.map((plan) => plan.id), // Passing the selected plan IDs
				drugRxCuis, // Sending RxCUI securely in the API call
				setCoverageData,
				setError,
			});
			setCoverageData(data);
			setError(""); // Clear any previous errors

			// Fetch drug cost for the selected plan and drug (for now, we're using the first plan)
			const cost = await fetchDrugCost(selectedPlans[0]?.id, drugRxCuis); // Fetching cost for the first plan
			setFetchCostData(cost);
		} catch (err) {
			console.error("API Error: ", err.message);
			setError("Failed to fetch drug coverage or cost data. Please try again.");
		}
	};

	// API call to fetch drug cost (using the backend endpoint for drug cost)
	const fetchDrugCost = async (planId, drugRxCui) => {
		try {
			const response = await fetch(`/api/drug-cost`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ planId, drugRxCui }), // Send RxCUI securely in the API call
			});

			if (!response.ok) {
				throw new Error("Failed to fetch drug cost");
			}

			const data = await response.json();
			return data; // Assuming backend returns cost details
		} catch (err) {
			console.error("Cost API Error: ", err.message);
			throw err;
		}
	};

	const getColorByIndex = (index) => {
		const colors = ["#1E90FF", "#800080", "#FF7F50", "#008080"];
		return colors[index % colors.length];
	};

	// Function to check if a value is valid (not unavailable or undefined)
	const isValidValue = (value) => {
		return value !== "unavailable" && value !== undefined && value !== null;
	};

	return (
		<CoverageContainer>
			<h2>Drug Coverage</h2>

			{/* Display selected plan names */}
			<DrugCoverageDetail selectedPlans={selectedPlans} />

			<SpacedDiv>
				{error && <p style={{ color: "red" }}>{error}</p>}
				<AsyncSelect
					cacheOptions
					loadOptions={async (inputValue) => {
						try {
							const suggestions = await fetchDrugSuggestions(inputValue);
							// Log suggestions to inspect the structure
							console.log("Fetched Suggestions:", suggestions);

							// Filter and map suggestions to remove invalid ones
							const filteredSuggestions = suggestions.filter((suggestion) => {
								const validLabel =
									suggestion.label && suggestion.label.trim() !== "";
								const validValue =
									suggestion.value && suggestion.value.trim() !== "";
								return validLabel && validValue;
							});

							// Map the filtered suggestions to display only valid ones
							const mappedSuggestions = filteredSuggestions.map(
								(suggestion) => ({
									label: suggestion.label.replace(/(\d+)\s*-\s*(.*)/, "$2"), // Remove rxcui from label
									value: suggestion.value, // Keep rxcui as value for API calls
								})
							);

							setError(""); // Clear any previous errors
							return mappedSuggestions; // Return cleaned suggestions for dropdown display
						} catch (err) {
							setError("Failed to fetch drug suggestions. Please try again.");
							return []; // Return an empty array if there's an error
						}
					}}
					onChange={(option) => setDrugRxCuis(option.value)} // Store the RxCUI
					placeholder="Search for a drug..."
				/>
			</SpacedDiv>

			<SpacedDiv>
				<Button onClick={handleFetchCoverage}>Fetch Coverage</Button>
			</SpacedDiv>

			{coverageData?.coverage?.length > 0 && (
				<ResultsTable>
					<thead>
						<tr>
							<th>Plan</th>
							<th>Drug Name</th>
							<th>Coverage</th>
							<th>Details</th>
						</tr>
					</thead>
					<tbody>
						{coverageData.coverage.map((entry, index) => (
							<tr key={index} style={{ color: getColorByIndex(index) }}>
								{/* Plan Name */}
								<td>{selectedPlans[index]?.name || "N/A"}</td>{" "}
								{/* Drug Name */}
								<td>{entry.drugName || "Drug name not provided"}</td>{" "}
								{/* Coverage Status */}
								<td>
									{entry.coverage && entry.coverage !== "DataNotProvided"
										? entry.coverage
										: "Coverage not available"}
								</td>{" "}
								{/* Details */}
								<td>{entry.details || "Details not provided"}</td>{" "}
							</tr>
						))}
					</tbody>
				</ResultsTable>
			)}
		</CoverageContainer>
	);
};

export default DrugCoverage;
