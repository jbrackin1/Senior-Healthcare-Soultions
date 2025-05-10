/** @format */
import React from "react";
import styled from "styled-components";

// Pill styling
const PillButton = styled.button`
	padding: 0.5rem 1rem;
	margin: 0.25rem;
	background-color: ${({ selected }) => (selected ? "#cce7f3" : "#f1f1f1")};
	color: ${({ selected }) => (selected ? "#13343E" : "#333")};
	border: 1px solid ${({ selected }) => (selected ? "#7dbad5" : "#ccc")};
	border-radius: 20px;
	font-size: 0.9rem;
	cursor: pointer;
	transition: background-color 0.3s, color 0.3s;

	&:hover {
		background-color: ${({ selected }) => (selected ? "#b7def0" : "#e2e2e2")};
	}
`;

const PriorityPills = ({ priorities = [], formData, setFormData }) => {
	const handlePriorityToggle = (priority) => {
		const current = formData.priorityPreferences || [];

		if (current.includes(priority)) {
			// Unselect
			setFormData((prev) => ({
				...prev,
				priorityPreferences: current.filter((p) => p !== priority),
			}));
		} else {
			// Limit to 6 selections
			if (current.length < 6) {
				setFormData((prev) => ({
					...prev,
					priorityPreferences: [...current, priority],
				}));
			} else {
				alert("You can select up to 6 priorities only.");
			}
		}
	};

	return (
		<div style={{ marginTop: "2rem" }}>
			<h3 style={{ textAlign: "center", marginBottom: "1rem" }}>
				What Matters Most to You?
			</h3>
			<div
				style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
				{priorities.map((priority) => (
					<PillButton
						key={priority}
						type="button"
						selected={formData.priorityPreferences?.includes(priority)}
						onClick={() => handlePriorityToggle(priority)}>
						{priority}
					</PillButton>
				))}
			</div>
		</div>
	);
};

export default PriorityPills;
