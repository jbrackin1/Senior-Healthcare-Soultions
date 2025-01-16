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

	const [drugRxCuis, setDrugRxCuis] = useState("");
	const [coverageData, setCoverageData] = useState([]);
	const [error, setError] = useState("");

	useEffect(() => {
		console.log("Initial selectedPlans: ", selectedPlans);
	}, [selectedPlans]);

	// Handle fetching coverage
	const handleFetchCoverage = async () => {
		if (selectedPlans.length === 0 || !drugRxCuis) {
			setError(
				"Please select at least one plan and provide a drug identifier."
			);
			return;
		}

		try {
			const data = await fetchDrugCoverage({
				planIds: selectedPlans.map((plan) => plan.id),
				drugRxCuis,
			});
			setCoverageData(data);
			setError("");
		} catch (err) {
			console.error("API Error: ", err.message);
			setError("Failed to fetch drug coverage data. Please try again.");
		}
	};

	const getColorByIndex = (index) => {
		const colors = ["blue", "green", "red", "orange"];
		return colors[index % colors.length];
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
							const suggestions = await fetchDrugSuggestions(inputValue);
							setError(""); // Clear errors if successful
							return suggestions;
						} catch (err) {
							setError("Failed to fetch drug suggestions. Please try again.");
							return [];
						}
					}}
					onChange={(option) => {
						setDrugRxCuis(option.value);
						console.log("Selected Drug RxCUI: ", option.value);
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
								<td>{entry.drugName}</td>
								<td>{entry.coverage}</td>
								<td>{entry.details}</td>
							</tr>
						))}
					</tbody>
				</ResultsTable>
			)}
		</CoverageContainer>
	);
};
 
export default DrugCoverage;