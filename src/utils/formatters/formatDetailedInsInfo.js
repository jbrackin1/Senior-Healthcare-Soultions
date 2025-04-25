import { formatPlanType } from "./formatData";
import { formatCurrency } from "./formatData";
import { formatDate } from "./formatData";

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
				if (!categorized.Uncategorized) categorized.Uncategorized = [];
				categorized.Uncategorized.push(benefit);
				unmatched.push(benefit.name);
			}
		}

		console.log("Unmatched Benefits:", unmatched);
		return categorized;
	};

	return {
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

		coPay: {
			general: getCostSharingDescription("primary care"),
			specialist: getCostSharingDescription("specialist"),
			hospital: getCostSharingDescription("inpatient hospital"),
		},

		networkCoverage:
			planData?.network_url || planData?.networkCoverage || "Not Specified",
		medicareEligible: planData?.isMedicareEligible ? "Yes" : "No",
		medicaidEligible: planData?.isMedicaidEligible ? "Yes" : "No",
		benefits: Array.isArray(planData?.benefits) ? planData.benefits : [],
		categorizedBenefits: groupBenefitsByCategory(planData?.benefits || []),
		additionalBenefits: Array.isArray(planData?.benefits)
			? planData.benefits.map((benefit) => benefit.name)
			: [],
		brochureUrl: planData?.brochure_url || "Not Available",
		benefitsUrl: planData?.benefits_url || "Not Available",
		networkUrl: planData?.network_url || "Not Available",
		formularyUrl: planData?.formulary_url || "Not Available",
		qualityRating: planData?.quality_rating?.global_rating || "Not Rated",
		enrollee_experience_rating:
			planData?.quality_rating?.enrollee_experience_rating || "N/A",
		plan_efficiency_rating:
			planData?.quality_rating?.plan_efficiency_rating || "N/A",
		clinical_quality_management_rating:
			planData?.quality_rating?.clinical_quality_management_rating || "N/A",
		hsaEligible: planData?.hsa_eligible ? "Yes" : "No",
		moop:
			planData?.moops?.[0]?.amount || planData?.out_of_pocket_max
				? formatCurrency(
						planData?.moops?.[0]?.amount || planData?.out_of_pocket_max
				  )
				: "N/A",
		metalLevel: planData?.metal_level || "Not Specified",
		disease_mgmt_programs: planData?.disease_mgmt_programs || [],
	};
};
