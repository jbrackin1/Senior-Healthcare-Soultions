/** @format */

import { formatPlanType } from "./formatData";
import { formatCurrency } from "./formatData";
import { formatDate } from "./formatData";

export const formatDetailedInsInfo = (rawData) => {
	const planData = rawData?.plan || rawData;
	console.log("Formatted Plan Data:", planData);

	const getCopayAmount = (planData, keyword) => {
		const match = planData?.benefits?.find((b) =>
			b.name?.toLowerCase().includes(keyword.toLowerCase())
		);
		return typeof match?.cost_sharings?.[0]?.copay_amount === "number"
			? `$${match.cost_sharings[0].copay_amount.toFixed(2)}`
			: "N/A";
	};

	const getHospitalCostShare = (planData) => {
		const hospitalBenefit = planData?.benefits?.find((b) =>
			b.name?.toLowerCase().includes("inpatient hospital")
		);

		if (!hospitalBenefit) return "N/A";

		const inNetwork = hospitalBenefit.cost_sharings?.find(
			(c) => c.network_tier?.toLowerCase() === "in-network"
		);

		if (!inNetwork) return "N/A";

		if (inNetwork.copay_amount && inNetwork.copay_amount > 0) {
			return `$${inNetwork.copay_amount.toFixed(2)} per stay`;
		}

		if (
			inNetwork.coinsurance_rate &&
			inNetwork.coinsurance_rate > 0 &&
			inNetwork.coinsurance_options?.toLowerCase().includes("after deductible")
		) {
			return `${Math.round(
				inNetwork.coinsurance_rate * 100
			)}% after deductible`;
		}

		return "Covered — check details";
	};

	return {
		// ✅ Basic Information
		name: planData?.planName || planData?.name || "Unknown Plan",
		type: formatPlanType(
			planData?.planType || planData?.type || "Not Specified"
		),
		premium:
			planData?.premium !== undefined
				? formatCurrency(planData.premium)
				: "N/A",
		deductible:
			planData?.deductible !== undefined
				? formatCurrency(planData.deductible)
				: "N/A",
		effectiveDate:
			planData?.effectiveDate && !isNaN(new Date(planData.effectiveDate))
				? formatDate(planData.effectiveDate)
				: "N/A",

		// ✅ Co-Pays
		coPay: {
			general: getCopayAmount(planData, "Primary Care"),
			specialist: getCopayAmount(planData, "Specialist"),
			hospital: getHospitalCostShare(planData),
		},

		// ✅ Network and Eligibility
		networkCoverage:
			planData?.network_url || planData?.networkCoverage || "Not Specified",
		medicareEligible: planData?.isMedicareEligible ? "Yes" : "No",
		medicaidEligible: planData?.isMedicaidEligible ? "Yes" : "No",

		// ✅ Additional Benefits
		benefits: Array.isArray(planData?.benefits) ? planData.benefits : [],
		additionalBenefits: Array.isArray(planData?.benefits)
			? planData.benefits.map((benefit) => benefit.name)
			: [],

		// ✅ URLs for Plan Resources
		brochureUrl: planData?.brochure_url || "Not Available",
		benefitsUrl: planData?.benefits_url || "Not Available",
		networkUrl: planData?.network_url || "Not Available",
		formularyUrl: planData?.formulary_url || "Not Available",

		// ✅ Quality Ratings
		qualityRating: planData?.quality_rating?.global_rating || "Not Rated",
		enrollee_experience_rating:
			planData?.quality_rating?.enrollee_experience_rating || "N/A",
		plan_efficiency_rating:
			planData?.quality_rating?.plan_efficiency_rating || "N/A",
		clinical_quality_management_rating:
			planData?.quality_rating?.clinical_quality_management_rating || "N/A",

		// ✅ HSA Eligibility
		hsaEligible: planData?.hsa_eligible ? "Yes" : "No",

		// ✅ Maximum Out-of-Pocket (MOOP)
		moop:
			planData?.moops?.[0]?.amount || planData?.out_of_pocket_max
				? formatCurrency(
						planData?.moops?.[0]?.amount || planData?.out_of_pocket_max
				  )
				: "N/A",

		// ✅ Metal Level
		metalLevel: planData?.metal_level || "Not Specified",

		// ✅ Disease Management
		disease_mgmt_programs: planData?.disease_mgmt_programs || [],
	};
};
