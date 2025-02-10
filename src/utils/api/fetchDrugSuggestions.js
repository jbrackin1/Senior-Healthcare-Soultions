/** @format */

export const fetchDrugSuggestions = async (inputValue) => {
	if (!inputValue) return []; 

	try {
		const response = await fetch(
			`https://rxnav.nlm.nih.gov/REST/approximateTerm.json?term=${inputValue}`
		);

		if (!response.ok) {
			throw new Error(`API error: ${response.status} ${response.statusText}`);
		}

		const data = await response.json();
		console.log("Raw Suggestions Data:", data); 


		const validSuggestions = data.approximateGroup.candidate.filter(
			(item) => item.name && item.name.trim() !== "" 
		);


		return validSuggestions.map((item) => ({
			label: item.name, 
			value: item.rxcui, 
		}));
	} catch (error) {
		console.error("Error fetching drug suggestions:", error.message);
		throw error;
	}
};
