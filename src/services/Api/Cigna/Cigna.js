/** @format */

// Docs - https://developer.cigna.com/ 

// src/services/Api/Cigna/CignaService.js

const BASE_URL = "https://fhir.cigna.com/ProviderDirectory/v1-devportal/";

const cignaApi = [
	{ path: "/HealthcareService", description: "Healthcare Service Data" },
	{ path: "/InsurancePlan", description: "Insurance Plan Data" },
	{ path: "/Location", description: "Location Data" },
	{ path: "/Organization", description: "Organization Data" },
	{
		path: "/OrganizationAffiliation",
		description: "Organization Affiliation Data",
	},
	{ path: "/Practitioner", description: "Practitioner Data" },
	{ path: "/PractitionerRole", description: "Practitioner Role Data" },
	{ path: "/Endpoint", description: "Endpoint Data" },
];


const fetchCignaData = async (endpoint) => {
	try {
		const response = await fetch(`${BASE_URL}${endpoint.path}`, {
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (!response.ok)
			throw new Error(`Failed to fetch data: ${endpoint.description}`);

		const data = await response.json();
		console.log(`${endpoint.description} fetched successfully`);
		return { description: endpoint.description, data };
	} catch (error) {
		console.error(`Error fetching data for ${endpoint.description}:`, error);
		return { description: endpoint.description, error: error.message };
	}
};

const fetchAllCignaData = async () => {
	try {
		const results = await Promise.all(cignaApi.map(fetchCignaData));

		results.forEach((result) => {
			if (result.data) {
				console.log(`Data for ${result.description}:`, result.data);
			} else {
				console.error(`Error for ${result.description}:`, result.error);
			}
		});
	} catch (error) {
		console.error("Error fetching all Cigna data:", error);
	}
};

export { cignaApi, fetchCignaData, fetchAllCignaData };
