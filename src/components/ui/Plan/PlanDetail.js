/** @format */

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import Button from "../Global/button";
import { formatDetailedInsInfo } from "../../../utils/formatters/formatDetailedInsInfo";
import { fetchPlanDetails } from "../../../utils/api/fetchPlanDetails";

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
	const location = useLocation();

	const [plan, setPlan] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			if (!planId) {
				setError("No plan ID provided.");
				setLoading(true);
				return;
			}

			if (location.state?.planData) {
				setPlan(location.state.planData);
				setLoading(false);
			} else {
				try {
					const data = await fetchPlanDetails(planId);
					if (!data) {
						setError("Plan not found.");
					} else {
						setPlan(data);
					}
				} catch (err) {
					console.error(err);
					setError("An error occurred while fetching the plan details.");
				} finally {
					setLoading(false);
				}
			}
		};

		fetchData();
	}, []);

	if (loading) return <p>Loading...</p>;
	if (error) return <p style={{ color: "red" }}>{error}</p>;
	if (!plan) return <p>No plan details available.</p>;

	const formattedPlan = formatDetailedInsInfo(plan);

	return (
		<DetailContainer>
			<h2>{formattedPlan.name}</h2>

			<p>
				<b>Premium:</b> {formattedPlan.premium}
			</p>
			<p>
				<b>Plan Type:</b> {formattedPlan.type}
			</p>
			<p>
				<b>Deductible:</b> {formattedPlan.deductible}
			</p>
			<p>
				<b>Metal Level:</b> {formattedPlan.metalLevel}
			</p>
			<p>
				<b>Maximum Out-of-Pocket (MOOP):</b> {formattedPlan.moop}
			</p>
			<p>
				<b>HSA Eligible:</b> {formattedPlan.hsaEligible}
			</p>

			<h3>
				<b>Coverage Details:</b>
			</h3>
			<ul>
				<li>
					<b>General Co-Pay:</b> {formattedPlan.coPay.general}
				</li>
				<li>
					<b>Specialist Co-Pay:</b> {formattedPlan.coPay.specialist}
				</li>
				<li>
					<b>Hospital Co-Pay:</b> {formattedPlan.coPay.hospital}
				</li>
				<li>
					<b>Network Coverage:</b> {formattedPlan.networkCoverage}
				</li>
				<li>
					<b>Medicare Eligible:</b> {formattedPlan.medicareEligible}
				</li>
				<li>
					<b>Medicaid Eligible:</b> {formattedPlan.medicaidEligible}
				</li>
			</ul>

			<h3>
				<b>Additional Benefits:</b>
			</h3>
			{formattedPlan.additionalBenefits.length > 0 ? (
				<ul>
					{formattedPlan.additionalBenefits.map((benefit, index) => (
						<li key={index}>{benefit}</li>
					))}
				</ul>
			) : (
				<p>No additional benefits available.</p>
			)}

			<h3>
				<b>Plan Resources:</b>
			</h3>
			<ul>
				<li>
					<b>Brochure:</b>{" "}
					{formattedPlan.brochureUrl !== "Not Available" ? (
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
					{formattedPlan.benefitsUrl !== "Not Available" ? (
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
					{formattedPlan.networkUrl !== "Not Available" ? (
						<a href={formattedPlan.networkUrl} target="_blank" rel="noreferrer">
							View Network
						</a>
					) : (
						"Not Available"
					)}
				</li>
				<li>
					<b>Formulary:</b>{" "}
					{formattedPlan.formularyUrl !== "Not Available" ? (
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

			<div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem" }}>
				<Button onClick={() => addToFavorites?.(plan)}>Add to Favorites</Button>
				<Button onClick={() => addToComparison?.(plan)}>
					Add to Comparison
				</Button>
			</div>

			<div style={{ marginTop: "1.5rem" }}>
				{isSignedIn ? (
					<Button onClick={() => navigate("/compare")}>Go to Comparison</Button>
				) : (
					<p>You need to sign up to compare plans.</p>
				)}

				<Button onClick={() => navigate(-1)}>Back</Button>
			</div>
		</DetailContainer>
	);
};

export default PlanDetail;
