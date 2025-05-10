/** @format */
import React, { useEffect, useState } from "react";

// Sample function to fetch Kaiser data
const fetchKaiserData = async () => {
	try {
		const response = await fetch(
			`/service/hp/mhpo/healthplanproviderv1rc/MedicationKnowledge`
		);
		const data = await response.json();
		console.log("Fetched Kaiser Data:", data);
		return data;
	} catch (error) {
		console.error("Error fetching Kaiser data:", error);
	}
};

const FetchKaiserDataComponent = () => {
	const [kaiserData, setKaiserData] = useState(null);

	// Use effect to fetch data on component mount
	useEffect(() => {
		const fetchData = async () => {
			const data = await fetchKaiserData(); // Call fetch function
			setKaiserData(data); // Store the data in state
		};

		fetchData(); // Execute the fetch function on component mount
	}, []); // Empty dependency array means this runs only once on component mount

	return (
		<div>
			<h1>Kaiser Permanente Data</h1>
			{/* Check if data exists, and display it or a message */}
			{kaiserData ? (
				<pre>{JSON.stringify(kaiserData, null, 2)}</pre>
			) : (
				<p>Loading data... Check the console for more details.</p>
			)}
		</div>
	);
};

export default FetchKaiserDataComponent;
