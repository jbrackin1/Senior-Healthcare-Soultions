/** @format */

import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../Global/button";
import { formatDetailedInsInfo } from "../../../utils/formatDetailedInsInfo";
import {formatCurrency, formatDate, formatPlanType} from "../../../utils/formatData";
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

	// Format the plan data for detailed view
	const formattedPlan = formatDetailedInsInfo(plan);

	return (
		<DetailContainer>
			<h2>{formattedPlan.name || "N/A"}</h2>
			<p>
				{formattedPlan.marketingUrl ? (
					<a href={formattedPlan.marketingUrl}>Plan Details</a>
				) : (
					"No description available."
				)}
			</p>
			<p>Premium: {formattedPlan.premium || "Data not available"}</p>
			<p>Plan Type: {formattedPlan.type || "Data not available"}</p>
			<p>Deductible: {formattedPlan.deductible || "Data not available"}</p>

			<h3>Coverage Details:</h3>
			<ul>
				<li>
					General Co-Pay: {formattedPlan.coPay.general || "Data not available"}
				</li>
				<li>
					Specialist Co-Pay:{" "}
					{formattedPlan.coPay.specialist || "Data not available"}
				</li>
				<li>
					Hospital Co-Pay:{" "}
					{formattedPlan.coPay.hospital || "Data not available"}
				</li>
				<li>
					Network Coverage:{" "}
					{formattedPlan.networkCoverage || "Data not available"}
				</li>
				<li>
					Medicare Eligible:{" "}
					{formattedPlan.medicareEligible || "Data not available"}
				</li>
				<li>
					Medicaid Eligible:{" "}
					{formattedPlan.medicaidEligible || "Data not available"}
				</li>
			</ul>

			<h3>Additional Benefits:</h3>
			<ul>
				{formattedPlan.additionalBenefits.length > 0 ? (
					formattedPlan.additionalBenefits.map((benefit, index) => (
						<li key={index}>{benefit}</li>
					))
				) : (
					<p>No additional benefits available.</p>
				)}
			</ul>

			{/* Example: Adding Provider Directory and Limitations */}
			<h3>Provider Directory:</h3>
			<p>{formattedPlan.providerDirectory || "Not Available"}</p>

			<h3>Limitations:</h3>
			<ul>
				{formattedPlan.limitations.length > 0 ? (
					formattedPlan.limitations.map((limitation, index) => (
						<li key={index}>{limitation}</li>
					))
				) : (
					<p>No limitations specified.</p>
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
