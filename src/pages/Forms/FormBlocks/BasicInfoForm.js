/** @format */

import React, { useState } from "react";
import Button from "../../../components/ui/Global/button";

const BasicInfoForm = ({ onNext }) => {
	const [age, setAge] = useState("");
	const [sex, setSex] = useState("");
	const [isVeteran, setIsVeteran] = useState(false);
	const [zipCode, setZipCode] = useState("");
	const [income, setIncome] = useState("");
	const [householdSize, setHouseholdSize] = useState("");
	const [showAgeInfo, setShowAgeInfo] = useState(false);
	const [showSexInfo, setShowSexInfo] = useState(false);
	const [showVeteranInfo, setShowVeteranInfo] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		onNext({ age, sex, isVeteran, zipCode, income, householdSize });
	};

	return (
		<form onSubmit={handleSubmit}>
			{/* Age */}
			<label htmlFor="age">Age:</label>
			<input
				id="age"
				type="number"
				min="0"
				placeholder="Enter your age"
				value={age}
				onChange={(e) => setAge(e.target.value)}
				required
			/>
			<button type="button" onClick={() => setShowAgeInfo(!showAgeInfo)}>
				Why do we ask this?
			</button>
			{showAgeInfo && (
				<p className="info-text" id="age-info">
					Age is essential in determining eligibility and calculating potential
					premium costs.
				</p>
			)}

			{/* Sex */}
			<label htmlFor="sex">Sex:</label>
			<select
				id="sex"
				value={sex}
				onChange={(e) => setSex(e.target.value)}
				required>
				<option value="">Select</option>
				<option value="male">Male</option>
				<option value="female">Female</option>
				<option value="other">Other</option>
				<option value="preferNotToSay">Prefer not to say</option>
			</select>
			<button type="button" onClick={() => setShowSexInfo(!showSexInfo)}>
				Why do we ask this?
			</button>
			{showSexInfo && (
				<p className="info-text" id="sex-info">
					Sex can influence coverage options and costs due to different health
					needs and risk factors.
				</p>
			)}

			{/* ZIP Code */}
			<label htmlFor="zipCode">ZIP Code:</label>
			<input
				id="zipCode"
				type="text"
				placeholder="Enter ZIP code"
				value={zipCode}
				onChange={(e) => setZipCode(e.target.value)}
				required
			/>
			<p className="info-text" id="zip-info">
				ZIP code is required to show local plan options.
			</p>

			{/* Income */}
			<label htmlFor="income">Income (Optional):</label>
			<input
				id="income"
				type="number"
				placeholder="Annual income"
				value={income}
				onChange={(e) => setIncome(e.target.value)}
			/>
			<p className="info-text" id="income-info">
				Income helps determine eligibility for subsidies and assistance.
			</p>

			{/* Household Size */}
			<label htmlFor="householdSize">Household Size (Optional):</label>
			<input
				id="householdSize"
				type="number"
				min="1"
				placeholder="Number of people in household"
				value={householdSize}
				onChange={(e) => setHouseholdSize(e.target.value)}
			/>
			<p className="info-text" id="household-info">
				Household size affects eligibility for programs.
			</p>

			{/* Veteran Status */}
			<div>
				<input
					id="isVeteran"
					type="checkbox"
					checked={isVeteran}
					onChange={() => setIsVeteran(!isVeteran)}
				/>
				<label htmlFor="isVeteran">Are you a Veteran?</label>
			</div>
			<Button
				type="button"
				onClick={() => setShowVeteranInfo(!showVeteranInfo)}
				aria-describedby="veteran-info">
				Why do we ask this?
			</Button>
			{showVeteranInfo && (
				<p className="info-text" id="veteran-info">
					Knowing your veteran status allows us to identify tailored coverage
					options.
				</p>
			)}

			{/* Submit */}
			<Button type="submit">Next</Button>
		</form>
	);
}

export default BasicInfoForm;
