/** @format */

export const fetchDrugSuggestions = async (inputValue) => {
	if (!inputValue) return [];
	try {
		const response = await fetch(
			`https://rxnav.nlm.nih.gov/REST/approximateTerm.json?term=${inputValue}`
		);
		const data = await response.json();
		return data.approximateGroup.candidate.map((item) => ({
			label: `${item.rxcui} - ${item.name}`,
			value: item.rxcui,
		}));
	} catch (error) {
		console.error("Error fetching drug suggestions:", error);
		return [];
	}
};
