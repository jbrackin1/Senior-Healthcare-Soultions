/** @format */

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { fetchDrugSuggestions } from "../../../utils/api/fetchDrugSuggestions";
import { fetchDrugCoverage } from "../../../utils/api/fetchDrugSuggestions";
import AsyncSelect from "react-select/async";
import Button from "../Global/button";
import DrugCoverageDetail from "../Plan/DrugCoverageDetail";

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

	const [drugRxCuis, setDrugRxCuis] = useState(""); // Capture and store RxCUI
	const [coverageData, setCoverageData] = useState([]);
	const [fetchCostData, setFetchCostData] = useState(null);
	const [error, setError] = useState("");

	useEffect(() => {
		console.log("Initial selectedPlans: ", selectedPlans);
	}, [selectedPlans]);

	// Handle fetching coverage and cost
	const handleFetchCoverage = async () => {
		if (selectedPlans.length === 0 || !drugRxCuis) {
			setError(
				"Please select at least one plan and provide a drug identifier."
			);
			return;
		}

		try {
			// Fetch coverage data
			const data = await fetchDrugCoverage({
				planIds: selectedPlans.map((plan) => plan.id),
				drugRxCuis, // Send rxcui securely in the API call
			});
			setCoverageData(data);
			setError(""); // Clear any previous errors

			// Fetch drug cost for the selected plan and drug
			const cost = await fetchDrugCost(selectedPlans[0]?.id, drugRxCuis); // Fetching for the first plan for now
			setFetchCostData(cost);
		} catch (err) {
			console.error("API Error: ", err.message);
			setError("Failed to fetch drug coverage or cost data. Please try again.");
		}
	};

	// API call to fetch drug cost (this could be a backend endpoint to get the drug cost for a plan and RxCUI)
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
			return data; // Assuming the backend sends back the cost details
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

			{/* Display selected plan names with color */}
			<DrugCoverageDetail selectedPlans={selectedPlans} />

			<SpacedDiv>
				{error && <p style={{ color: "red" }}>{error}</p>}
				<AsyncSelect
					cacheOptions
					loadOptions={async (inputValue) => {
						try {
							// Fetch drug suggestions from the API
							const suggestions = await fetchDrugSuggestions(inputValue);

							// Log the suggestions to inspect the structure
							console.log("Fetched Suggestions:", suggestions);

							// Filter out invalid suggestions and ensure we only show valid drug names (not rxcui)
							const filteredSuggestions = suggestions.filter((suggestion) => {
								// Check if label and value are valid, ensuring no undefined or empty strings
								const validLabel =
									suggestion.label &&
									suggestion.label.trim() !== "" &&
									suggestion.label !== "undefined" &&
									suggestion.label !== "unavailable";
								const validValue =
									suggestion.value &&
									suggestion.value.trim() !== "" &&
									suggestion.value !== "undefined" &&
									suggestion.value !== "unavailable";

								return validLabel && validValue;
							});

							// Map over the suggestions to modify what is displayed in the dropdown
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
					onChange={(option) => {
						setDrugRxCuis(option.value); // Store the RxCUI (rxcui will not be displayed)
						console.log("Selected Drug RxCUI:", option.value);
					}}
					placeholder="Search for a drug..."
				/>
			</SpacedDiv>

			<SpacedDiv>
				<Button onClick={handleFetchCoverage}>Fetch Coverage</Button>
			</SpacedDiv>

			{/* Display coverage data in a table */}
			{coverageData.length > 0 && (
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
						{coverageData.map((entry, index) => (
							<tr key={index} style={{ color: getColorByIndex(index) }}>
								{/* Display Plan Name */}
								<td>{selectedPlans[index]?.name}</td> {/* Get the plan name */}
								{/* Conditionally render drug name, if unavailable or undefined, show empty */}
								<td>{isValidValue(entry.drugName) ? entry.drugName : "N/A"}</td>
								{/* Conditionally render coverage, if unavailable or undefined, show empty */}
								<td>{isValidValue(entry.coverage) ? entry.coverage : "N/A"}</td>
								{/* Conditionally render details, if unavailable or undefined, show empty */}
								<td>{isValidValue(entry.details) ? entry.details : "N/A"}</td>
							</tr>
						))}
					</tbody>
				</ResultsTable>
			)}
		</CoverageContainer>
	);
};

export default DrugCoverage;
