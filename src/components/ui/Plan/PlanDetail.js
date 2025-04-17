/** @format */

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { fetchPlanDetails } from "../../../utils/api/fetchPlanDetails";
import { formatDetailedInsInfo } from "../../../utils/formatters/formatDetailedInsInfo";
import Button from "../Global/button";
import BenefitAccordion from "../Global/BenefitAccordian";
import useMomMode from "../Feedback/MomMode";

const DetailContainer = styled.div`
	padding: 2rem;
	background-color: ${({ theme }) => theme.colors.background};
	border-radius: 8px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	max-width: 900px;
	margin: auto;
`;

const AccordionToggle = styled.button`
	width: 100%;
	text-align: left;
	padding: 1rem;
	background-color: ${({ theme }) => theme.colors.accent};
	color: white;
	border: none;
	cursor: pointer;
	font-weight: bold;
	border-radius: 4px;
`;

const AccordionContent = styled.div`
	padding: 1rem;
	background-color: ${({ theme }) => theme.colors.backgroundAlt};
	border: 1px solid #ccc;
	border-radius: 4px;
	margin-top: 0.5rem;
`;

const PlanDetailExpanded = () => {
	const { planId } = useParams();
	const navigate = useNavigate();
	const [plan, setPlan] = useState(null);
	const [loading, setLoading] = useState(true);
	const [expanded, setExpanded] = useState(false);
	const { enabled } = useMomMode(); // ✅ this defines 'enabled'; still needs logic finished
	

	useEffect(() => {
		const loadPlanDetails = async () => {
			if (!planId) return;
			const rawData = await fetchPlanDetails(planId);
			if (rawData) setPlan(formatDetailedInsInfo(rawData));
			setLoading(false);
		};

		loadPlanDetails();
	}, [planId]);

	if (loading) return <p>Loading...</p>;
	if (!plan) return <p>No plan details available.</p>;

	return (
		<DetailContainer>
			<h2>{plan.name}</h2>
			<p>
				<b>Premium:</b> {plan.premium}
			</p>
			<p>
				<b>Plan Type:</b> {plan.type}
			</p>
			<p>
				<b>Deductible:</b> {plan.deductible}
			</p>
			<p>
				<b>Metal Level:</b> {plan.metalLevel}
			</p>
			<p>
				<b>Maximum Out-of-Pocket:</b> {plan.moop}
			</p>
			<p>
				<b>HSA Eligible:</b> {plan.hsaEligible}
			</p>

			<BenefitAccordion
				benefits={plan.categorizedBenefits}
				userPreferences={false}
				momMode={enabled}
			/>
			<div>
				<h3>
					<b>Core Medical Benefits:</b>
				</h3>
				{plan?.benefits?.map((benefit, index) => (
					<div
						key={index}
						style={{
							border: "1px solid #ccc",
							padding: "1rem",
							marginBottom: "1rem",
							backgroundColor: benefit.covered ? "#e6f4ea" : "#fcebea",
							borderLeft: benefit.covered ? "4px solid green" : "4px solid red",
						}}>
						<h4>
							{benefit.name} – {benefit.covered ? "Covered" : "Not Covered"}
						</h4>
						{benefit.explanation && (
							<p style={{ fontStyle: "italic", color: "#555" }}>
								{benefit.explanation}
							</p>
						)}
						{benefit.cost_sharings?.map((share, i) => (
							<p key={i}>
								<b>{share.network_tier}:</b> {share.display_string}
							</p>
						))}
						{benefit.has_limits && (
							<p style={{ color: "orange" }}>
								⚠️ This benefit has coverage limits.
							</p>
						)}
					</div>
				))}
			</div>

			<h3>Quality Ratings</h3>
			<ul>
				<li>Overall: {plan.qualityRating}</li>
				<li>Experience: {plan.enrollee_experience_rating || "N/A"}</li>
				<li>Efficiency: {plan.plan_efficiency_rating || "N/A"}</li>
				<li> Clinical Quality:{" "}
					{plan.clinical_quality_management_rating || "N/A"}
				</li>
			</ul>

			<h3>Disease Management Programs</h3>
			<ul>
				{(plan.disease_mgmt_programs || []).map((item, i) => (
					<li key={i}>{item}</li>
				))}
			</ul>

			<h3>Resources</h3>
			<ul>
				<li>
					<a href={plan.brochureUrl} target="_blank" rel="noreferrer">
						Brochure
					</a>
				</li>
				<li>
					<a href={plan.benefitsUrl} target="_blank" rel="noreferrer">
						Benefits Document
					</a>
				</li>
				<li>
					<a href={plan.networkUrl} target="_blank" rel="noreferrer">
						Network Info
					</a>
				</li>
				<li>
					<a href={plan.formularyUrl} target="_blank" rel="noreferrer">
						Drug Formulary
					</a>
				</li>
			</ul>

			<Button onClick={() => navigate(-1)}>Back</Button>
		</DetailContainer>
	);
};

export default PlanDetailExpanded;
