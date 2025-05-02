/** @format */

//utils/user/matchUserPrefs.js
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

	return plan.benefits
		.map((b) => b.name)
		.filter((name) =>
			keywords.some((kw) => name.toLowerCase().includes(kw.toLowerCase()))
		);
};

// 🧠 Main match function
const matchPlanToUserPrefs = (plan, formData) => {
	const matched = [];
	const missing = [];

	// Premium
	if (plan.premium <= formData.preferredPremium) {
		matched.push("Under $" + formData.preferredPremium + "/month");
	} else {
		missing.push("Premium under $" + formData.preferredPremium);
	}

	// Dental
	if (formData.dentalCoverage) {
		const hasDental = plan.benefits.some((b) =>
			b.name.toLowerCase().includes("dental")
		);
		hasDental ? matched.push("Dental") : missing.push("Dental");
	}

	// Vision
	if (formData.visionCoverage) {
		const hasVision = plan.benefits.some((b) =>
			b.name.toLowerCase().includes("vision")
		);
		hasVision ? matched.push("Vision") : missing.push("Vision");
	}

	// Wellness/Lifestyle
	const planPrograms = extractWellnessPrograms(plan);
	const userPrograms = formData.lifestylePrograms || [];

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

export { matchPlanToUserPrefs, extractWellnessPrograms };
