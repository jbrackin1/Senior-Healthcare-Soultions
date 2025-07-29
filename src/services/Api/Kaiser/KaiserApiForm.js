/** @format */

// https://apieprd.b2clogin.com/apieprd.onmicrosoft.com/b2c_1a_prod_signin_usernameoremail/oauth2/v2.0/authorize?client_id=11288c8a-02e0-4c11-8f32-9d4e87deea3f&scope=11288c8a-02e0-4c11-8f32-9d4e87deea3f%20openid%20profile%20offline_access&redirect_uri=https%3A%2F%2Fdeveloper.kp.org%2F&client-request-id=21f58ca1-9e72-4f91-ab56-1965a2b59456&response_mode=fragment&response_type=code&x-client-SKU=msal.js.browser&x-client-VER=2.39.0&client_info=1&code_challenge=r8Cn11XC14ypPnEOd-zQyYzYMVlhfa1zcETSdkFkff8&code_challenge_method=S256&nonce=67cb9827-2047-4146-999c-6e992e628d96&state=eyJpZCI6IjEyZDY1M2FhLTI0MDYtNGZkMi1hNWJiLWFlZDE5YTc1NzFkNCIsIm1ldGEiOnsiaW50ZXJhY3Rpb25UeXBlIjoicmVkaXJlY3QifX0%3D
// https://developer.kp.org/#/apis/60c008510278dd00123cef6e
//https://developer.kp.org/#/app-details
// https://open.epic.com/

import React, { useState } from "react";

// Initializing the functional component
const KaiserAPIForm = () => {
	// State to manage user inputs
	const [age, setAge] = useState("");
	const [sex, setSex] = useState("");
	const [veteran, setVeteran] = useState(false);
	const [conditions, setConditions] = useState("");
	const [medications, setMedications] = useState("");
	const [planType, setPlanType] = useState("");
	const [fitnessProgram, setFitnessProgram] = useState(false);
	const [plans, setPlans] = useState([]);

	// Function to call the Kaiser Permanente API
	const fetchPlans = async () => {
		try {
			const response = await fetch(
				`/service/hp/mhpo/healthplanproviderv1rc/MedicationKnowledge?DrugName=${medications}&DrugPlan=${planType}`
			);
			const data = await response.json();
			setPlans(data);
		} catch (error) {
			console.error("Error fetching plans:", error);
		}
	};

	// Handling form submit
	const handleSubmit = (e) => {
		e.preventDefault();
		fetchPlans();
	};

	return (
		<div>
			<h1>Kaiser Permanente Insurance Comparison</h1>

			{/* Form to collect user input */}
			<form onSubmit={handleSubmit}>
				<div>
					<label>Age:</label>
					<input
						type="number"
						value={age}
						onChange={(e) => setAge(e.target.value)}
						required
					/>
				</div>

				<div>
					<label>Sex:</label>
					<select value={sex} onChange={(e) => setSex(e.target.value)} required>
						<option value="">Select</option>
						<option value="male">Male</option>
						<option value="female">Female</option>
					</select>
				</div>

				<div>
					<label>Veteran Status:</label>
					<input
						type="checkbox"
						checked={veteran}
						onChange={(e) => setVeteran(e.target.checked)}
					/>
				</div>

				<div>
					<label>Pre-existing Conditions (comma separated):</label>
					<input
						type="text"
						value={conditions}
						onChange={(e) => setConditions(e.target.value)}
						placeholder="e.g. diabetes, asthma"
					/>
				</div>

				<div>
					<label>Medications (comma separated):</label>
					<input
						type="text"
						value={medications}
						onChange={(e) => setMedications(e.target.value)}
						placeholder="e.g. metformin, insulin"
					/>
				</div>

				<div>
					<label>Plan Type:</label>
					<select
						value={planType}
						onChange={(e) => setPlanType(e.target.value)}>
						<option value="">Select</option>
						<option value="HMO">HMO</option>
						<option value="PPO">PPO</option>
					</select>
				</div>

				<div>
					<label>Fitness Program (e.g., SilverSneakers):</label>
					<input
						type="checkbox"
						checked={fitnessProgram}
						onChange={(e) => setFitnessProgram(e.target.checked)}
					/>
				</div>

				<button type="submit">Find Plans</button>
			</form>

			{/* Displaying the list of plans */}
			<div>
				<h2>Available Plans</h2>
				{plans.length === 0 ? (
					<p>No plans found. Please adjust your criteria.</p>
				) : (
					<ul>
						{plans.map((plan) => (
							<li key={plan.id}>
								<h3>{plan.name}</h3>
								<p>Premium: ${plan.premium}</p>
								<p>Deductible: ${plan.deductible}</p>
								<p>Out-of-pocket Maximum: ${plan.oopMax}</p>
								{/* Add other plan details here */}
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};

export default KaiserAPIForm;
