/** @format */

import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { fetchPlanDetails } from "../../../utils/api/fetchPlanDetails";
import { formatDetailedInsInfo } from "../../../utils/formatters/formatDetailedInsInfo";
import Button from "../Global/everywhere/button";
import BenefitAccordion from "../Global/data-display/BenefitAccordian";
import useMomMode from "../Feedback/MomMode";
import TieredPlanInfoTable from "../Plan/TieredPlanInfoTable";
import ReusableTable from "../Global/data-display/ReusableTable";
import { matchPlanToUserPrefs } from "../../../utils/user/matchUserPrefs";

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
	const userPrefs = location.state?.userPrefs || {};

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
					premium:
						rawData?.premium && rawData.premium > 0
							? rawData.premium
							: fallbackPlan?.premium || null,
					premium_w_credit:
						rawData?.premium_w_credit && rawData.premium_w_credit > 0
							? rawData.premium_w_credit
							: fallbackPlan?.premium_w_credit || null,
					ehb_premium:
						rawData?.ehb_premium && rawData.ehb_premium > 0
							? rawData.ehb_premium
							: fallbackPlan?.ehb_premium || null,
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

	const matchSummary = matchPlanToUserPrefs(plan, userPrefs);

	return (
		<DetailContainer>
			<h2>{plan.name}</h2>
			{matchSummary?.matchesAll ? (
				<div className="highlight-badge">✅ Meets ALL your preferences</div>
			) : (
				<div className="match-summary">
					✅ Matches: {matchSummary.matched.join(", ")}
				</div>
			)}

			<TieredPlanInfoTable title="Deductibles" data={plan.tiered_deductibles} />
			<TieredPlanInfoTable title="Max Out-of-Pocket" data={plan.tiered_moops} />
			<TieredPlanInfoTable title="Premium" data={plan.tiered_premiums} />

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

			<ReusableTable
				headers={["Program"]}
				data={(plan.disease_mgmt_programs || []).map((program) => [program])}
			/>

			<ReusableTable
				headers={["Category", "Rating"]}
				data={[
					["Overall", plan.qualityRating],
					["Experience", plan.enrollee_experience_rating || "N/A"],
					["Efficiency", plan.plan_efficiency_rating || "N/A"],
					[
						"Clinical Quality",
						plan.clinical_quality_management_rating || "N/A",
					],
				]}
			/>

			<ReusableTable
				headers={["Resource"]}
				data={[
					[{ label: "Brochure", url: plan.brochureUrl }],
					[{ label: "Benefits Document", url: plan.benefitsUrl }],
					[{ label: "Network Info", url: plan.networkUrl }],
					[{ label: "Drug Formulary", url: plan.formularyUrl }],
				]}
			/>

			<div style={{ marginTop: "2rem", textAlign: "center" }}>
				<Button
					onClick={() =>
						navigate("/drug-coverage", {
							state: {
								selectedPlans: [{ id: planId, name: plan.name }],
							},
						})
					}>
					Check if your Medication is Covered
				</Button>
			</div>
			<div style={{ marginTop: "2rem", textAlign: "center" }}>
				<Button onClick={() => navigate(-1)}>Back</Button>
			</div>
		</DetailContainer>
	);
};

export default PlanDetailExpanded;
