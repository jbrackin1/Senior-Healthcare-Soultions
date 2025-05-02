/** @format */
const fetchMarketplaceData = async ({
	formData,
	fipsCode,
	users_state,
	setPlans,
	setLoading,
	
}) => {
	if (!fipsCode || !users_state) {
		alert(
			"Missing location data (ZIP/State/FIPS). Please double-check your ZIP code."
		);
		throw new Error("Missing FIPS code or state");
	}

	console.log("📍 ZIP:", formData.zipcode);
	console.log("📍 FIPS Code:", fipsCode);
	console.log("📍 State:", users_state);

	const requestData = {
		household: {
			income: parseFloat(formData.income),
			people: [
				{
					age: parseFloat(formData.age),
					aptc_eligible: true,
					gender: formData.gender,
					uses_tobacco: formData.usesTobacco,
					is_pregnant: formData.isPregnant,
					is_parent: formData.isParent,
					has_mec: formData.hasMEC,
					relationship: formData.relationship,
					utilization: formData.utilization,
				},
			],
		},
		market: "Individual",
		place: {
			countyfips: fipsCode,
			state: users_state,
			zipcode: formData.zipcode,
		},
		year: 2025,
	};

	console.log("🚀 Sending Request:", requestData);

	try {
		setLoading(true);

		const response = await fetch(
			`https://marketplace.api.healthcare.gov/api/v1/plans/search?apikey=${process.env.REACT_APP_MARKETPLACE_API_KEY}`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(requestData),
			}
		);

		if (!response.ok) {
			const errorDetails = await response.json();
			console.error("🛑 API Error Response:", errorDetails);
			alert(
				`Failed to fetch plans. Server says: ${
					errorDetails.message || "Unknown error"
				}`
			);
			return;
		}

		const data = await response.json();
		console.log("🧾 Plans Data:", data);

		setPlans(data.plans || []);
	} catch (error) {
		console.error("❌ Error fetching marketplace data:", error);
		alert("There was an error while fetching plans. Please try again.");
	} finally {
		setLoading(false);
	}
	
};
export default fetchMarketplaceData;