/** @format */
// Jerod you need to add this npm install react-select

import React, { useState } from "react";
import {Link, useLocation} from "react-router-dom";
import styled from "styled-components";
import { fetchDrugSuggestions } from "../../../utils/api/fetchDrugSuggestions";
import AsyncSelect from "react-select/async";
import Button from "../Global/button";

const CoverageContainer = styled.div`
	padding: 2rem;
	background-color: ${({ theme }) => theme.colors.background || "#f8f9fa"};
	border-radius: 8px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	max-width: 800px;
	margin: auto;
`;

const Input = styled.input`
	width: 100%;
	padding: 0.5rem;
	margin: 0.5rem 0;
	border: 1px solid #ccc;
	border-radius: 4px;
`;

const DrugCoverage = () => {
	const location = useLocation();
	const selectedPlan = location.state?.selectedPlan || null;

	const [drugRxCuis, setDrugRxCuis] = useState("");
	const [planIds, setPlanIds] = useState(selectedPlan ? [selectedPlan] : []);
	const [coverageData, setCoverageData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [selectedPlans, setSelectedPlans] = useState([]);

	const maxPlans = isSignedIn ? 4 : 1;

	const fetchDrugCoverage = async () => {
		if (!drugRxCuis || !planIds) {
			setError("Please enter both drug RxCUIs and plan IDs.");
			return;
		}

		setLoading(true);
		setError(null);
		setCoverageData(null);

		try {
			const response = await fetch(
				`https://marketplace.api.healthcare.gov/api/v1/drugs/covered?apikey=${
					process.env.REACT_APP_MARKETPLACE_API_KEY
				}&year=2025&drugs=${encodeURIComponent(
					drugRxCuis
				)}&planids=${encodeURIComponent(planIds)}`,
				{
					method: "GET",
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			if (!response.ok) {
				throw new Error("Failed to fetch drug coverage data.");
			}

			const data = await response.json();
			setCoverageData(data["Provider & Drug Coverage"]);
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	const handlePlanSelection = (selectedOption) => {
		if (planIds.length >= maxPlans) {
			setError(`You can only select up to ${maxPlans} plans.`);
			return;
		}
		setError(null);
		setPlanIds((prev) =>
			prev.includes(selectedOption.value)
				? prev
				: [...prev, selectedOption.value]
		);
	};


	return (
		<CoverageContainer>
			<h2>Check Drug Coverage</h2>
			<p>Enter the drugs (RxCUIs) and plan IDs to check if they are covered.</p>

			<label>
				Drug RxCUIs (search by name):
				<AsyncSelect
					cacheOptions
					loadOptions={fetchDrugSuggestions}
					onChange={(selectedOption) =>
						setDrugRxCuis((prev) =>
							prev ? `${prev},${selectedOption.value}` : selectedOption.value
						)
					}
					placeholder="Type drug name..."
				/>
			</label>

			<label>
				Drug RxCUIs (comma-separated):
				<Input
					type="text"
					value={drugRxCuis}
					onChange={(e) => setDrugRxCuis(e.target.value)}
					placeholder="e.g., 1049589, 1049630"
				/>
			</label>

			<label>
				Plan IDs (comma-separated):
				<Input
					type="text"
					value={planIds}
					onChange={(e) => setPlanIds(e.target.value)}
					placeholder="e.g., 11512NC0100031, 11512NC0100032"
				/>
			</label>

			<Button
				as={Link}
				to={{
					pathname: "/drug-coverage",
					state: { selectedPlans }, // Note: Use selectedPlans instead of selectedPlan for consistency
				}}>
				Check if your medications are covered
			</Button>

			{loading && <p>Loading...</p>}
			{error && <p style={{ color: "red" }}>{error}</p>}
			{coverageData && (
				<div>
					<h3>Coverage Results</h3>
					<ul>
						{coverageData.map((item, index) => (
							<li key={index}>
								<strong>Drug RxCUI:</strong> {item.rxcui} <br />
								<strong>Plan ID:</strong> {item.plan_id} <br />
								<strong>Coverage:</strong> {item.coverage} <br />
								<strong>Generic RxCUI:</strong> {item.generic_rxcui || "N/A"}
							</li>
						))}
					</ul>
				</div>
			)}

			<Button as={Link} to="/marketplace">
				Back to Marketplace
			</Button>
		</CoverageContainer>
	);
};

export default DrugCoverage;
