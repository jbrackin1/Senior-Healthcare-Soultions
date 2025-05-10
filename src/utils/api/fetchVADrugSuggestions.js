export const fetchVADrugSuggestions = async (query) => {
	if (!query || query.length < 1) return [];

	const response = await fetch(`https://seniorhealthcaresolution.net/autocomplete?q=${encodeURIComponent(query)}`);
	if (!response.ok) throw new Error("Failed to fetch suggestions");

	return await response.json(); // Should be an array of strings like ["aspirin", "ibuprofen"]
};
