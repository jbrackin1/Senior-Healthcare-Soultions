/** @format */
import { formatPlanType, formatCurrency, formatDate } from "./formatData";

export const formatDetailedInsInfo = (rawData) => {
	return {
		// Basic Information
		name: rawData.planName || "Unknown Plan",
		type: formatPlanType(rawData.planType),
		premium: formatCurrency(rawData.premium),
		deductible: formatCurrency(rawData.deductible),
		effectiveDate: rawData.effectiveDate
			? formatDate(rawData.effectiveDate)
			: "N/A",

		// Co-Pays
		coPay: {
			general: rawData.coPay ? `${rawData.coPay}%` : "N/A",
			specialist: rawData.specialistCoPay
				? `${rawData.specialistCoPay}%`
				: "N/A",
			hospital: rawData.hospitalCoPay ? `${rawData.hospitalCoPay}%` : "N/A",
		},

		// Coverage Information
		coverage: Array.isArray(rawData.coverageDetails)
			? rawData.coverageDetails.map((detail) => ({
					service: detail.serviceName,
					coverageAmount: formatCurrency(detail.amountCovered),
			  }))
			: [],

		// Network and Eligibility
		networkCoverage: rawData.networkCoverage || "Not Specified",
		medicareEligible: rawData.isMedicareEligible ? "Yes" : "No",
		medicaidEligible: rawData.isMedicaidEligible ? "Yes" : "No",

		// Additional Benefits
		additionalBenefits: Array.isArray(rawData.additionalBenefits)
			? rawData.additionalBenefits
			: [],

		// Detailed Breakdown (Examples)
		providerDirectory: rawData.providerDirectory || "Not Available",
		marketingUrl: rawData.marketing_url || "No URL provided",
		specialCoverage: rawData.specialCoverage
			? rawData.specialCoverage.map((item) => ({
					category: item.categoryName,
					details: item.details,
			  }))
			: [],
		limitations: Array.isArray(rawData.limitations)
			? rawData.limitations.map((limitation) => limitation.description)
			: ["No limitations specified"],
	};
};
