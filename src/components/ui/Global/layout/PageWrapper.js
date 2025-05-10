/** @format */

// src/components/ui/Global/PageWrapper.js
import styled from "styled-components";

const PageWrapper = styled.main`
	width: 100%;
	max-width: 1200px;
	margin: 2rem auto;
	padding: 2rem;
	background-color: ${({ theme }) => theme.colors.backgroundAlt};
	color: ${({ theme }) => theme.colors.text};
	border-radius: 8px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
	font-family: "Open Sans", sans-serif;

	@media (max-width: 768px) {
		padding: 1rem;
		box-shadow: none;
	}

	@media (max-width: 480px) {
		padding: 0.5rem;
		border-radius: 0;
	}
`;

export default PageWrapper;
