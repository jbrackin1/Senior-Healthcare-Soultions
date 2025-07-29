// /** @format */

// import React, { useState } from "react";
// import StateSelector from "../components/ui/Global/StateSlector"

// const BaseInsurancePlansPage = ({ fetchPlans, providerName }) => {
// 	const [stateCode, setStateCode] = useState("");
// 	const [plans, setPlans] = useState([]);
// 	const [error, setError] = useState("");

// 	const handleStateSelect = async (selectedState) => {
// 		setStateCode(selectedState);

// 		if (!selectedState) return; // Early return if no state is selected

// 		try {
// 			const data = await fetchPlans(selectedState); // Fetch plans using the provided function
// 			setPlans(data.entry || []);
// 			setError("");
// 		} catch (err) {
// 			setError(err.message);
// 		}
// 	};

// 	return (
// 		<div>
// 			<h2>{providerName} Insurance Plans</h2>
// 			<StateSelector onSelectState={handleStateSelect} />

// 			{error && <p style={{ color: "red" }}>{error}</p>}

// 			{plans.length > 0 && (
// 				<div>
// 					{plans.map((plan, index) => (
// 						<div key={index}>
// 							<h3>{plan.resource.name}</h3>
// 							{/* Add more details as needed */}
// 						</div>
// 					))}
// 				</div>
// 			)}
// 		</div>
// 	);
// };

// export default BaseInsurancePlansPage;
