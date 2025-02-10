/** @format */

// fetchDrugCoverage.js
export const fetchDrugCoverage = async ({
	planIds,
	drugRxCuis,
	setCoverageData,
	setError,
}) => {
	try {
		const response = await fetch(
			`https://marketplace.api.healthcare.gov/api/v1/drugs/covered?apikey=${
				process.env.REACT_APP_MARKETPLACE_API_KEY
			}&year=2019&drugs=${drugRxCuis}&planids=${planIds.join(",")}`,
			{
				method: "GET",
				headers: { "Content-Type": "application/json" },
			}
		);

		if (!response.ok) {
			throw new Error(
				`Failed to fetch drug coverage. Status: ${response.status}`
			);
		}


		
		const data = await response.json();
		console.log("Coverage Data:", data);
		setCoverageData(data); 
		setError("");
		return data;
	} catch (err) {
		console.error("API Error:", err.message);
		setError("Failed to fetch drug coverage. Please try again.");
		throw err;
	}
};
