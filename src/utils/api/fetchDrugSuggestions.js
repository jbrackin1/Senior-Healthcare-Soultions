/** @format */

export const fetchDrugSuggestions = async (inputValue) => {
	if (!inputValue) return []; // Return an empty array if no input is provided

	try {
		const response = await fetch(
			`https://rxnav.nlm.nih.gov/REST/approximateTerm.json?term=${inputValue}`
		);

		if (!response.ok) {
			throw new Error(`API error: ${response.status} ${response.statusText}`);
		}

		const data = await response.json();
		console.log("Raw Suggestions Data:", data); // Debug raw response

		// Filter out suggestions without a valid name
		const validSuggestions = data.approximateGroup.candidate.filter(
			(item) => item.name && item.name.trim() !== "" // Ensure name exists and is not an empty string
		);

		// Map valid suggestions into the format expected by AsyncSelect
		return validSuggestions.map((item) => ({
			label: item.name, // Display the drug name
			value: item.rxcui, // Use the RxCUI as the value
		}));
	} catch (error) {
		console.error("Error fetching drug suggestions:", error.message);
		throw error; // Throw the error so the calling component can handle it
	}
};
