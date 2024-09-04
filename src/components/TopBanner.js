/** @format */
// TopBanner.js

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Styled Components
const TopBanner = styled.header`
	background-color: ${({ theme }) => theme.colors.accent};
	// min-height: 0.2vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: ${({ theme }) => theme.fontSizes.large};
	color: ${({ theme }) => theme.colors.accent};
	font-family: "Libre Baskerville", serif;
`;


const NavMenu = styled.nav`
	display: flex;
	gap: 20px;
	margin-top: 20px;
	position: relative; 
`;

const NavItem = styled(Link)`
	text-decoration: none;
	color: ${({ theme }) => theme.colors.backgroundAlt};
};
	font-size: ${({ theme }) => theme.fontSizes.medium};
	font-weight: bold;
	position: relative; 

	&:hover {
		color: ${({ theme }) => theme.colors.backgroundAlt};
	}

	&:hover > div {
		display: block; /* Show the dropdown on hover */
	}
`;

const DropdownMenu = styled.div`
	display: none;
	position: absolute;
	top: 100%;
	left: 0;
	background-color: ${({ theme }) => theme.colors.background};
	border: 1px solid ${({ theme }) => theme.colors.border};
	padding: 10px 0;
	box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
	z-index: 1;
`;

const DropdownItem = styled(Link)`
	display: block;
	text-decoration: none;
	color: ${({ theme }) => theme.colors.text};
	padding: 10px 20px;

	&:hover {
		background-color: ${({ theme }) => theme.colors.hoverBackground};
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

				{/* Dropdown Menu Example */}
				<NavItem to="#">
					Resources
					<DropdownMenu>
						<DropdownItem to="/privacy-policy">Privacy Policy</DropdownItem>
						<DropdownItem to="/terms-of-service">Terms of Service</DropdownItem>
						<DropdownItem to="/testimonials">Testimonials</DropdownItem>
					</DropdownMenu>
				</NavItem>

				{/* Another Dropdown Menu Example */}
				<NavItem to="#">
					User
					<DropdownMenu>
						<DropdownItem to="/login-signup">Login/Signup</DropdownItem>
						<DropdownItem to="/user-profile">User Profile</DropdownItem>
					</DropdownMenu>
				</NavItem>
			</NavMenu>
		</TopBanner>
	);
};

export default TopBannerComponent;
