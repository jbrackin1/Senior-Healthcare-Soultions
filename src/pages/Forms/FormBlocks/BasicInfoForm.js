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
			<label>
				Age:
				<input
					type="number"
					min="0"
					placeholder="Enter your age"
					value={age}
					onChange={(e) => setAge(e.target.value)}
					required
				/>
			</label>
			<button type="button" onClick={() => setShowAgeInfo(!showAgeInfo)}>
				Why do we ask this?
			</button>
			{showAgeInfo && (
				<p className="info-text">
					Age is essential in determining eligibility and calculating potential
					premium costs, as certain age groups may qualify for specific benefits
					or discounts.
				</p>
			)}

			<label>
				Sex:
				<select value={sex} onChange={(e) => setSex(e.target.value)} required>
					<option value="">Select</option>
					<option value="male">Male</option>
					<option value="female">Female</option>
					<option value="other">Other</option>
					<option value="preferNotToSay">Prefer not to say</option>
				</select>
			</label>
			<button type="button" onClick={() => setShowSexInfo(!showSexInfo)}>
				Why do we ask this?
			</button>
			{showSexInfo && (
				<p className="info-text">
					Sex can influence coverage options and costs due to different health
					needs and risk factors associated with each demographic group.
				</p>
			)}

			<label>
				Zip Code:
				<input
					type="text"
					placeholder="Enter ZIP code"
					value={zipCode}
					onChange={(e) => setZipCode(e.target.value)}
					required
				/>
			</label>
			<p className="info-text">
				ZIP code is required to show local plan options.
			</p>

			<label>
				Income (Optional):
				<input
					type="number"
					placeholder="Annual income"
					value={income}
					onChange={(e) => setIncome(e.target.value)}
				/>
			</label>
			<p className="info-text">
				Income can help determine eligibility for subsidies and other financial
				assistance options.
			</p>

			<label>
				Household Size (Optional):
				<input
					type="number"
					min="1"
					placeholder="Number of people in household"
					value={householdSize}
					onChange={(e) => setHouseholdSize(e.target.value)}
				/>
			</label>
			<p className="info-text">
				Household size may affect eligibility and pricing, especially for
				government programs.
			</p>

			<label>
				<input
					type="checkbox"
					checked={isVeteran}
					onChange={() => setIsVeteran(!isVeteran)}
				/>
				Are you a veteran?
			</label>
			<Button
				type="button"
				onClick={() => setShowVeteranInfo(!showVeteranInfo)}>
				Why do we ask this?
			</Button>
			{showVeteranInfo && (
				<p className="info-text">
					Knowing your veteran status allows us to identify plans with specific
					benefits, discounts, or coverage options tailored to military service
					members.
				</p>
			)}

			<Button type="submit">Next</Button>
		</form>
	);
};

export default BasicInfoForm;
