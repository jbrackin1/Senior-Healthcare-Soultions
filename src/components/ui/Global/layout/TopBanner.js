/** @format */
// TopBanner.js

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Styled Components
const TopBanner = styled.header`
	background-color: ${({ theme }) => theme.colors.accent};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 1rem 0;
	font-family: "Libre Baskerville", serif;
`;

const NavMenu = styled.nav`
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
	justify-content: center;
	margin-top: 10px;
	position: relative;

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
	}
`;

const NavItem = styled(Link)`
	text-decoration: none;
	color: ${({ theme }) => theme.colors.backgroundAlt};
	font-size: ${({ theme }) => theme.fontSizes.medium};
	font-weight: bold;

	&:hover {
		color: #add8e6;
	}

	@media (max-width: 768px) {
		font-size: 1rem;
	}
`;

const DropdownToggle = styled.div`
	color: ${({ theme }) => theme.colors.backgroundAlt};
	font-size: ${({ theme }) => theme.fontSizes.medium};
	font-weight: bold;
	cursor: pointer;
	position: relative;

	&:hover > div {
		display: block;
	}

	@media (max-width: 768px) {
		font-size: 1rem;
	}
`;

const DropdownMenu = styled.div`
	display: none;
	position: absolute;
	top: 100%;
	left: 50%;
	transform: translateX(-50%);
	background-color: ${({ theme }) => theme.colors.background};
	border: 1px solid ${({ theme }) => theme.colors.border};
	padding: 10px 0;
	box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
	z-index: 5;
	min-width: 200px;
	text-align: center;
`;

const DropdownItem = styled(Link)`
	display: block;
	text-decoration: none;
	color: ${({ theme }) => theme.colors.text};
	padding: 10px 20px;

	&:hover {
		background-color: ${({ theme }) =>
			theme.colors.hoverBackground || "#f0f0f0"};
		color: ${({ theme }) => theme.colors.accent};
	}
`;

// TopBanner Component
const TopBannerComponent = () => {
	return (
		<TopBanner>
			<NavMenu>
				<NavItem to="/">Home</NavItem>
				<NavItem to="/about">About</NavItem>
				<NavItem to="/blog">Blog</NavItem>
				<NavItem to="/careers">Careers</NavItem>
				<NavItem to="/contact">Contact</NavItem>
				<NavItem to="/marketplace">MarketPlace</NavItem>
				<NavItem to="/va-drug-coverage">VA Benefit Info</NavItem>

				{/* Dropdown Menu Example */}
				<DropdownToggle>
					Resources
					<DropdownMenu>
						<DropdownItem to="/privacy-policy">Privacy Policy</DropdownItem>
						<DropdownItem to="/terms-of-service">Terms of Service</DropdownItem>
						<DropdownItem to="/testimonials">Testimonials</DropdownItem>
						<DropdownItem to="/faq">FAQ</DropdownItem>
					</DropdownMenu>
				</DropdownToggle>

				{/* <DropdownToggle>
					User
					<DropdownMenu>
						<DropdownItem to="/login-signup">Login/Signup</DropdownItem>
						<DropdownItem to="/user-profile">User Profile</DropdownItem>
					</DropdownMenu>
				</DropdownToggle> */}
			</NavMenu>
		</TopBanner>
	);
};

export default TopBannerComponent;
