/** @format */

import React, { useEffect } from "react";
import { fetchAllAetnaData } from "../services/Api/Aetna/AetnaService";

const FetchAetnaDataComponent = () => {
	// Run the fetch function when the component mounts
	useEffect(() => {
		const fetchData = async () => {
			try {
				// Call the function to fetch all Aetna data
				await fetchAllAetnaData();
			} catch (error) {
				console.error("Error fetching all Aetna data:", error);
			}
		};

		fetchData(); // Execute the fetch function
	}, []); // Empty dependency array means this runs only once on component mount

	return (
		<div>
			<h1>Aetna Data</h1>
			<p>Check the console for fetched data.</p>
		</div>
	);
};

export default FetchAetnaDataComponent;
