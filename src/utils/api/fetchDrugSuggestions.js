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

export const fetchDrugCoverage = async ({ planIds, drugRxCuis }) => {
	// Replace with the actual API endpoint
	const response = await fetch(`/api/coverage`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ planIds, drugRxCuis }),
	});
	if (!response.ok) {
		throw new Error("Failed to fetch drug coverage");
	}
	try {
		const data = await fetchDrugCoverage({ planIds, drugRxCuis });
		console.log("Coverage Data: ", data);
		setCoverageData(data);
		setError("");
	} catch (err) {
		console.error("API Error: ", err.message);
		if (err.message.includes("404")) {
			setError(
				"The coverage API endpoint is not available. Please contact support."
			);
		} else {
			setError("Failed to fetch drug coverage. Please try again.");
		}
	}

	return response.json();
};
