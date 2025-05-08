export const fetchVADrugSuggestions = async (query) => {
	if (!query || query.length < 1) return [];

	const response = await fetch(`http://localhost:8000/autocomplete?q=${encodeURIComponent(query)}`);
	if (!response.ok) throw new Error("Failed to fetch suggestions");

	return await response.json(); // Should be an array of strings like ["aspirin", "ibuprofen"]
};