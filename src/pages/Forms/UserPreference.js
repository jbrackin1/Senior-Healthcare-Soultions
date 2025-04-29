/** @format */

import React, { useState } from "react";
import styled from "styled-components";
import MetalLevelSelect from "../../components/ui/compare/MetalLevelSelect";
import Toggle from "../../components/ui/Global/forms/Toggle";
import useMomMode from "../../components/ui/Feedback/MomMode";
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
	const { enabled: momMode } = useMomMode();

	// Then later, if approved add more helpful tips here...If we do this it will take a while to get it right

	{
		momMode && (
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
				<div>
					<div>
						<Label>
							Metal Level
							{momMode && (
								<Tooltip title="Metal Levels are shortcuts to guess yearly costs: Bronze = Cheapest monthly, but bigger bills if sick. Silver = Middle ground. Gold = Expensive monthly, cheaper care. Platinum = Highest monthly, lowest care costs." />
							)}
						</Label>
					</div>

					<MetalLevelSelect
						options={[
							{
								label: "Bronze Plan – Lower Monthly, Higher Risk",
								value: "Bronze",
							},
							{ label: "Silver Plan – Balanced Costs", value: "Silver" },
							{
								label: "Gold Plan – Higher Monthly, Lower Risk",
								value: "Gold",
							},
							{
								label: "Platinum Plan – Highest Monthly, Lowest Risk",
								value: "Platinum",
							},
						]}
						defaultValue=""
						onChange={(e) => handleFilterChange("metalLevel", e.target.value)}
					/>
				</div>
			</FieldRow>

			<SectionBlock>
				<SectionTitle>Household Details</SectionTitle>

				<FieldRow>
					<div>
						<Label>
							Pregnant?
							<Tooltip title="Only answer 'Yes' if you or someone you're enrolling is currently pregnant." />
						</Label>
						<Toggle
							isOn={formData.isPregnant || false}
							onToggle={() =>
								setFormData((prev) => ({
									...prev,
									isPregnant: !prev.isPregnant,
								}))
							}
						/>
					</div>

					<div>
						<Label>
							Parent?
							<Tooltip title="Answer 'Yes' if you have dependent children under your care." />
						</Label>
						<Toggle
							isOn={formData.isParent || false}
							onToggle={() =>
								setFormData((prev) => ({
									...prev,
									isParent: !prev.isParent,
								}))
							}
						/>
					</div>

					<div>
						<Label>
							Has Minimum Essential Coverage?
							<Tooltip title="Minimum Essential Coverage means you already have basic health insurance like employer coverage, Medicare, or Medicaid." />
						</Label>
						<Toggle
							isOn={formData.hasMEC || false}
							onToggle={() =>
								setFormData((prev) => ({
									...prev,
									hasMEC: !prev.hasMEC,
								}))
							}
						/>
					</div>
				</FieldRow>

				<FieldRow>
					<div>
						<Label>Relationship</Label>
						<select
							value={formData.relationship || "Self"}
							onChange={(e) =>
								setFormData((prev) => ({
									...prev,
									relationship: e.target.value,
								}))
							}>
							<option value="Self">Self</option>
							<option value="Spouse">Spouse</option>
							<option value="Child">Child</option>
							<option value="Other">Other</option>
						</select>
					</div>

					<div>
						<Label>
							Expected Health Usage
							<Tooltip title="Low: Rare doctor visits. Medium: Regular visits, some meds. High: Frequent specialists or ongoing care." />
						</Label>
						<select
							value={formData.utilization || "Medium"}
							onChange={(e) =>
								setFormData((prev) => ({
									...prev,
									utilization: e.target.value,
								}))
							}>
							<option value="Low">Low</option>
							<option value="Medium">Medium</option>
							<option value="High">High</option>
						</select>
					</div>
				</FieldRow>
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

			<SectionTitle>Additional Coverage</SectionTitle>
			<FieldRow>
				<div>
					<Label>Dental Coverage</Label>
					<Toggle
						isOn={formData.dentalCoverage || false}
						onToggle={() =>
							setFormData((prev) => ({
								...prev,
								dentalCoverage: !prev.dentalCoverage,
							}))
						}
					/>
				</div>
				<div>
					<Label>Vision Coverage</Label>
					<Toggle
						isOn={formData.visionCoverage || false}
						onToggle={() =>
							setFormData((prev) => ({
								...prev,
								visionCoverage: !prev.visionCoverage,
							}))
						}
					/>
				</div>
			</FieldRow>
			<SectionBlock>
				<SectionTitle>Extra Help & Explanations</SectionTitle>
				<FieldRow>
					<div>
						<Label>Helpful Tips</Label>
						<Tooltip title="Turn this on to see extra explanations about plan details and coverage." />
						<Toggle
							isOn={tooltipOn}
							onToggle={() => setTooltipOn((prev) => !prev)}
						/>
					</div>
				</FieldRow>
			</SectionBlock>
		</PreferenceContainer>
	);
};

export default UserPreference;
