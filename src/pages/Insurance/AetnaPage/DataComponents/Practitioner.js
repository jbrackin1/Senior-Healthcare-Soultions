/** @format */

// src/pages/Insurance/Aetna/DataComponents/Practitioner.js

import React, { useState, useEffect } from "react";
import { fetchPractitionerData } from "../../../services/Api/Aetna/AetnaService";

const Practitioner = ({ insurer, state }) => {
	const [practitioners, setPractitioners] = useState([]);
	const [error, setError] = useState("");

	useEffect(() => {
		if (state) {
			fetchPractitionerData(state)
				.then((data) => setPractitioners(data.entry || []))
				.catch((err) => setError(err.message));
		}
	}, [state]);

	return (
		<div>
			{error && <p style={{ color: "red" }}>{error}</p>}
			{practitioners.length > 0 ? (
				<div>
					{practitioners.map((practitioner, index) => (
						<div key={index}>
							<h3>{practitioner.resource.name}</h3>
							{/* More details */}
						</div>
					))}
				</div>
			) : (
				<p>No practitioners available for the selected state.</p>
			)}
		</div>
	);
};

export default Practitioner;
