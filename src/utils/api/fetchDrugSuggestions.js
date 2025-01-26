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
		return data.approximateGroup.candidate.map((item) => ({
			label: `${item.rxcui} - ${item.name}`,
			value: item.rxcui,
		}));
	} catch (error) {
		console.error("Error fetching drug suggestions:", error.message);
		throw error; // Throw the error so the calling component can handle it
	}
};
