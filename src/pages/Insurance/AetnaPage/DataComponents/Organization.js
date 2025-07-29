/** @format */

// src/pages/Insurance/Aetna/DataComponents/Organization.js

import React, { useState, useEffect } from "react";
import { fetchOrganizationData } from "../../../services/Api/Aetna/AetnaService";

const Organization = ({ insurer, state }) => {
	const [organizations, setOrganizations] = useState([]);
	const [error, setError] = useState("");

	useEffect(() => {
		if (state) {
			fetchOrganizationData(state)
				.then((data) => setOrganizations(data.entry || []))
				.catch((err) => setError(err.message));
		}
	}, [state]);

	return (
		<div>
			{error && <p style={{ color: "red" }}>{error}</p>}
			{organizations.length > 0 ? (
				<div>
					{organizations.map((organization, index) => (
						<div key={index}>
							<h3>{organization.resource.name}</h3>
							{/* Additional details */}
						</div>
					))}
				</div>
			) : (
				<p>No organizations available for the selected state.</p>
			)}
		</div>
	);
};

export default Organization;
