/** @format */

// src/services/Api/InscController/InsuranceController.js

import { fetchAllAetnaData } from "./Aetna/AetnaService";
import { fetchAllCignaData } from "./Cigna/CignaService";
// Import other insurance services...

const normalizeInsuranceData = (data, providerName) => {
	// Normalize data to a common structure
	return data.map((item) => ({
		providerName,
		planType: item.planType || "Unknown",
		location: item.location || "Unknown",
		...item,
	}));
};

const fetchAllInsuranceData = async () => {
	try {
		const [aetnaData, cignaData] = await Promise.all([
			fetchAllAetnaData().then((data) => normalizeInsuranceData(data, "Aetna")),
			fetchAllCignaData().then((data) => normalizeInsuranceData(data, "Cigna")),
			// Add other API calls...
		]);

		return [...aetnaData, ...cignaData]; // Combine all normalized data
	} catch (error) {
		console.error("Error fetching insurance data:", error);
		return []; // Return an empty array or partial data
	}
};

export default fetchAllInsuranceData;

// The central controller (InsuranceController.js) is primarily responsible for 
// fetching and aggregating data from all available insurance APIs. It provides 
// a unified search or comparison dataset, enabling users to search through all
//  available plans from different providers.