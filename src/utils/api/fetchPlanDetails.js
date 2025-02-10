/** @format */

export const fetchPlanDetails = async (planId) => {
	console.log("Fetching details for Plan ID:", planId); // Debugging log

	try {
		const response = await fetch(
			`https://marketplace.api.healthcare.gov/api/v1/plans/${planId}?apikey=${process.env.REACT_APP_MARKETPLACE_API_KEY}`
		);

		if (!response.ok) {
			if (response.status === 404) {
				console.error("Plan not found:", planId);
				return null; // Return null instead of crashing
			}
			throw new Error(
				`Failed to fetch plan details. Status: ${response.status}`
			);
		}

		const data = await response.json();
		console.log("Fetched Plan Details:", data);
		return data;
	} catch (error) {
		console.error("API Error:", error);
		return null;
	}
};
