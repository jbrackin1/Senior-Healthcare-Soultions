/** @format */

import styled from "styled-components";

const Button = styled.button`
	font-family: "Open Sans", sans-serif;
	font-weight: bold; 
	background: linear-gradient(
		to bottom right,
		white 30%,
		transparent 60%
	); /* Gradient from white to transparent */
	color: ${({ theme }) => theme.colors.text}; /* Dark gray text */
	border: 2px solid ${({ theme }) => theme.colors.darkGray}; 
	border-radius: 10px;
	padding: 0.5rem 1rem;
	cursor: pointer;
	transition: background 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.15); 

	&:hover {
		background: linear-gradient(
			to bottom right,
			transparent 30%,
			${({ theme }) => theme.colors.lightGray} 60%
		); 
		color: ${({ theme }) =>
			theme.colors.lightBlue}; 
		box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2); 
	}

	&:disabled {
		background-color: ${({ theme }) => theme.colors.secondaryPrimary};
		cursor: not-allowed;
		opacity: 0.6;
	}
`;

export default Button;
