/** @format */

import styled from "styled-components";

const Button = styled.button`
	font-family: "Open Sans", sans-serif;
	background-color: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.backgroundAlt};
	border: none;
	padding: 0.5rem 1rem;
	cursor: pointer;
	transition: background-color 0.3s ease;

	&:hover {
		background-color: ${({ theme }) => theme.colors.accent};
	}

	&:disabled {
		background-color: ${({ theme }) => theme.colors.secondaryPrimary};
		cursor: not-allowed;
		opacity: 0.6;
	}
`;

export default Button;

