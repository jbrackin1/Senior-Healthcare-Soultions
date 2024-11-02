/** @format */

import React, { useState } from "react";

const CostAndBenefitsForm = ({ onNext }) => {
	const [budget, setBudget] = useState("");
	const [additionalBenefits, setAdditionalBenefits] = useState([]);

	const handleBenefitsChange = (event) => {
		const { value, checked } = event.target;
		if (checked) {
			setAdditionalBenefits([...additionalBenefits, value]);
		} else {
			setAdditionalBenefits(
				additionalBenefits.filter((benefit) => benefit !== value)
			);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onNext({ budget, additionalBenefits });
	};

	return (
		<form onSubmit={handleSubmit}>
			<h3>Cost and Benefits</h3>

			<label>
				Budget (Monthly Premium):
				<input
					type="number"
					value={budget}
					onChange={(e) => setBudget(e.target.value)}
				/>
			</label>

			<h4>Additional Benefits</h4>
			<label>
				<input type="checkbox" value="Dental" onChange={handleBenefitsChange} />
				Dental
			</label>

			<label>
				<input type="checkbox" value="Vision" onChange={handleBenefitsChange} />
				Vision
			</label>

			<label>
				<input
					type="checkbox"
					value="Hearing"
					onChange={handleBenefitsChange}
				/>
				Hearing
			</label>

			<label>
				<input
					type="checkbox"
					value="Mental Health"
					onChange={handleBenefitsChange}
				/>
				Mental Health
			</label>

			<label>
				<input
					type="checkbox"
					value="Prescription Drugs"
					onChange={handleBenefitsChange}
				/>
				Prescription Drugs
			</label>

			<label>
				<input
					type="checkbox"
					value="Alternative Medicine"
					onChange={handleBenefitsChange}
				/>
				Alternative Medicine
			</label>

			<label>
				<input
					type="checkbox"
					value="Gym/Fitness Programs"
					onChange={handleBenefitsChange}
				/>
				Gym/Fitness Programs
			</label>

			<label>
				<input
					type="checkbox"
					value="Maternity and Newborn Care"
					onChange={handleBenefitsChange}
				/>
				Maternity and Newborn Care
			</label>

			<label>
				<input
					type="checkbox"
					value="Emergency Care"
					onChange={handleBenefitsChange}
				/>
				Emergency Care
			</label>

			<label>
				<input
					type="checkbox"
					value="Specialist Visit Coverage"
					onChange={handleBenefitsChange}
				/>
				Specialist Visit Coverage
			</label>

			<label>
				<input
					type="checkbox"
					value="Telehealth Services"
					onChange={handleBenefitsChange}
				/>
				Telehealth Services
			</label>

			<button type="submit">Next</button>
		</form>
	);
};

export default CostAndBenefitsForm;
