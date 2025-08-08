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
		<section aria-labelledby="health-conditions-heading">
			<h2 id="health-conditions-heading">Health Conditions</h2>

			<button
				type="button"
				onClick={() => setShowInfo(!showInfo)}
				aria-expanded={showInfo}
				aria-controls="info-text">
				Why do we ask this?
			</button>

			{showInfo && (
				<p id="info-text" className="info-text">
					Collecting information on pre-existing conditions allows us to
					identify plans that cover specific health needs, medications, and
					treatments that are essential for managing your health effectively.
				</p>
			)}
			<form onSubmit={handleSubmit}>
				<fieldset>
					<legend>Select any health conditions you have:</legend>

					<div>
						<input
							type="checkbox"
							id="cond-diabetes"
							value="Diabetes"
							onChange={handleConditionsChange}
						/>
						<label htmlFor="cond-diabetes">Diabetes</label>
					</div>

					<div>
						<input
							type="checkbox"
							id="cond-bp"
							value="High Blood Pressure"
							onChange={handleConditionsChange}
						/>
						<label htmlFor="cond-bp">High Blood Pressure</label>
					</div>

					<div>
						<input
							type="checkbox"
							id="cond-heart"
							value="Heart Disease"
							onChange={handleConditionsChange}
						/>
						<label htmlFor="cond-heart">Heart Disease</label>
					</div>

					<div>
						<input
							type="checkbox"
							id="cond-asthma"
							value="Asthma"
							onChange={handleConditionsChange}
						/>
						<label htmlFor="cond-asthma">Asthma</label>
					</div>

					<div>
						<input
							type="checkbox"
							id="cond-cancer"
							value="Cancer"
							onChange={handleConditionsChange}
						/>
						<label htmlFor="cond-cancer">Cancer</label>
					</div>

					<div>
						<input
							type="checkbox"
							id="cond-arthritis"
							value="Arthritis"
							onChange={handleConditionsChange}
						/>
						<label htmlFor="cond-arthritis">Arthritis</label>
					</div>

					<div>
						<input
							type="checkbox"
							id="cond-kidney"
							value="Chronic Kidney Disease"
							onChange={handleConditionsChange}
						/>
						<label htmlFor="cond-kidney">Chronic Kidney Disease</label>
					</div>

					<div>
						<input
							type="checkbox"
							id="cond-copd"
							value="COPD (Chronic Obstructive Pulmonary Disease)"
							onChange={handleConditionsChange}
						/>
						<label htmlFor="cond-copd">
							COPD (Chronic Obstructive Pulmonary Disease)
						</label>
					</div>

					<div>
						<input
							type="checkbox"
							id="cond-depression"
							value="Depression/Anxiety"
							onChange={handleConditionsChange}
						/>
						<label htmlFor="cond-depression">Depression/Anxiety</label>
					</div>

					<div>
						<input
							type="checkbox"
							id="cond-obesity"
							value="Obesity"
							onChange={handleConditionsChange}
						/>
						<label htmlFor="cond-obesity">Obesity</label>
					</div>

					<div>
						<input
							type="checkbox"
							id="cond-thyroid"
							value="Thyroid Disorders"
							onChange={handleConditionsChange}
						/>
						<label htmlFor="cond-thyroid">Thyroid Disorders</label>
					</div>
				</fieldset>

				<div className="form-group">
					<label htmlFor="medications">Medications (optional):</label>
					<input
						type="text"
						id="medications"
						value={medications}
						onChange={(e) => setMedications(e.target.value)}
					/>
				</div>

				<button
					type="submit"
					aria-label="Submit health conditions and proceed to next step">
					Next
				</button>
			</form>
		</section>
	);
};

export default HealthConditionsForm;
