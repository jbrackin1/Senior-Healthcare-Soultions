/** @format */

// utils/api/normalizeDrugData.js

export const normalizeDrugData = (data, source) => {
	return data.map((item) => {
		if (source === "marketplace") {
			// Normalize Marketplace API data
			return {
				name: item.name || "Unknown Drug",
				fullName: item.full_name || item.name,
				strength: item.strength || "N/A",
				route: item.route || "N/A",
				rxcui: item.rxcui,
				doseForm: item.rxnorm_dose_form || "N/A",
			};
		} else if (source === "nih") {
			// Normalize NIH API data
			return {
				name: item.name || "Unknown Drug",
				fullName: item.name,
				strength: item.strength || "N/A",
				route: item.route || "N/A", 
				rxcui: item.rxcui,
				doseForm: item.rxnorm_dose_form || "N/A", 
			};
		} else {
			return item; 
		}
	});
};


//Basic format to be used when importing other Drug formulary's(drug info from insc company's)