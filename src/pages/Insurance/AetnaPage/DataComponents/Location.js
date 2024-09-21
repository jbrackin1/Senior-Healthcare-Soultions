/** @format */

// src/pages/Insurance/Aetna/DataComponents/Location.js

import React, { useState, useEffect } from "react";
import { fetchLocationData } from "../";

const Location = ({ insurer, state }) => {
	const [locations, setLocations] = useState([]);
	const [error, setError] = useState("");

	useEffect(() => {
		if (state) {
			fetchLocationData(state)
				.then((data) => setLocations(data.entry || []))
				.catch((err) => setError(err.message));
		}
	}, [state]);

	return (
		<div>
			{error && <p style={{ color: "red" }}>{error}</p>}
			{locations.length > 0 ? (
				<div>
					{locations.map((location, index) => (
						<div key={index}>
							<h3>{location.resource.name}</h3>
							<p>{location.resource.address.text}</p>
							{/* More details */}
						</div>
					))}
				</div>
			) : (
				<p>No locations available for the selected state.</p>
			)}
		</div>
	);
};

export default Location;
