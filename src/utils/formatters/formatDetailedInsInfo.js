/** @format */

import { formatPlanType } from "./formatData";
import { formatCurrency } from "./formatData";
import { formatDate } from "./formatData";

export const formatDetailedInsInfo = (rawData) => {
	return {
		// Basic Information
		name: rawData.planName || rawData.name || "Unknown Plan",
		type: formatPlanType(rawData.planType || rawData.type),
		premium: formatCurrency(rawData.premium || rawData.premium_w_credit || 0),
		deductible: formatCurrency(
			rawData.deductibles?.[0]?.amount || rawData.deductible || 0
		),
		effectiveDate: rawData.effectiveDate
			? formatDate(rawData.effectiveDate)
			: "N/A",

		// Co-Pays
		coPay: {
			general: rawData.benefits?.[0]?.cost_sharings?.[0]?.copay_amount
				? formatCurrency(rawData.benefits[0].cost_sharings[0].copay_amount)
				: "N/A",
			specialist: rawData.benefits?.[1]?.cost_sharings?.[0]?.copay_amount
				? formatCurrency(rawData.benefits[1].cost_sharings[0].copay_amount)
				: "N/A",
			hospital: rawData.benefits?.[2]?.cost_sharings?.[0]?.copay_amount
				? formatCurrency(rawData.benefits[2].cost_sharings[0].copay_amount)
				: "N/A",
		},

		// Coverage Information
		coverage: Array.isArray(rawData.coverageDetails)
			? rawData.coverageDetails.map((detail) => ({
					service: detail.serviceName,
					coverageAmount: formatCurrency(detail.amountCovered),
			  }))
			: [],

		// Network and Eligibility
		networkCoverage:
			rawData.network_url || rawData.networkCoverage || "Not Specified",
		medicareEligible: rawData.isMedicareEligible ? "Yes" : "No",
		medicaidEligible: rawData.isMedicaidEligible ? "Yes" : "No",

		// Additional Benefits
		additionalBenefits: Array.isArray(rawData.benefits)
			? rawData.benefits.map((benefit) => benefit.name)
			: [],

		// Disease Management Programs
		diseaseMgmtPrograms: rawData.disease_mgmt_programs || [],

		// URLs for Plan Resources
		brochureUrl: rawData.brochure_url || "Not Available",
		benefitsUrl: rawData.benefits_url || "Not Available",
		networkUrl: rawData.network_url || "Not Available",
		formularyUrl: rawData.formulary_url || "Not Available",

		// Quality Ratings
		qualityRating: rawData.quality_rating?.global_rating || "Not Rated",

		// HSA Eligibility
		hsaEligible: rawData.hsa_eligible ? "Yes" : "No",

		// Limitations and Special Coverage
		limitations: Array.isArray(rawData.limitations)
			? rawData.limitations.map((limitation) => limitation.description)
			: ["No limitations specified"],
		specialCoverage: rawData.specialCoverage
			? rawData.specialCoverage.map((item) => ({
					category: item.categoryName,
					details: item.details,
			  }))
			: [],

		// Maximum Out-of-Pocket (MOOP)
		moop: formatCurrency(
			rawData.moops?.[0]?.amount || rawData.out_of_pocket_max || 0
		),

		// Metal Level (e.g., Bronze, Silver)
		metalLevel: rawData.metal_level || "Not Specified",
	};
};
