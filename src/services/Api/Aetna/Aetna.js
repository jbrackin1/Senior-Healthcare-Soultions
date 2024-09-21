/** @format */

// src/services/Api/Aetna/AetnaService.js

// Define the base URL
const BASE_URL = "https://developerportal.aetna.com";

// Define API endpoints for different data types
const aetnaApi = [
	{
		path: "/v1/providerdirectory/InsurancePlan",
		description: "Medicaid Insurance Plan Data",
	},
	{
		path: "/v1/providerdirectorydata/InsurancePlan",
		description: "Medicare Insurance Plan Data",
	},
	{
		path: "/v1/providerdirectory/Location",
		description: "Medicaid Location Data",
	},
	{
		path: "/v1/providerdirectorydata/Location",
		description: "Medicare Location Data",
	},
	{
		path: "/v1/providerdirectory/Organization",
		description: "Medicaid Organization Data",
	},
	{
		path: "/v1/providerdirectorydata/Organization",
		description: "Medicare Organization Data",
	},
	{
		path: "/v1/providerdirectory/Practitioner",
		description: "Medicaid Practitioner Data",
	},
	{
		path: "/v1/providerdirectorydata/Practitioner",
		description: "Medicare Practitioner Data",
	},
	{
		path: "/v1/providerdirectory/PractitionerRole",
		description: "Medicaid Practitioner Role Data",
	},
	{
		path: "/v1/providerdirectorydata/PractitionerRole",
		description: "Medicare Practitioner Role Data",
	},
	{
		path: "/v1/providerdirectorydata/$export",
		description: "Bulk Medicare Data Export",
	},
	{
		path: "/v1/providerdirectorydata/HealthcareService",
		description: "Healthcare Service Data",
	},
	{
		path: "/v1/providerdirectorydata/OrganizationAffiliation",
		description: "Organization Affiliation Data",
	},
];

const fetchAetnaData = async (endpoint) => {
	try {
		const response = await fetch(`${BASE_URL}${endpoint.path}`, {
			headers: {
				Authorization: `Bearer ${process.env.REACT_APP_AETNA_API_TOKEN}`, // Use environment variable
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

// Function to fetch all data in parallel
const fetchAllAetnaData = async () => {
	try {
		// Fetch data for all endpoints in parallel
		const results = await Promise.all(aetnaApi.map(fetchAetnaData));

		// Process the fetched data or handle errors
		results.forEach((result) => {
			if (result.data) {
				console.log(`Data for ${result.description}:`, result.data);
			} else {
				console.error(`Error for ${result.description}:`, result.error);
			}
		});
	} catch (error) {
		console.error("Error fetching all Aetna data:", error);
	}
};

export { aetnaApi, fetchAetnaData, fetchAllAetnaData };