/** @format */

// src/components/ui/button.js
import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
	background-color: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.white};
	border: none;
	padding: ${({ theme }) => theme.spacing.medium};
	font-size: ${({ theme }) => theme.fontSize.medium};
	border-radius: 4px;
	cursor: pointer;

	&:hover {
		background-color: ${({ theme }) => theme.colors.secondary};
	}
`;

const Button = ({ children, onClick }) => {
	return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
