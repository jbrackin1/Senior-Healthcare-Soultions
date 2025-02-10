/** @format */

export const fetchDrugSuggestions = async (inputValue) => {
	if (!inputValue) return [];

	try {
		
		const marketplaceResponse = await fetch(
			`https://marketplace.api.healthcare.gov/api/v1/drugs/autocomplete?q=${inputValue}&apikey=${process.env.REACT_APP_MARKETPLACE_API_KEY}`
		);

		let marketplaceSuggestions = [];
		if (marketplaceResponse.ok) {
			const marketplaceData = await marketplaceResponse.json();
			console.log("Marketplace Suggestions:", marketplaceData);

			marketplaceSuggestions = marketplaceData.map((item) => ({
				label: item.name,
				strength: item.strength || "",
				value: item.rxcui,
			}));
		}

		// If Marketplace API returned suggestions, use them
		if (marketplaceSuggestions.length > 0) {
			return marketplaceSuggestions;
		}

	} catch (error) {
		console.error("Error fetching drug suggestions:", error.message);
		throw error;
	}
};
