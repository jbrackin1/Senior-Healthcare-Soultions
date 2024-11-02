/** @format */

import React, { useState } from "react";
import BasicInfoForm from "./BasicInfoForm";
import HealthConditionsForm from "./HealthConditionsForm";
import LifestyleProgramsForm from "./LifestyleProgramsForm";
import CostAndBenefitsForm from "./CostAndBenefitsForm";
import FinalStep from "./FinalStep";

const InsuranceForm = () => {
	const [formData, setFormData] = useState({});
	const [expandedSection, setExpandedSection] = useState(null);

	const handleNext = (data) => {
		setFormData((prev) => ({ ...prev, ...data }));
	};

	const toggleSection = (section) => {
		setExpandedSection(expandedSection === section ? null : section);
	};

	const handleSubmitAsGuest = () => {
		// Handle form submission anonymously
		console.log("Submitting as guest:", formData);
		// Add any additional guest-specific logic here
	};

	const handleSignup = () => {
		// Handle signup and saving form data
		console.log("Redirecting to signup...");
		// Add redirect logic or signup flow handling here
	};

	return (
		<div>
			{/* Basic Info Section */}
			<div>
				<h2 onClick={() => toggleSection("basicInfo")}>
					Basic Information {expandedSection === "basicInfo" ? "-" : "+"}
				</h2>
				{expandedSection === "basicInfo" && (
					<BasicInfoForm onNext={(data) => handleNext(data)} />
				)}
			</div>

			{/* Health Conditions Section */}
			<div>
				<h2 onClick={() => toggleSection("healthConditions")}>
					Health Conditions {expandedSection === "healthConditions" ? "-" : "+"}
				</h2>
				{expandedSection === "healthConditions" && (
					<HealthConditionsForm onNext={(data) => handleNext(data)} />
				)}
			</div>

			{/* Lifestyle Programs Section */}
			<div>
				<h2 onClick={() => toggleSection("lifestylePrograms")}>
					Lifestyle Programs{" "}
					{expandedSection === "lifestylePrograms" ? "-" : "+"}
				</h2>
				{expandedSection === "lifestylePrograms" && (
					<LifestyleProgramsForm onNext={(data) => handleNext(data)} />
				)}
			</div>

			{/* Cost and Benefits Section */}
			<div>
				<h2 onClick={() => toggleSection("costAndBenefits")}>
					Cost and Benefits {expandedSection === "costAndBenefits" ? "-" : "+"}
				</h2>
				{expandedSection === "costAndBenefits" && (
					<CostAndBenefitsForm onNext={(data) => handleNext(data)} />
				)}
			</div>

			{/* Final Step */}
			<div>
				<h2 onClick={() => toggleSection("finalStep")}>
					Final Step {expandedSection === "finalStep" ? "-" : "+"}
				</h2>
				{expandedSection === "finalStep" && (
					<FinalStep onSubmit={handleSubmitAsGuest} onSignup={handleSignup} />
				)}
			</div>
		</div>
	);
};

export default InsuranceForm;
