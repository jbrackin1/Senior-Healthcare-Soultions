/** @format */

import { formatPlanType } from "./formatData";
import { formatCurrency } from "./formatData";
import { formatDate } from "./formatData";

export const formatDetailedInsInfo = (rawData) => {
	const planData = rawData?.plan || rawData;

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
			general: planData?.benefits?.[0]?.cost_sharings?.[0]?.copay_amount
				? formatCurrency(planData.benefits[0].cost_sharings[0].copay_amount)
				: "N/A",
			specialist: planData?.benefits?.[1]?.cost_sharings?.[0]?.copay_amount
				? formatCurrency(planData.benefits[1].cost_sharings[0].copay_amount)
				: "N/A",
			hospital: planData?.benefits?.[2]?.cost_sharings?.[0]?.copay_amount
				? formatCurrency(planData.benefits[2].cost_sharings[0].copay_amount)
				: "N/A",
		},

		// ✅ Network and Eligibility
		networkCoverage:
			planData?.network_url || planData?.networkCoverage || "Not Specified",
		medicareEligible: planData?.isMedicareEligible ? "Yes" : "No",
		medicaidEligible: planData?.isMedicaidEligible ? "Yes" : "No",

		// ✅ Additional Benefits
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
	};
};
