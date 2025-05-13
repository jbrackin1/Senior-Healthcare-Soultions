/** @format */

// src/components/BottomFooter.js
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Styled component for the footer
const FooterContainer = styled.footer`
	width: 100%;
	padding: 2rem;
	background-color: ${({ theme }) => theme.colors.accent}; /* Dark background */
	color: #ffffff; /* White text color for the entire footer */
	text-align: center;
	font-size: 0.8rem;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: flex-start;

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
	}
`;

const FooterSection = styled.div`
	margin-bottom: 1.5rem;
	min-width: 150px;
`;

const FooterTitle = styled.h4`
	margin-bottom: 0.5rem;
	font-weight: bold;
	color: #ffffff; /* White color for titles */
`;

const FooterLink = styled(Link)`
	text-decoration: none;
	color: #ffffff;
	display: block;
	margin: 0.2rem 0;

	&:hover {
		color: ${({ theme }) => theme.colors.hoverBackground};
	}
`;

const ExternalLink = styled.a`
	text-decoration: none;
	color: #ffffff; 
	display: block;
	margin: 0.2rem 0;

	&:hover {
		color: ${({ theme }) => theme.colors.hoverBackground}; /* Hover effect */
	}
`;

const FooterText = styled.p`
	color: #ffffff; /* White color for plain text */
	margin: 0.5rem 0;
`;

// Footer Component
const BottomFooter = () => {
	return (
		<FooterContainer>
			<FooterSection>
				<FooterTitle>Quick Links</FooterTitle>
				<FooterLink to="/">Home</FooterLink>
				<FooterLink to="/about">About</FooterLink>
				<FooterLink to="/blog">Blog</FooterLink>
				<FooterLink to="/careers">Careers</FooterLink>
				<FooterLink to="/contact">Contact</FooterLink>
			</FooterSection>

			<FooterSection>
				<FooterTitle>Resources</FooterTitle>
				<FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
				<FooterLink to="/terms-of-service">Terms of Service</FooterLink>
				<FooterLink to="/testimonials">Testimonials</FooterLink>
			</FooterSection>

			<FooterSection>
				<FooterTitle>Contact Us</FooterTitle>
				<FooterText>Customer Service: 1-800-INSUREME</FooterText>
				<FooterText>Email: support@insuranceco.com</FooterText>
				<FooterText>123 Main Street, Suite 400, City, State ZIP</FooterText>
			</FooterSection>

			<FooterSection>
				<FooterTitle>Follow Us</FooterTitle>
				<ExternalLink
					href="https://facebook.com"
					target="_blank"
					rel="noopener noreferrer">
					Facebook
				</ExternalLink>
				<ExternalLink
					href="https://twitter.com"
					target="_blank"
					rel="noopener noreferrer">
					Twitter
				</ExternalLink>
				<ExternalLink
					href="https://linkedin.com"
					target="_blank"
					rel="noopener noreferrer">
					LinkedIn
				</ExternalLink>
			</FooterSection>

			<FooterSection>
				<FooterText>&copy; 2024 Senior Healthcare Solution. All rights reserved.</FooterText>
				<FooterText>
					Insurance products are offered by licensed entities and agents.
				</FooterText>
			</FooterSection>
		</FooterContainer>
	);
};

export default BottomFooter;
