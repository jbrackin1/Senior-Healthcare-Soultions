/** @format */

import React, { useState } from "react";

const LifestyleProgramsForm = ({ onNext }) => {
	const [programs, setPrograms] = useState([]);

	const handleProgramsChange = (event) => {
		const { value, checked } = event.target;
		if (checked) {
			setPrograms([...programs, value]);
		} else {
			setPrograms(programs.filter((program) => program !== value));
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onNext({ programs });
	};

	return (
		<form onSubmit={handleSubmit}>
			<h3>Lifestyle Programs</h3>

			<label>
				<input
					type="checkbox"
					value="SilverSneakers"
					onChange={handleProgramsChange}
				/>
				SilverSneakers
			</label>

			<label>
				<input
					type="checkbox"
					value="Telehealth"
					onChange={handleProgramsChange}
				/>
				Telehealth Services
			</label>

			<label>
				<input
					type="checkbox"
					value="Mental Health Counseling"
					onChange={handleProgramsChange}
				/>
				Mental Health Counseling
			</label>

			<label>
				<input
					type="checkbox"
					value="Smoking Cessation Programs"
					onChange={handleProgramsChange}
				/>
				Smoking Cessation Programs
			</label>

			<label>
				<input
					type="checkbox"
					value="Weight Loss Programs"
					onChange={handleProgramsChange}
				/>
				Weight Loss Programs
			</label>

			<label>
				<input
					type="checkbox"
					value="Chiropractic Care"
					onChange={handleProgramsChange}
				/>
				Chiropractic Care
			</label>

			<label>
				<input
					type="checkbox"
					value="Acupuncture"
					onChange={handleProgramsChange}
				/>
				Acupuncture
			</label>

			<label>
				<input
					type="checkbox"
					value="Nutritional Counseling"
					onChange={handleProgramsChange}
				/>
				Nutritional Counseling
			</label>

			<label>
				<input
					type="checkbox"
					value="Physical Therapy"
					onChange={handleProgramsChange}
				/>
				Physical Therapy
			</label>

			<label>
				<input
					type="checkbox"
					value="Vision Wellness Programs"
					onChange={handleProgramsChange}
				/>
				Vision Wellness Programs
			</label>

			<label>
				<input
					type="checkbox"
					value="Dental Wellness Programs"
					onChange={handleProgramsChange}
				/>
				Dental Wellness Programs
			</label>

			<button type="submit">Next</button>
		</form>
	);
};

export default LifestyleProgramsForm;
