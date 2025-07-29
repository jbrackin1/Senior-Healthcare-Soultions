/** @format */

// src/api.js
export const fetchToken = async (authUrl, clientId, clientSecret) => {
	const response = await fetch(authUrl, {
		method: "POST",
		headers: { "Content-Type": "application/x-www-form-urlencoded" },
		body: new URLSearchParams({
			grant_type: "client_credentials",
			client_id: clientId,
			client_secret: clientSecret,
		}),
	});
	const data = await response.json();
	return data.access_token;
};

export const getCignaToken = () =>
	fetchToken(
		process.env.REACT_APP_CIGNA_AUTH_URL,
		process.env.REACT_APP_CIGNA_CLIENT_ID,
		process.env.REACT_APP_CIGNA_CLIENT_SECRET
	);
