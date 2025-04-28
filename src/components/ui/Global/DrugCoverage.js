/** @format */
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { fetchDrugSuggestions } from "../../../utils/api/fetchDrugSuggestions";
import { fetchDrugCoverage } from "../../../utils/api/fetchDrugCoverage";
import Button from "./button";
import DrugCoverageDetail from "../Plan/DrugCoverageDetail";
import AsyncSelect from "react-select/async";

// Styled components
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
	const location = useLocation(); // 👈 FIRST get location
	const { selectedPlans = [], planId } = location.state || {}; // 👈 THEN destructure it
	const isMultiplePlans = selectedPlans.length > 0;
	const activePlans = isMultiplePlans ? selectedPlans : [{ id: planId }]; // 👈 Build a safe array

	const navigate = useNavigate();
	const [drugRxCuis, setDrugRxCuis] = useState("");
	const [coverageData, setCoverageData] = useState([]);
	const [selectedDrug, setSelectedDrug] = useState(null);
	const [error, setError] = useState("");

	useEffect(() => {
		console.log("Active plans:", activePlans);
	}, [activePlans]);

	// Handle searching for drugs by name or RxCUI
	const handleSearchDrug = async (inputValue) => {
		if (!inputValue) return [];
		try {
			const suggestions = await fetchDrugSuggestions(inputValue);
			console.log("Drug suggestions:", suggestions);
			return suggestions.map((item) => ({
				label: `${item.label}${item.strength ? ` - ${item.strength}` : ""}`,
				value: item.value,
			}));
		} catch (error) {
			console.error("Error fetching drug suggestions:", error);
			return [];
		}
	};

	// Handle fetching coverage data for selected plans and drug RxCUI
	const handleFetchCoverage = async () => {
		if (activePlans.length === 0 || !drugRxCuis) {
			setError("Please select a plan and provide a drug identifier.");
			return;
		}

		try {
			await fetchDrugCoverage({
				planIds: activePlans.map((plan) => plan.id),
				drugRxCuis,
				setCoverageData,
				setError,
			});
		} catch (err) {
			console.error("API Error:", err.message);
			setError("Failed to fetch drug coverage. Please try again.");
		}
	};

	// Helper function for formatting coverage
	const formatCoverageStatus = (coverage, generic_rxcui, generic_name) => {
		switch (coverage) {
			case "Covered":
				return "Covered by Plan";
			case "NotCovered":
				return "Not Covered by Plan";
			case "GenericCovered":
				return generic_name
					? `Generic Version Covered (${generic_name})`
					: "Generic Version Covered";
			case "DataNotProvided":
				return "Coverage Data Not Available";
			default:
				return "Coverage Unknown";
		}
	};

	return (
		<CoverageContainer>
			<h2>Drug Coverage</h2>

			{/* Display selected plan names */}
			<DrugCoverageDetail selectedPlans={activePlans} />

			<SpacedDiv>
				{error && <p style={{ color: "red" }}>{error}</p>}
				<AsyncSelect
					cacheOptions
					loadOptions={handleSearchDrug}
					onChange={(selectedOption) => {
						setSelectedDrug(selectedOption);
						setDrugRxCuis(selectedOption.value);
					}}
					value={selectedDrug}
					placeholder="Enter Drug Name or RxCUI"
					noOptionsMessage={() => "No suggestions found"}
					getOptionLabel={(e) => `${e.label}`}
				/>
			</SpacedDiv>

			<SpacedDiv>
				<Button onClick={handleFetchCoverage}>Check Drug Coverage</Button>
			</SpacedDiv>

			{/* Show results */}
			{coverageData?.coverage?.length > 0 && (
				<ResultsTable>
					<thead>
						<tr>
							<th>Plan</th>
							<th>Coverage</th>
						</tr>
					</thead>
					<tbody>
						{coverageData.coverage.map((entry, index) => (
							<tr key={activePlans[index]?.id || index}>
								<td>{activePlans[index]?.name || "N/A"}</td>
								<td>
									{formatCoverageStatus(
										entry.coverage,
										entry.generic_rxcui,
										entry.generic_name
									)}
								</td>
							</tr>
						))}
					</tbody>
				</ResultsTable>
			)}
		</CoverageContainer>
	);
};

export default DrugCoverage;
