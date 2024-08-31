/** @format */
// TopBanner.js

import styled from "styled-components";

const TopBanner = styled.header`
	background-color: ${({ theme }) => theme.colors.primary};
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: ${({ theme }) => theme.fontSizes.large};
	color: ${({ theme }) => theme.colors.text};
	font-family: "Libre Baskerville", serif;
`;

export default TopBanner;
