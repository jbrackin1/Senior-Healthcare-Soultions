/** @format */

const API_BASE_URL = "https://marketplace.api.healthcare.gov/api/v1/plans";
const API_KEY = process.env.REACT_APP_MARKETPLACE_API_KEY;
// console.log("🔑 API KEY:", process.env.REACT_APP_MARKETPLACE_API_KEY);


/**
 * Fetch plan details from the Marketplace API.
 * @param {string} planId - The plan ID to fetch.
 * @returns {Promise<object|null>} - The fetched plan data or null if not found.
 */
export const fetchPlanDetails = async (planId) => {
	if (!planId) {
		console.error("❌ Plan ID is missing or undefined!");
		throw new Error("Plan ID is required");
	}

	const url = `${API_BASE_URL}/${planId}?apikey=${process.env.REACT_APP_MARKETPLACE_API_KEY}`;
	console.log(`📡 Fetching details for Plan ID: ${planId} from ${url}`);

	try {
		const response = await fetch(url);

		if (!response.ok) {
			if (response.status === 404) {
				console.warn(`⚠️ Plan not found for ID: ${planId}`);
				return null; // Return null instead of throwing an error
			}
			throw new Error(`API request failed with status ${response.status}`);
		}

		const data = await response.json();
		console.log("✅ Successfully fetched Plan Details:", data);
		return data;
	} catch (error) {
		console.error("❌ API Error:", error);
		throw error;
	}
};
