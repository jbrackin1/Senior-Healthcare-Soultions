/** @format */

import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { PlanContext } from "../../../services/hooks/PlanContext";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../Global/button";
import {
	formatInsuranceData,
	formatInsuranceList,
} from "../../../utils/formatData";
import { formatDollar } from "../../../utils/formatDollar";

const DetailContainer = styled.div`
	padding: 2rem;
	background-color: ${({ theme }) => theme.colors.background};
	border-radius: 8px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	max-width: 800px;
	margin: auto;
`;

const PlanDetail = ({ addToFavorites, addToComparison, isSignedIn }) => {
	const { planId } = useParams();
	const navigate = useNavigate();
	const [plan, setPlan] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchPlanDetails = async () => {
			try {
				const response = await fetch(
					`https://marketplace.api.healthcare.gov/api/v1/plans/${planId}?apikey=${process.env.REACT_APP_MARKETPLACE_API_KEY}`
				);
				const data = await response.json();
				setPlan(data); // Set the fetched plan data
			} catch (error) {
				console.error("Error fetching plan details:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchPlanDetails();
	}, [planId]);

	if (loading) return <p>Loading...</p>;
	if (!plan) return <p>No plan details available.</p>;

	// Format insurance data if needed
	const formattedPlan = formatInsuranceData(plan);
	const formattedData = formatInsuranceList(plan);

	return (
		<DetailContainer>
			<h2>{plan.name || "N/A"}</h2>
			<p>{plan.description || "No description available."}</p>
			<p>Premium: {formatDollar(plan.premium)}</p>
			<p>Plan Type: {plan.planType || "N/A"}</p>
			<p>Deductible: {formatDollar(plan.deductible)}</p>

			<h3>Coverage Details:</h3>
			<ul>
				<li>General Co-Pay: {formatDollar(formattedData?.coPay?.general)}</li>
				<li>
					Specialist Co-Pay: {formatDollar(formattedData?.coPay?.specialist)}
				</li>
				<li>Hospital Co-Pay: {formatDollar(formattedData?.coPay?.hospital)}</li>
				<li>Network Coverage: {formattedData?.networkCoverage || "N/A"}</li>
				<li>
					Medicare Eligible: {formattedData?.medicareEligible ? "Yes" : "No"}
				</li>
				<li>
					Medicaid Eligible: {formattedData?.medicaidEligible ? "Yes" : "No"}
				</li>
			</ul>

			<h3>Additional Benefits:</h3>
			<ul>
				{formattedData?.additionalBenefits?.length > 0 ? (
					formattedData.additionalBenefits.map((benefit, index) => (
						<li key={index}>{benefit}</li>
					))
				) : (
					<p>No additional benefits available.</p>
				)}
			</ul>

			<div>
				<Button onClick={() => addToFavorites?.(plan)}>Add to Favorites</Button>
				<Button onClick={() => addToComparison?.(plan)}>
					Add to Comparison
				</Button>

				{isSignedIn ? (
					<Button onClick={() => navigate("/comparison")}>
						Go to Comparison
					</Button>
				) : (
					<p>You need to sign up to compare plans.</p>
				)}

				<Button onClick={() => navigate(-1)}>Back</Button>
			</div>
		</DetailContainer>
	);
};

export default PlanDetail;
