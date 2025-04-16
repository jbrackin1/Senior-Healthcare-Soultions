/** @format */

// src/components/compare/MetalLevelSelect.js
import React from "react";
import styled from "styled-components";

const StyledSelect = styled.select`
	margin: 0 0.5rem;
	padding: 0.5rem;
	border-radius: 4px;
	border: 1px solid ${({ theme }) => theme.colors.border};
	font-size: 1rem;
`;

const MetalLevelSelect = ({ options, onChange, defaultValue }) => {
	return (
		<StyledSelect onChange={onChange} defaultValue={defaultValue}>
			{options.map((option) => (
				<option key={option.value} value={option.value}>
					{option.label}
				</option>
			))}
		</StyledSelect>
	);
};

export default MetalLevelSelect;
