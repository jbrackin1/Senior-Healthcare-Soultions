/** @format */

import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../Global/button";
import { formatDetailedInsInfo } from "../../../utils/formatters/formatDetailedInsInfo";
import {
	formatCurrency,
	formatDate,
	formatPlanType,
} from "../../../utils/formatters/formatData";

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
					<a href={formattedPlan.marketingUrl} target="_blank" rel="noreferrer">
						Plan Details
					</a>
				) : (
					"No description available."
				)}
			</p>
			<p>
				<b>Premium:</b> {formattedPlan.premium || "Data not available"}
			</p>
			<p>
				<b>Plan Type:</b> {formattedPlan.type || "Data not available"}
			</p>
			<p>
				<b>Deductible:</b> {formattedPlan.deductible || "Data not available"}
			</p>
			<p>
				<b>Metal Level:</b> {formattedPlan.metalLevel || "Data not available"}
			</p>
			<p>
				<b>Maximum Out-of-Pocket (MOOP):</b>{" "}
				{formattedPlan.moop || "Data not available"}
			</p>
			<p>
				<b>HSA Eligible:</b> {formattedPlan.hsaEligible || "Data not available"}
			</p>

			<div>
				<h3>
					<b>Coverage Details:</b>
				</h3>
				<ul>
					<li>
						<b>General Co-Pay:</b>{" "}
						{formattedPlan.coPay.general || "Data not available"}
					</li>
					<li>
						<b>Specialist Co-Pay:</b>{" "}
						{formattedPlan.coPay.specialist || "Data not available"}
					</li>
					<li>
						<b>Hospital Co-Pay:</b>{" "}
						{formattedPlan.coPay.hospital || "Data not available"}
					</li>
					<li>
						<b>Network Coverage:</b>{" "}
						{formattedPlan.networkCoverage || "Data not available"}
					</li>
					<li>
						<b>Medicare Eligible:</b>{" "}
						{formattedPlan.medicareEligible || "Data not available"}
					</li>
					<li>
						<b>Medicaid Eligible:</b>{" "}
						{formattedPlan.medicaidEligible || "Data not available"}
					</li>
				</ul>
			</div>

			<div>
				<h3>
					<b>Additional Benefits:</b>
				</h3>
				<ul>
					{formattedPlan.additionalBenefits.length > 0 ? (
						formattedPlan.additionalBenefits.map((benefit, index) => (
							<li key={index}>{benefit}</li>
						))
					) : (
						<p>No additional benefits available.</p>
					)}
				</ul>
			</div>

			<div>
				<h3>
					<b>Disease Management Programs:</b>
				</h3>
				<ul>
					{formattedPlan.diseaseMgmtPrograms.length > 0 ? (
						formattedPlan.diseaseMgmtPrograms.map((program, index) => (
							<li key={index}>{program}</li>
						))
					) : (
						<p>No disease management programs available.</p>
					)}
				</ul>
			</div>

			<div>
				<h3>
					<b>Plan Resources:</b>
				</h3>
				<ul>
					<li>
						<b>Brochure:</b>{" "}
						{formattedPlan.brochureUrl ? (
							<a
								href={formattedPlan.brochureUrl}
								target="_blank"
								rel="noreferrer">
								View Brochure
							</a>
						) : (
							"Not Available"
						)}
					</li>
					<li>
						<b>Benefits:</b>{" "}
						{formattedPlan.benefitsUrl ? (
							<a
								href={formattedPlan.benefitsUrl}
								target="_blank"
								rel="noreferrer">
								View Benefits
							</a>
						) : (
							"Not Available"
						)}
					</li>
					<li>
						<b>Network:</b>{" "}
						{formattedPlan.networkUrl ? (
							<a
								href={formattedPlan.networkUrl}
								target="_blank"
								rel="noreferrer">
								View Network
							</a>
						) : (
							"Not Available"
						)}
					</li>
					<li>
						<b>Formulary:</b>{" "}
						{formattedPlan.formularyUrl ? (
							<a
								href={formattedPlan.formularyUrl}
								target="_blank"
								rel="noreferrer">
								View Formulary
							</a>
						) : (
							"Not Available"
						)}
					</li>
				</ul>
			</div>

			<div>
				<h3>
					<b>Limitations:</b>
				</h3>
				<ul>
					{formattedPlan.limitations.length > 0 ? (
						formattedPlan.limitations.map((limitation, index) => (
							<li key={index}>{limitation}</li>
						))
					) : (
						<p>No limitations specified.</p>
					)}
				</ul>
			</div>

			<div>
				<div style={{ display: "flex", gap: "1rem" }}>
					<Button onClick={() => addToFavorites?.(plan)}>
						Add to Favorites
					</Button>
					<Button onClick={() => addToComparison?.(plan)}>
						Add to Comparison
					</Button>
				</div>

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
