/** @format */

// src/services/Api/getAndNormalize.js
const {
	normalizeInsuranceData,
} = require("./Normalizer/normalizeInsuranceData");
const { fetchAllAetnaData } = require("./Aetna/FetchAllAetna");
const { fetchAllBlueCrossData } = require("./BlueCross/FetchAllBlueCross");
// Add other provider fetch functions as needed...

// Function to fetch and normalize data for all providers
async function fetchAndNormalizeAllData() {
	const providers = ["Aetna", "BlueCross", "Cigna"]; // Add all providers you need to fetch
	const allNormalizedData = [];

	for (const provider of providers) {
		const fetchDataFunction = getFetchFunctionForProvider(provider);
		const rawData = await fetchDataFunction();
		const normalizedData = normalizeInsuranceData(provider, rawData);
		allNormalizedData.push(normalizedData);
	}

	return allNormalizedData;
}

// Helper function to map provider names to fetch functions
function getFetchFunctionForProvider(provider) {
	switch (provider) {
		case "Aetna":
			return fetchAllAetnaData;
		case "BlueCross":
			return fetchAllBlueCrossData;
		// Add cases for other providers...
		default:
			throw new Error(`Fetch function for provider ${provider} not found.`);
	}
}

// Export the fetch and normalize function
module.exports = { fetchAndNormalizeAllData };
