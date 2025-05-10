/** @format */

import { formatCurrency, formatPlanType, formatDate } from "./formatData";

export const formatDetailedInsInfo = (rawData) => {
	const planData = rawData?.plan || rawData;
	console.log("Formatted Plan Data:", planData);

	const getCostSharingDescription = (keyword) => {
		const match = planData?.benefits?.find((b) =>
			b.name?.toLowerCase().includes(keyword.toLowerCase())
		);

		if (!match) return "N/A";

		const sharing = match.cost_sharings?.[0];
		if (!sharing) return "N/A";

		if (sharing.copay_amount && sharing.copay_amount > 0) {
			return `$${sharing.copay_amount.toFixed(2)}`;
		}

		if (
			sharing.coinsurance_rate &&
			sharing.coinsurance_rate > 0 &&
			sharing.coinsurance_options?.toLowerCase().includes("after deductible")
		) {
			return `${Math.round(sharing.coinsurance_rate * 100)}% after deductible`;
		}

		return "Covered — check details";
	};

	const groupBenefitsByCategory = (allBenefits = []) => {
		const categoryMap = {
			"Mental Health & Substance Use": ["mental", "behavioral", "substance"],
			"Dental & Vision": ["dental", "vision", "eye", "orthodontia"],
			"Core Medical": ["primary care", "specialist", "hospital", "surgery"],
			"Rehabilitative & Preventive": [
				"rehabilitative",
				"preventive",
				"therapy",
				"well baby",
			],
			"Diagnostics & Imaging": [
				"laboratory",
				"x-ray",
				"diagnostic",
				"imaging",
				"mri",
			],
			Prescriptions: ["drug", "medication", "formulary"],
			"Other Medical Services": [
				"equipment",
				"nursing",
				"hospice",
				"home health",
				"transportation",
				"infusion",
			],
			"Therapies & Alternative Care": ["acupuncture", "nutrition", "silver"],
			"Gender-Affirming & Reproductive": ["gender", "abortion", "infertility"],
			"Cosmetic & Surgery": ["cosmetic", "tmj", "reconstructive", "bariatric"],
		};

		const categorized = {};
		const unmatched = [];

		for (const benefit of allBenefits) {
			let placed = false;
			for (const [category, keywords] of Object.entries(categoryMap)) {
				if (
					keywords.some((keyword) =>
						benefit.name?.toLowerCase().includes(keyword.toLowerCase())
					)
				) {
					if (!categorized[category]) categorized[category] = [];
					categorized[category].push(benefit);
					placed = true;
					break;
				}
			}
			if (!placed) {
				if (!categorized["Other Covered Services"])
					categorized["Other Covered Services"] = [];
				categorized["Other Covered Services"].push(benefit);
			}
		}

		console.log("Unmatched Benefits:", unmatched);
		return categorized;
	};

	return {
		// ✅ Basic Info
		name: planData?.planName || planData?.name || "Unknown Plan",
		type: formatPlanType(
			planData?.planType || planData?.type || "Not Specified"
		),
		premium:
			planData?.premium !== undefined ? formatCurrency(planData.premium) : null,
		premium_w_credit:
			planData?.premium_w_credit !== undefined
				? formatCurrency(planData.premium_w_credit)
				: null,
		ehb_premium:
			planData?.ehb_premium !== undefined
				? formatCurrency(planData.ehb_premium)
				: null,

		// ✅ Tiered Tables
		tiered_deductibles: planData?.tiered_deductibles || [],
		tiered_moops: planData?.tiered_moops || [],
		tiered_premiums: planData?.tiered_premiums || [],

		// ✅ Simple fallback summary values
		deductible:
			planData?.tiered_deductibles?.[0]?.amount !== undefined
				? formatCurrency(planData.tiered_deductibles[0].amount)
				: "N/A",
		moop:
			planData?.tiered_moops?.[0]?.amount !== undefined
				? formatCurrency(planData.tiered_moops[0].amount)
				: planData?.out_of_pocket_max
				? formatCurrency(planData.out_of_pocket_max)
				: "N/A",

		effectiveDate:
			planData?.effectiveDate && !isNaN(new Date(planData.effectiveDate))
				? formatDate(planData.effectiveDate)
				: "N/A",

		// ✅ Copay summaries
		coPay: {
			general: getCostSharingDescription("primary care"),
			specialist: getCostSharingDescription("specialist"),
			hospital: getCostSharingDescription("inpatient hospital"),
		},

		// ✅ Grouped Benefits
		benefits: Array.isArray(planData?.benefits) ? planData.benefits : [],
		categorizedBenefits: groupBenefitsByCategory(planData?.benefits || []),
		additionalBenefits: Array.isArray(planData?.benefits)
			? planData.benefits.map((benefit) => benefit.name)
			: [],

		// ✅ Meta and URLs
		networkCoverage: planData?.network_url || "Not Specified",
		medicareEligible: planData?.isMedicareEligible ? "Yes" : "No",
		medicaidEligible: planData?.isMedicaidEligible ? "Yes" : "No",
		hsaEligible: planData?.hsa_eligible ? "Yes" : "No",
		metalLevel: planData?.metal_level || "Not Specified",

		// ✅ Ratings
		qualityRating: planData?.quality_rating?.global_rating || "Not Rated",
		enrollee_experience_rating:
			planData?.quality_rating?.enrollee_experience_rating || "N/A",
		plan_efficiency_rating:
			planData?.quality_rating?.plan_efficiency_rating || "N/A",
		clinical_quality_management_rating:
			planData?.quality_rating?.clinical_quality_management_rating || "N/A",

		// ✅ External Links
		brochureUrl: planData?.brochure_url || "Not Available",
		benefitsUrl: planData?.benefits_url || "Not Available",
		networkUrl: planData?.network_url || "Not Available",
		formularyUrl: planData?.formulary_url || "Not Available",

		// ✅ Disease Programs
		disease_mgmt_programs: planData?.disease_mgmt_programs || [],
	};
};
export default formatDetailedInsInfo;