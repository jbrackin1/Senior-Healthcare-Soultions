/** @format */
//nicoles-app/src/utils/user/normalizeBenefitName.js
const normalizeBenefitNameMap = {
	// API-style benefit names
	"Chiropractic Care": "Chiropractic",
	"Rehabilitative Occupational And Rehabilitative Physical Therapy":
		"Physical Therapy",
	"Nutritional Counseling": "Nutrition",
	"Acupuncture": "Acupuncture",
	"Weight Loss Programs": "Weight Loss",
	"Mental/Behavioral Health Outpatient Services": "Mental Health",
	"Telehealth Services": "Telehealth",
	"SilverSneakers® Fitness Program": "SilverSneakers",
	"Smoking Cessation Program": "Smoking Cessation",

	// Form input / checkbox labels
	"Mental Health Counseling": "Mental Health",
	"Nutrition Counseling": "Nutrition",
	"Telehealth": "Telehealth",
	"Smoking Cessation": "Smoking Cessation",
	"Weight Loss": "Weight Loss",
	"Physical Therapy": "Physical Therapy",
	"SilverSneakers": "SilverSneakers",
};

// ✅ Normalize anything — from plan data OR form input
export const normalizeBenefitName = (name = "") => {
	const clean = name.trim().toLowerCase();
	const entry = Object.entries(normalizeBenefitNameMap).find(
		([key]) => key.trim().toLowerCase() === clean
	);
	return entry ? entry[1] : name.trim();
};
