/** @format */
import { fetchPlanDetails } from "../../utils/api/fetchPlanDetails";
import { formatDetailedInsInfo } from "../../utils/formatters/formatDetailedInsInfo";

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

		if (response.ok) {
			const data = await response.json();

			// ✅ THIS IS THE ONE CODE BLOCK YOU ASKED TO ADD
			const enrichedPlans = await Promise.all(
				(data.plans || []).map(async (plan) => {
					try {
						const details = await fetchPlanDetails(plan.id);
						const merged = {
							...details,
							...plan,
							premium: details?.premium || plan.premium,
						};
						return formatDetailedInsInfo(merged);
					} catch (err) {
						console.error(
							`⚠️ Failed to fetch details for plan ${plan.id}:`,
							err
						);
						return formatDetailedInsInfo(plan);
					}
				})
			);

			setPlans(enrichedPlans);
		} else {
			const errorData = await response.json();
			alert("Failed to fetch plans. " + (errorData.message || "Unknown error"));
		}

		const data = await response.json();
		console.log("🧾 Plans Data:", data);

		if (!data.plans || data.plans.length === 0) {
			alert("No plans found. Try adjusting your filters.");
			setPlans([]);
			return;
		}

		const enrichedPlans = await Promise.all(
			data.plans.map(async (plan) => {
				try {
					const details = await fetchPlanDetails(plan.id);
					const merged = {
						...details,
						...plan,
						tiered_deductibles:
							(plan.tiered_deductibles?.length || 0) >
							(details.tiered_deductibles?.length || 0)
								? plan.tiered_deductibles
								: details.tiered_deductibles,
						tiered_moops:
							(plan.tiered_moops?.length || 0) >
							(details.tiered_moops?.length || 0)
								? plan.tiered_moops
								: details.tiered_moops,
						tiered_premiums:
							(plan.tiered_premiums?.length || 0) >
							(details.tiered_premiums?.length || 0)
								? plan.tiered_premiums
								: details.tiered_premiums,
						premium: details?.premium || plan.premium,
					};
					return formatDetailedInsInfo(merged);
				} catch (err) {
					console.error(`⚠️ Failed to fetch details for plan ${plan.id}:`, err);
					return formatDetailedInsInfo(plan);
				}
			})
		);

		setPlans(enrichedPlans);
	} catch (error) {
		console.error("❌ Error fetching marketplace data:", error);
		alert("There was an error while fetching plans. Please try again.");
	} finally {
		setLoading(false);
	}
};

export default fetchMarketplaceData;
