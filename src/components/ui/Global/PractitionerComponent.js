

// import React, { useState } from "react";

// const PractitionerComponent = ({
// 	baseUrl,
// 	token,
// 	apiVersion = "v1",
// 	onInsurerSelect,
// }) => {
// 	const [practitionerId, setPractitionerId] = useState("");
// 	const [practitionerData, setPractitionerData] = useState(null);
// 	const [error, setError] = useState("");

// 	const handleFetchPractitioner = async () => {
// 		if (!practitionerId) {
// 			setError("Please enter a Practitioner ID");
// 			return;
// 		}

// 		try {
// 			const response = await fetch(
// 				`${baseUrl}/${apiVersion}/providerdirectory/Practitioner/${practitionerId}`,
// 				{
// 					headers: {
// 						Authorization: `Bearer ${token}`, // Use token passed as prop
// 						"Content-Type": "application/json",
// 					},
// 				}
// 			);

// 			if (!response.ok)
// 				throw new Error(
// 					`Failed to fetch Practitioner data for ID: ${practitionerId}`
// 				);

// 			const data = await response.json();
// 			setPractitionerData(data);
// 			setError("");
// 		} catch (err) {
// 			setError(err.message);
// 		}
// 	};

// 	return (
// 		<div>
// 			<h2>Fetch Practitioner Information</h2>
// 			<input
// 				type="text"
// 				placeholder="Enter Practitioner ID"
// 				value={practitionerId}
// 				onChange={(e) => setPractitionerId(e.target.value)}
// 			/>
// 			<button onClick={handleFetchPractitioner}>Fetch Practitioner Data</button>

// 			{error && <p style={{ color: "red" }}>{error}</p>}

// 			{practitionerData && (
// 				<div>
// 					<h3>{practitionerData.name[0].text}</h3>
// 					<p>
// 						<strong>Gender:</strong> {practitionerData.gender}
// 					</p>
// 					<p>
// 						<strong>Specialty:</strong>{" "}
// 						{practitionerData.qualification[0].code.text}
// 					</p>
// 					<p>
// 						<strong>Address:</strong>
// 					</p>
// 					{practitionerData.address.map((addr, index) => (
// 						<p key={index}>{addr.text}</p>
// 					))}
// 				</div>
// 			)}
// 		</div>
// 	);
// };

// export default PractitionerComponent;
