/** @format */

import React, { useState } from "react";

const HealthConditionsForm = ({ onNext }) => {
	const [conditions, setConditions] = useState([]);
	const [medications, setMedications] = useState("");
	const [showInfo, setShowInfo] = useState(false);

	const handleConditionsChange = (event) => {
		const { value, checked } = event.target;
		if (checked) {
			setConditions([...conditions, value]);
		} else {
			setConditions(conditions.filter((condition) => condition !== value));
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onNext({ conditions, medications });
	};

	return (
		<form onSubmit={handleSubmit}>
			<h3>Health Conditions</h3>

			<button type="button" onClick={() => setShowInfo(!showInfo)}>
				Why do we ask this?
			</button>
			{showInfo && (
				<p className="info-text">
					Collecting information on pre-existing conditions allows us to
					identify plans that cover specific health needs, medications, and
					treatments that are essential for managing your health effectively.
				</p>
			)}

			<label>
				<input
					type="checkbox"
					value="Diabetes"
					onChange={handleConditionsChange}
				/>
				Diabetes
			</label>

			<label>
				<input
					type="checkbox"
					value="High Blood Pressure"
					onChange={handleConditionsChange}
				/>
				High Blood Pressure
			</label>

			<label>
				<input
					type="checkbox"
					value="Heart Disease"
					onChange={handleConditionsChange}
				/>
				Heart Disease
			</label>

			<label>
				<input
					type="checkbox"
					value="Asthma"
					onChange={handleConditionsChange}
				/>
				Asthma
			</label>

			<label>
				<input
					type="checkbox"
					value="Cancer"
					onChange={handleConditionsChange}
				/>
				Cancer
			</label>

			<label>
				<input
					type="checkbox"
					value="Arthritis"
					onChange={handleConditionsChange}
				/>
				Arthritis
			</label>

			<label>
				<input
					type="checkbox"
					value="Chronic Kidney Disease"
					onChange={handleConditionsChange}
				/>
				Chronic Kidney Disease
			</label>

			<label>
				<input
					type="checkbox"
					value="COPD (Chronic Obstructive Pulmonary Disease)"
					onChange={handleConditionsChange}
				/>
				COPD (Chronic Obstructive Pulmonary Disease)
			</label>

			<label>
				<input
					type="checkbox"
					value="Depression/Anxiety"
					onChange={handleConditionsChange}
				/>
				Depression/Anxiety
			</label>

			<label>
				<input
					type="checkbox"
					value="Obesity"
					onChange={handleConditionsChange}
				/>
				Obesity
			</label>

			<label>
				<input
					type="checkbox"
					value="Thyroid Disorders"
					onChange={handleConditionsChange}
				/>
				Thyroid Disorders
			</label>

			<label>
				Medications:
				<input
					type="text"
					value={medications}
					onChange={(e) => setMedications(e.target.value)}
				/>
			</label>

			<button type="submit">Next</button>
		</form>
	);
};

export default HealthConditionsForm;
