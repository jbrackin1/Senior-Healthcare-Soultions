/** @format */

//nicoles-app/src/pages/Forms/UserPreference.js

import React, { useState } from "react";
import styled from "styled-components";
import MetalLevelSelect from "../../components/ui/compare/MetalLevelSelect";
import Toggle from "../../components/ui/Global/forms/Toggle";
import MomMode from "../../components/ui/Feedback/MomMode";
import Tooltip from "../../components/ui/Global/data-display/Tooltip";

const PreferenceContainer = styled.div`
	padding: 2rem;
	background-color: ${({ theme }) => theme.colors.background};
	border-radius: 8px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	max-width: 800px;
	margin: auto;
`;

const SectionTitle = styled.h2`
	text-align: center;
	margin-bottom: 1.5rem;
`;

const FieldRow = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
	margin-bottom: 1.5rem;
`;

const Label = styled.label`
	font-weight: bold;
	margin-bottom: 0.5rem;
	display: block;
`;

const SectionBlock = styled.div`
	margin-top: 2rem;
	padding: 1rem 1.5rem;
	border: 1px solid ${({ theme }) => theme.colors.border || "#ccc"};
	border-radius: 8px;
	background-color: ${({ theme }) => theme.colors.backgroundAlt || "#f9f9f9"};
`;

const InfoList = styled.ul`
	list-style: none;
	padding: 0;
	li {
		margin-bottom: 0.5rem;
	}
`;

const UserPreference = ({ formData, setFormData, facetGroups = [] }) => {
	const [tooltipOn, setTooltipOn] = useState(true);

	const handleFilterChange = (key, value) => {
		setFormData((prev) => ({
			...prev,
			[key]: value,
		}));
	};

	const getFacetOptions = (name) => {
		const facetGroup = facetGroups.find((group) => group.name === name);
		return facetGroup
			? facetGroup.facets.map((facet) => ({
					label: facet.name,
					value: facet.name,
			  }))
			: [];
	};

    const Check = styled.span`
			margin-right: 0.5rem;
			color: ${({ color }) => color || "black"};
			font-weight: bold;
		`;

		const isUserInterested = (benefit, userPrefs = []) =>
			userPrefs.includes(benefit);
	const { enabled } = MomMode.useMomMode();
	const momMode = enabled;

	// Then later, if approved add more helpful tips here...If we do this it will take a while to get it right

	{
		enabled && (
			<Tooltip title="Only answer 'Yes' if you or someone you're enrolling is currently pregnant." />
		);
	}
	

	return (
		<PreferenceContainer>
			<SectionTitle>Set Your Insurance Preferences</SectionTitle>

			<Label>Preferred Monthly Premium</Label>

			<input
				type="range"
				min="0"
				max="2000"
				step="10"
				value={formData?.preferredPremium || 100}
				onChange={(e) => handleFilterChange("preferredPremium", e.target.value)}
				style={{ width: "100%", margin: "1rem 0" }}
			/>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					marginTop: "0.5rem",
				}}>
				<span>$0</span>
				<span>${parseFloat(formData?.preferredPremium) || 100}</span>
				<span>$2000</span>
			</div>

			{/* Filters for metalLevels, issuers, types */}

			<FieldRow>
				<div style={{ width: "100%", textAlign: "center", marginTop: "1rem" }}>
					<Label>
						Cost vs. Coverage Level
						{momMode && (
							<Tooltip title="Metal Levels are shortcuts to guess yearly costs: Bronze = Cheapest monthly, but bigger bills if sick. Silver = Middle ground. Gold = Expensive monthly, cheaper care. Platinum = Highest monthly, lowest care costs." />
						)}
					</Label>
				</div>

				<div
					style={{ width: "100%", textAlign: "center", marginTop: ".05rem" }}>
					<select
						style={{ maxWidth: "90%", padding: "0.5rem", fontSize: "1rem" }}
						value={formData.metalLevel || ""}
						onChange={(e) => handleFilterChange("metalLevel", e.target.value)}>
						<option value="">Select a plan type (optional)</option>
						<option value="Bronze">
							Bronze – Low Monthly Cost, High Out-of-Pocket (Good if you're
							healthy)
						</option>
						<option value="Silver">
							Silver – Balanced Costs & Coverage (Most people choose this)
						</option>
						<option value="Gold">
							Gold – Higher Monthly, Lower Care Costs (Ideal for frequent care)
						</option>
						<option value="Platinum">
							Platinum – Highest Monthly, Lowest Care Costs (Best for ongoing
							care)
						</option>
					</select>
				</div>
			</FieldRow>

			<SectionBlock>
				{/* Toggles with On/Off */}
				<FieldRow
					style={{
						justifyContent: "space-around",
						gap: "1rem",
						flexWrap: "wrap",
					}}>
					{/* Uses Tobacco */}
					<div style={{ textAlign: "center" }}>
						<Label>
							Uses Tobacco?{" "}
							<Tooltip title="Answer 'Yes' if you’ve used tobacco products in the last 6 months. This may affect premiums." />
						</Label>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								gap: "0.5rem",
								justifyContent: "center",
							}}>
							<span style={{ fontSize: "0.875rem" }}>No</span>
							<Toggle
								isOn={formData.usesTobacco || false}
								onToggle={() =>
									setFormData((prev) => ({
										...prev,
										usesTobacco: !prev.usesTobacco,
									}))
								}
							/>
							<span style={{ fontSize: "0.875rem" }}>Yes</span>
						</div>
					</div>

					{/* Pregnant */}
					<div style={{ textAlign: "center" }}>
						<Label>
							Pregnant?{" "}
							<Tooltip title="Only answer 'Yes' if you or someone you're enrolling is currently pregnant." />
						</Label>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								gap: "0.5rem",
								justifyContent: "center",
							}}>
							<span style={{ fontSize: "0.875rem" }}>No</span>
							<Toggle
								isOn={formData.isPregnant || false}
								onToggle={() =>
									setFormData((prev) => ({
										...prev,
										isPregnant: !prev.isPregnant,
									}))
								}
							/>
							<span style={{ fontSize: "0.875rem" }}>Yes</span>
						</div>
					</div>

					{/* Parent */}
					<div style={{ textAlign: "center" }}>
						<Label>
							Parent?{" "}
							<Tooltip title="Answer 'Yes' if you have dependent children under your care." />
						</Label>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								gap: "0.5rem",
								justifyContent: "center",
							}}>
							<span style={{ fontSize: "0.875rem" }}>No</span>
							<Toggle
								isOn={formData.isParent || false}
								onToggle={() =>
									setFormData((prev) => ({ ...prev, isParent: !prev.isParent }))
								}
							/>
							<span style={{ fontSize: "0.875rem" }}>Yes</span>
						</div>
					</div>
				</FieldRow>

				<FieldRow
					style={{ justifyContent: "center", flexWrap: "wrap", gap: "2rem" }}>
					<div style={{ textAlign: "center" }}></div>

					<div style={{ textAlign: "center" }}>
						<Label>
							Has Minimum Essential Coverage?{" "}
							<Tooltip title="Minimum Essential Coverage means you already have basic health insurance like employer coverage, Medicare, or Medicaid." />
						</Label>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								gap: "0.5rem",
								justifyContent: "center",
							}}>
							<span style={{ fontSize: "0.875rem" }}>No</span>
							<Toggle
								isOn={formData.hasMEC || false}
								onToggle={() =>
									setFormData((prev) => ({ ...prev, hasMEC: !prev.hasMEC }))
								}
							/>
							<span style={{ fontSize: "0.875rem" }}>Yes</span>
						</div>
					</div>
				</FieldRow>

				{/* Row Checkboxes */}
			</SectionBlock>

			<SectionTitle>Wellness & Lifestyle Programs</SectionTitle>
			<FieldRow>
				{[
					"SilverSneakers",
					"Telehealth",
					"Mental Health Counseling",
					"Smoking Cessation",
					"Weight Loss",
					"Chiropractic Care",
					"Acupuncture",
					"Nutrition Counseling",
					"Physical Therapy",
				].map((program) => (
					<label key={program}>
						<input
							type="checkbox"
							value={program}
							checked={formData.lifestylePrograms?.includes(program) || false}
							onChange={(e) => {
								const { value, checked } = e.target;
								const current = formData.lifestylePrograms || [];
								setFormData((prev) => ({
									...prev,
									lifestylePrograms: checked
										? [...current, value]
										: current.filter((p) => p !== value),
								}));
							}}
						/>
						{program}
					</label>
				))}
			</FieldRow>

			<SectionBlock>
				<SectionTitle>Additional Coverage</SectionTitle>
				<FieldRow
					style={{ justifyContent: "center", gap: "3rem", flexWrap: "wrap" }}>
					<div style={{ textAlign: "center" }}>
						<Label>Dental Coverage</Label>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								gap: "0.5rem",
							}}>
							<span style={{ fontSize: "0.875rem" }}>No</span>
							<Toggle
								isOn={formData.dentalCoverage || false}
								onToggle={() =>
									setFormData((prev) => ({
										...prev,
										dentalCoverage: !prev.dentalCoverage,
									}))
								}
							/>
							<span style={{ fontSize: "0.875rem" }}>Yes</span>
						</div>
					</div>

					<div style={{ textAlign: "center" }}>
						<Label>Vision Coverage</Label>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								gap: "0.5rem",
							}}>
							<span style={{ fontSize: "0.875rem" }}>No</span>
							<Toggle
								isOn={formData.visionCoverage || false}
								onToggle={() =>
									setFormData((prev) => ({
										...prev,
										visionCoverage: !prev.visionCoverage,
									}))
								}
							/>
							<span style={{ fontSize: "0.875rem" }}>Yes</span>
						</div>
					</div>
				</FieldRow>
			</SectionBlock>

			{/* Helpful Tips Section */}
			<div style={{ marginTop: "2rem", textAlign: "center" }}>
				<SectionTitle>Extra Help & Explanations</SectionTitle>
				<FieldRow style={{ justifyContent: "center" }}>
					<div>
						<Label>Helpful Tips</Label>
						<Tooltip title="Turn this on to see extra explanations about plan details and coverage." />
						<div
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								gap: "0.5rem",
								marginTop: "0.5rem",
							}}>
							<span style={{ fontSize: "0.875rem" }}>Off</span>
							<Toggle
								isOn={tooltipOn}
								onToggle={() => setTooltipOn((prev) => !prev)}
							/>
							<span style={{ fontSize: "0.875rem" }}>On</span>
						</div>
					</div>
				</FieldRow>
			</div>
		</PreferenceContainer>
	);
};

export default UserPreference;
