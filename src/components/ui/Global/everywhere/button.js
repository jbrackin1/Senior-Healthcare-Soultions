/** @format */

import styled from "styled-components";

const Button = styled.button`
	font-family: "Open Sans", sans-serif;
	font-weight: bold;
	font-size: 1.75rem;
	background: linear-gradient(to bottom, #e0f4fb 30%, #9fd2e6 100%);
	color: #073642; /* Deep navy text */
	border: 2px solid #073642;
	border-radius: 12px;
	padding: 0.75rem 1.5rem;
	cursor: pointer;
	transition: background 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);

	&:hover,
	&:focus {
		background: linear-gradient(to bottom, #d2effa, #7fbdd8);
		box-shadow: 0 0 0 3px rgba(7, 54, 66, 0.4);
		outline: none;
	}

	&:disabled {
		background: #e0e0e0;
		color: #888;
		border-color: #ccc;
		cursor: not-allowed;
		opacity: 0.6;
	}
`;

export default Button;
