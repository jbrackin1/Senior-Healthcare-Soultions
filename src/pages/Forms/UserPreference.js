/** @format */

import React, { useState } from "react";
import styled from "styled-components";
import RangeSlider from "../../components/ui/Global/RangeSlider";
import MetalLevelSelect from "../../components/ui/compare/MetalLevelSelect";
import Toggle from "../../components/ui/Global/Toggle";

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


	return (
		<PreferenceContainer>
			<SectionTitle>Set Your Insurance Preferences</SectionTitle>

			{/* RangeSlider for budget or amount */}
			<Label>Preferred Monthly Premium</Label>
			<RangeSlider
				min={0}
				max={2000}
				step={10}
				value={formData?.preferredPremium || 100}
				onChange={(val) => handleFilterChange("preferredPremium", val)}
			/>

			{/* Filters for metalLevels, issuers, types */}
			<FieldRow>
				<div>
					<Label>Metal Level</Label>
					<MetalLevelSelect
						options={getFacetOptions("metalLevels")}
						defaultValue=""
						onChange={(e) => handleFilterChange("metalLevel", e.target.value)}
					/>
				</div>
				<div>
					<Label>Plan Type</Label>
					<MetalLevelSelect
						options={getFacetOptions("types")}
						defaultValue=""
						onChange={(e) => handleFilterChange("planType", e.target.value)}
					/>
				</div>
				<div>
					<Label>Insurance Provider</Label>
					<MetalLevelSelect
						options={getFacetOptions("issuers")}
						defaultValue=""
						onChange={(e) => handleFilterChange("issuer", e.target.value)}
					/>
				</div>
				{formData.lifestylePrograms?.length > 0 && (
					<SectionBlock>
						<SectionTitle>Selected Lifestyle Programs</SectionTitle>
						<InfoList>
							{formData.lifestylePrograms.map((b, i) => (
								<li key={i}>
									<Check>✓</Check>
									{b}
								</li>
							))}
						</InfoList>
					</SectionBlock>
				)}
			</FieldRow>

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

			{/* Toggle Mom Mode or Tooltip */}
			<FieldRow>
				<div>
					<Label>Enable Tooltips / "Mom Mode"</Label>
					<Toggle
						isOn={tooltipOn}
						onToggle={() => setTooltipOn((prev) => !prev)}
					/>
				</div>
			</FieldRow>
		</PreferenceContainer>
	);
};

export default UserPreference;
