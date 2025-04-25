/** @format */

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { fetchPlanDetails } from "../../../utils/api/fetchPlanDetails";
import { formatDetailedInsInfo } from "../../../utils/formatters/formatDetailedInsInfo";
import Button from "../Global/button";
import BenefitAccordion from "../Global/BenefitAccordian";
import useMomMode from "../Feedback/MomMode";
import TieredPlanInfoTable from "../Plan/TieredPlanInfoTable";

const DetailContainer = styled.div`
	padding: 2rem;
	background-color: ${({ theme }) => theme.colors.background};
	border-radius: 8px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	max-width: 900px;
	margin: auto;
`;

const MetadataRow = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	gap: 1.5rem;
	margin: 1rem 0;
	font-size: 1rem;

	span {
		flex: 1;
		min-width: 120px;
	}
`;

const PlanDetailExpanded = () => {
	const { planId } = useParams();
	const navigate = useNavigate();
	const location = useLocation();
	const { enabled } = useMomMode();

	const fallbackPlan = location.state?.plan || null;

	const [plan, setPlan] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const loadPlanDetails = async () => {
			if (!planId) return;

			try {
				const rawData = await fetchPlanDetails(planId);

				const mergedData = {
					...rawData,
					...(fallbackPlan || {}),
					tiered_deductibles:
						(fallbackPlan?.tiered_deductibles?.length || 0) >
						(rawData?.tiered_deductibles?.length || 0)
							? fallbackPlan.tiered_deductibles
							: rawData.tiered_deductibles,
					tiered_moops:
						(fallbackPlan?.tiered_moops?.length || 0) >
						(rawData?.tiered_moops?.length || 0)
							? fallbackPlan.tiered_moops
							: rawData.tiered_moops,
					tiered_premiums:
						(fallbackPlan?.tiered_premiums?.length || 0) >
						(rawData?.tiered_premiums?.length || 0)
							? fallbackPlan.tiered_premiums
							: rawData.tiered_premiums,
				};

				setPlan(formatDetailedInsInfo(mergedData));
			} catch (error) {
				console.error("Error fetching plan details:", error);
			} finally {
				setLoading(false);
			}
		};

		loadPlanDetails();
	}, [planId, fallbackPlan]);

	if (loading) return <p>Loading...</p>;
	if (!plan) return <p>No plan details available.</p>;

	return (
		<DetailContainer>
			<h2>{plan.name}</h2>

			<TieredPlanInfoTable title="Deductibles" data={plan.tiered_deductibles} />
			<TieredPlanInfoTable title="Max Out-of-Pocket" data={plan.tiered_moops} />
			<TieredPlanInfoTable title="Premium" data={plan.tiered_premiums} />

			<MetadataRow>
				{plan.premium && (
					<span>
						<b>Premium:</b> {plan.premium}
					</span>
				)}
				{plan.premium_w_credit && (
					<span>
						<b>After Credit:</b> {plan.premium_w_credit}
					</span>
				)}
				{plan.ehb_premium && (
					<span>
						<b>EHB Only:</b> {plan.ehb_premium}
					</span>
				)}
			</MetadataRow>

			<MetadataRow>
				<span>
					<b>Plan Type:</b> {plan.type}
				</span>
				<span>
					<b>Metal Level:</b> {plan.metalLevel}
				</span>
				<span>
					<b>HSA Eligible:</b> {plan.hsaEligible}
				</span>
			</MetadataRow>

			<BenefitAccordion
				benefits={plan.categorizedBenefits}
				userPreferences={false}
				momMode={enabled}
			/>

			<h3>Quality Ratings</h3>
			<ul>
				<li>Overall: {plan.qualityRating}</li>
				<li>Experience: {plan.enrollee_experience_rating || "N/A"}</li>
				<li>Efficiency: {plan.plan_efficiency_rating || "N/A"}</li>
				<li>
					Clinical Quality: {plan.clinical_quality_management_rating || "N/A"}
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
