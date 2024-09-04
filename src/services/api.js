/** @format */

// /src/services/api.js
// Need to pull in Api's
export const fetchAllPlans = async () => {
	try {
		const responses = await Promise.all([
			fetch("https://api1.example.com/plans"),
			fetch("https://api2.example.com/plans"),
			// Add more APIs as needed
		]);

		const allPlans = await Promise.all(responses.map((res) => res.json()));
		return allPlans.flat(); // Combine all plans into a single array
	} catch (error) {
		console.error("Error fetching plans:", error);
		return [];
	}
};

export const saveUserFavorites = async (favorites) => {
	try {
		const response = await fetch("/api/user/favorites", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ favorites }),
		});

		if (!response.ok) throw new Error("Failed to save favorites");
	} catch (error) {
		console.error("Error saving favorites:", error);
	}
};
