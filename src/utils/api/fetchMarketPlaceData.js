/** @format */

const fetchMarketplaceData = async ({ formData, fipsCode, users_state }) => {
	if (!fipsCode || !users_state) {
		throw new Error("Missing FIPS code or state");
	}
	const fipsCode = await getFipsCode(formData.zipcode);
	const users_state = await getState(formData.zipcode); // <-- FIXED

	console.log("📍 ZIP:", formData.zipcode);
	console.log("📍 FIPS Code:", fipsCode);

	if (!fipsCode || !users_state) {
		alert("Could not retrieve location info. Please check your ZIP code.");
		setLoading(false);
		return;
	}

	const requestData = {
		household: {
			income: parseFloat(formData.income),
			people: [
				{
					age: formData.age,
					aptc_eligible: true,
					gender: formData.gender,
					uses_tobacco: formData.usesTobacco,
				},
			],
		},
		market: "Individual",
		place: {
			countyfips: fipsCode,
			state: users_state, 
			zipcode: formData.zipcode,
		},
		year: 2019,
	};

	try {
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
		const data = await response.json();
		console.log("🧾 Plans Data:", data);
		setPlans(data.plans || []);
	} catch (error) {
		console.error("❌ Error fetching marketplace data:", error);
		alert("Something went wrong fetching plans.");
	} finally {
		setLoading(false);
	}
};
