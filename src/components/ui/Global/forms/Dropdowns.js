/** @format */

// src/components/ui/Dropdowns.js
import React from "react";
import styled from "styled-components";

const StyledSelect = styled.select`
	padding: ${({ theme }) => theme.spacing.small};
	margin-bottom: ${({ theme }) => theme.spacing.small};
	border: 1px solid ${({ theme }) => theme.colors.border};
	border-radius: 8px;
	font-size: ${({ theme }) => theme.fontSizes.medium};
	width: 100%;
	box-sizing: border-box;

	&:focus {
		border-color: ${({ theme }) => theme.colors.primary};
		outline: none;
	}
`;

const Dropdowns = ({ options, ...props }) => (
	<StyledSelect {...props}>
		<option value="">Select</option>
		{options.map((option) => (
			<option key={option} value={option}>
				{option}
			</option>
		))}
	</StyledSelect>
);

export default Dropdowns;
