/** @format */

// src/utils/formatData.js

/**
 * Utility function to format insurance data for display purposes.
 * This will take raw data from APIs and standardize it for views.
 */

// Helper to format dates in a readable way (MM/DD/YYYY)
export const formatDate = (dateString) => {
	const date = new Date(dateString);
	return date.toLocaleDateString("en-US");
};

// Helper to format currency values (e.g., 1000 to $1,000.00)
export const formatCurrency = (amount) => {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(amount);
};

// Standardize the plan type format (e.g., HMO -> Health Maintenance Organization)
export const formatPlanType = (planType) => {
	const planTypes = {
		HMO: "Health Maintenance Organization",
		PPO: "Preferred Provider Organization",
		EPO: "Exclusive Provider Organization",
	};
	return planTypes[planType] || planType;
};

// Function to aggregate and organize raw insurance data
export const formatInsuranceData = (rawData) => {
	return {
		name: rawData.planName || "Unknown Plan",
		type: formatPlanType(rawData.planType),
		premium: formatCurrency(rawData.premium),
		deductible: formatCurrency(rawData.deductible),
		coPay: {
			general: rawData.coPay ? `${rawData.coPay}%` : "N/A",
			specialist: rawData.specialistCoPay
				? `${rawData.specialistCoPay}%`
				: "N/A",
			hospital: rawData.hospitalCoPay ? `${rawData.hospitalCoPay}%` : "N/A",
		},
		networkCoverage: rawData.networkCoverage || "Not Specified",
		coverage: rawData.coverageDetails.map((detail) => ({
			service: detail.serviceName,
			coverageAmount: formatCurrency(detail.amountCovered),
		})),
		additionalBenefits: rawData.additionalBenefits || [],
		effectiveDate: rawData.effectiveDate
			? formatDate(rawData.effectiveDate)
			: "N/A",
		medicareEligible: rawData.isMedicareEligible ? "Yes" : "No",
		medicaidEligible: rawData.isMedicaidEligible ? "Yes" : "No",
	};
};

// Formats a list of insurance plans for display
export const formatInsuranceList = (insuranceList) => {
	return insuranceList.map(formatInsuranceData);
};
