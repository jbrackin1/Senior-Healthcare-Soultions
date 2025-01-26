/** @format */
import { formatDrugRxCuis } from "../formatters/formatDrugRxCuis"; // Import the format function

export const fetchDrugCoverage = async ({
	planIds,
	drugRxCuis,
	setCoverageData,
	setError,
}) => {
	try {
		// Format the drug RxCuis to a comma-separated string using the utility function
		const formattedDrugRxCuis = formatDrugRxCuis(drugRxCuis);

		// The Marketplace API for drug coverage
		const response = await fetch(
			`https://marketplace.api.healthcare.gov/api/v1/drugs/covered?apikey=${
				process.env.REACT_APP_MARKETPLACE_API_KEY
			}&year=2019&drugs=${formattedDrugRxCuis}&planids=${planIds.join(",")}`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
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
