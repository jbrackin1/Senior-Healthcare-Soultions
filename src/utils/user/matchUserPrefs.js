/** @format */

import { normalizeBenefitName } from "./normalizeBenefitName";

// 🔍 Finds wellness-related programs in a plan, matching name, desc, or covered flag
const extractWellnessPrograms = (plan) => {
	const keywords = [
		"Telehealth",
		"Mental Health",
		"Smoking Cessation",
		"Weight Loss",
		"Chiropractic",
		"Acupuncture",
		"Nutrition",
		"Physical Therapy",
		"SilverSneakers",
	];

	return (plan.benefits || [])
		.filter((b) => {
			const name = normalizeBenefitName(b.name || "");
			const desc = normalizeBenefitName(b.description || "");
			const covered = String(b.covered || "").toLowerCase();

			return keywords.some((kw) => {
				const keyword = normalizeBenefitName(kw);
				return (
					name.includes(keyword) ||
					desc.includes(keyword) ||
					covered.includes(keyword)
				);
			});
		})
		.map((b) => normalizeBenefitName(b.name));
};

// ✅ Detect if user selected any preferences
const hasUserSelectedPrefs = (prefs = {}) => {
	return (
		(Array.isArray(prefs.lifestylePrograms) &&
			prefs.lifestylePrograms.length > 0) ||
		prefs.dentalCoverage ||
		prefs.visionCoverage ||
		prefs.metalLevel ||
		typeof prefs.preferredPremium === "number"
	);
};

// 🧠 Main logic to match a plan to user preferences
const matchPlanToUserPrefs = (plan, formData = {}) => {
	const matched = [];
	const missing = [];

	if (!hasUserSelectedPrefs(formData))
		return { matchesAll: false, matched, missing };
	if (!Array.isArray(plan.benefits)) {
		missing.push("Benefit details not loaded");
		return { matchesAll: false, matched, missing };
	}

	// Premium
	if (
		typeof formData.preferredPremium === "number" &&
		formData.preferredPremium > 0
	) {
		const maxPremium = formData.preferredPremium;
		if (plan.premium <= maxPremium) {
			matched.push(`Under $${maxPremium}/month`);
		} else {
			missing.push(`Premium under $${maxPremium}`);
		}
	}

	// Dental
	if (formData.dentalCoverage) {
		const hasDental = plan.benefits.some((b) =>
			normalizeBenefitName(b.name).includes("Dental")
		);
		hasDental ? matched.push("Dental") : missing.push("Dental");
	}

	// Vision
	if (formData.visionCoverage) {
		const hasVision = plan.benefits.some((b) =>
			normalizeBenefitName(b.name).includes("Vision")
		);
		hasVision ? matched.push("Vision") : missing.push("Vision");
	}

	// Lifestyle / Wellness Programs
	const planPrograms = extractWellnessPrograms(plan);
	const userPrograms = (formData.lifestylePrograms || []).map(
		normalizeBenefitName
	);

	// Concierge Logic 🔥

	// Tobacco
	if (formData.usesTobacco) {
		const hasCessation = plan.benefits.some((b) =>
			normalizeBenefitName(b.name).includes("Smoking Cessation")
		);
		hasCessation
			? matched.push("Smoking Cessation")
			: missing.push("Smoking Cessation");
	}

	// Pregnancy
	if (formData.isPregnant) {
		const hasMaternity = plan.benefits.some((b) =>
			normalizeBenefitName(b.name).includes("Maternity")
		);
		hasMaternity
			? matched.push("Maternity Care")
			: missing.push("Maternity Care");
	}

	// Parent
	if (formData.isParent) {
		const hasPediatric = plan.benefits.some((b) =>
			normalizeBenefitName(b.name).includes("Pediatric")
		);
		hasPediatric
			? matched.push("Pediatric Coverage")
			: missing.push("Pediatric Coverage");
	}

	// Minimum Essential Coverage
	if (formData.hasMEC) {
		const hasMEC = plan.benefits.some((b) =>
			normalizeBenefitName(b.name).includes("Essential Benefits")
		);
		hasMEC
			? matched.push("Minimum Essential Coverage")
			: missing.push("Minimum Essential Coverage");
	}

	userPrograms.forEach((program) => {
		if (planPrograms.includes(program)) {
			matched.push(program);
		} else {
			missing.push(program);
		}
	});

	const matchesAll = missing.length === 0;

	return { matchesAll, matched, missing };
};

export { matchPlanToUserPrefs, extractWellnessPrograms, hasUserSelectedPrefs };
