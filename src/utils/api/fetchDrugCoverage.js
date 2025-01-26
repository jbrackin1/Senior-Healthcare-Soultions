/** @format */

// The fetchDrugCoverage function is a utility that fetches coverage data from the API.
export const fetchDrugCoverage = async ({
	planIds, // Array of selected plan IDs
	drugRxCuis, // Array of drug RxCUI values
	setCoverageData, // Function to update coverage data in the parent component
	setError, // Function to update error state in the parent component
}) => {
	try {
		const response = await fetch(
			"https://api.marketplace.gov/v1/drug-coverage",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					planIds, // Array of selected plan IDs
					drugRxCuis, // Array of drug RxCUI values
				}),
			}
		);

		if (!response.ok) {
			throw new Error(
				`Failed to fetch drug coverage. Status: ${response.status}`
			);
		}

		const data = await response.json();
		console.log("Coverage Data:", data);

		// Update state with the coverage data
		setCoverageData(data);
		setError(""); // Clear any previous errors

		return data;
	} catch (err) {
		console.error("API Error:", err.message);

		if (err.message.includes("404")) {
			setError(
				"The coverage API endpoint is not available. Please contact support."
			);
		} else {
			setError("Failed to fetch drug coverage. Please try again.");
		}

		throw err;
	}
};
