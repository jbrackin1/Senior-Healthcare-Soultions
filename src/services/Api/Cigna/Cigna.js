/** @format */

import dotenv from "dotenv";
dotenv.config({ path: "./src/.env" });

const BASE_URL = process.env.CIGNA_BASE_URL;
const AUTH_URL = process.env.CIGNA_AUTH_URL;
const CLIENT_ID = process.env.CIGNA_CLIENT_ID;
const CLIENT_SECRET = process.env.CIGNA_CLIENT_SECRET;

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
	{
		path: "/v2/patientaccess/Patient",
		description: "Patient Demographic Data",
	},
	{
		path: "/v2/patientaccess/Condition",
		description: "Pre-existing Conditions Data",
	},
	{
		path: "/v2/patientaccess/MedicationRequest",
		description: "Medications Data",
	},
	{
		path: "/v2/patientaccess/Coverage",
		description: "Insurance Plan Coverage and Costs",
	},
];

// Fetch OAuth2 token
const fetchAuthToken = async () => {
	try {
		const response = await fetch(AUTH_URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
			body: new URLSearchParams({
				grant_type: "client_credentials",
				client_id: CLIENT_ID,
				client_secret: CLIENT_SECRET,
			}),
		});
		if (!response.ok) throw new Error("Failed to obtain token");
		const { access_token } = await response.json();
		return access_token;
	} catch (error) {
		console.error("Error fetching token:", error);
		throw error;
	}
};

// Fetch data using the token
const fetchCignaData = async (endpoint) => {
	try {
		const token = await fetchAuthToken();
		const response = await fetch(`${BASE_URL}${endpoint.path}`, {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
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
