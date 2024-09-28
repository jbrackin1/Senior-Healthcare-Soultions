/** @format */
// https://www.hl7.org/signup.cfm 
//Multipul insurances use this a nonprofit thingy
//Not quite sure how we will impliplement this yet
// Thinking definitly very compartmentalized to allow for scale
// src/services/Api/PlanNet/LocationService.js

const BASE_URLS = {
	cigna: "https://fhir.cigna.com/ProviderDirectory/v1",
	//aetna: "https://api.aetna.com/ProviderDirectory/v1",
	// Add other base URLs as needed for different providers
};

// Function to fetch location details by ID
const fetchLocationById = async (provider, locationId) => {
	try {
		const response = await fetch(
			`${BASE_URLS[provider]}/Location/${locationId}`,
			{
				headers: {
					"Content-Type": "application/json",
					// Add any necessary headers here, like authentication
				},
			}
		);
		if (!response.ok) throw new Error("Failed to fetch location data.");
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching location data:", error);
		throw error;
	}
};

// Function to search for locations based on parameters
const searchLocations = async (provider, params) => {
	try {
		const response = await fetch(
			`${BASE_URLS[provider]}/Location?${new URLSearchParams(
				params
			).toString()}`,
			{
				headers: {
					"Content-Type": "application/json",
					// Add any necessary headers here
				},
			}
		);
		if (!response.ok) throw new Error("Failed to search locations.");
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error searching locations:", error);
		throw error;
	}
};

export { fetchLocationById, searchLocations };
