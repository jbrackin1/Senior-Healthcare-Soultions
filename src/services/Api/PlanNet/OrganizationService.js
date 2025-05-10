/** @format */

// src/services/Api/PlanNet/OrganizationService.js

const BASE_URLS = {
	cigna: "https://fhir.cigna.com/ProviderDirectory/v1",
	//aetna: "https://api.aetna.com/ProviderDirectory/v1",
	// Add other base URLs as needed for different providers
};

// Function to fetch organization details by ID
const fetchOrganizationById = async (provider, organizationId) => {
	try {
		const response = await fetch(
			`${BASE_URLS[provider]}/Organization/${organizationId}`,
			{
				headers: {
					"Content-Type": "application/json",
					// Add any necessary headers here
				},
			}
		);
		if (!response.ok) throw new Error("Failed to fetch organization data.");
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching organization data:", error);
		throw error;
	}
};

// Function to search for organizations based on parameters
const searchOrganizations = async (provider, params) => {
	try {
		const response = await fetch(
			`${BASE_URLS[provider]}/Organization?${new URLSearchParams(
				params
			).toString()}`,
			{
				headers: {
					"Content-Type": "application/json",
					// Add any necessary headers here
				},
			}
		);
		if (!response.ok) throw new Error("Failed to search organizations.");
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error searching organizations:", error);
		throw error;
	}
};

export { fetchOrganizationById, searchOrganizations };


// Explanation:
// BASE_URLS Object: Contains the base URLs for different providers.
// You can add more as needed.
// fetchOrganizationById:
// Fetches details of a specific organization by its ID.
// searchOrganizations: 
//Allows searching for organizations based on query parameters.
