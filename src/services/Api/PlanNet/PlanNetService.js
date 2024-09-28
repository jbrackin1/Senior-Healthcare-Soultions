/** @format */

// src/services/Api/PlanNet/PlanNetService.js
c// src/services/PlanNet/PlanNetService.js

// Base URLs for different providers
const PROVIDER_BASE_URLS = {
  cigna: "https://fhir.cigna.com/ProviderDirectory/v1",

  //example:
  //blueCross: "https://api.bluecross.com/ProviderDirectory/v1",
  //aetna: "https://developer.aetna.com/ProviderDirectory/v1",
};

// Fetch Practitioner data from a specified provider
const fetchPractitioners = async (provider = "cigna") => {
  try {
    const baseURL = PROVIDER_BASE_URLS[provider];
    const response = await fetch(`${baseURL}/Practitioner`);
    if (!response.ok) throw new Error(`Failed to fetch practitioners from ${provider}`);
    return await response.json();
  } catch (error) {
    console.error(`Error fetching practitioners from ${provider}:`, error);
  }
};

export { fetchPractitioners };

