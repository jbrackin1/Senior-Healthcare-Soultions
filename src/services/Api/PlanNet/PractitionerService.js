/** @format */

// src/services/Api/PlanNet/PractitionerService.js

const BASE_URLS = {
	cigna: "https://fhir.cigna.com/ProviderDirectory/v1",
	// example => aetna: "https://api.aetna.com/ProviderDirectory/v1",
	// Add more base URLs as needed
};

// Example function to fetch practitioners based on parameters
const fetchPractitioners = async (provider, params) => {
	try {
		const response = await fetch(
			`${BASE_URLS[provider]}/Practitioner?${new URLSearchParams(
				params
			).toString()}`,
			{
				headers: {
					"Content-Type": "application/json",
					// Add any necessary headers here
				},
			}
		);
		if (!response.ok) throw new Error("Failed to fetch practitioner data.");
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching practitioner data:", error);
		throw error;
	}
};

export { fetchPractitioners };
