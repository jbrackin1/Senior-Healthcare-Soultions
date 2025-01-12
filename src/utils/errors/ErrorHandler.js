/** @format */

function handleResponse(response) {
	const { status } = response; 
	if (status >= 200 && status < 300) {
		console.log(`Success! Status: ${status}`);
		return response.json();
	} else {
		handleError(status); 
	}
}

function handleError(status) {
	console.error(`Error: Received status code ${status}`);
}
