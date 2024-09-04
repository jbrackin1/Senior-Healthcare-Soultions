/** @format */

// HomePage.js
import React, { useState } from "react";
import styled from "styled-components";
import Button from "../components/ui/button";
import Input from "../components/ui/Input";
import Modal from "../components/ui/modal";

// Styled Components for Main Content and Layout
const MainContent = styled.main`
	padding: 2rem;
	background-image: url("/assets/images/BlueBackground.jpeg"); /* Background image for main content */
	background-size: cover; /* Cover the entire background area */
	background-position: center; /* Center the background image */
	background-repeat: no-repeat; /* Prevents the image from repeating */
	color: ${({ theme }) => theme.colors.text};
`;

const HeroSection = styled.section`
	text-align: center;
	padding: 4rem 2rem;
	background-color: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.backgroundAlt};
`;

const HeroTitle = styled.h1`
	font-family: "Libre Baskerville", serif;
	font-size: 3rem;
	margin-bottom: 1rem;
`;

const HeroDescription = styled.p`
	font-family: "Open Sans", sans-serif;
	font-size: 1.2rem;
	margin-bottom: 2rem;
`;

const HighlightSection = styled.section`
	margin: 2rem 0;
	text-align: center;
	color: #ffffff; /* Make text white */
`;

const HighlightTitle = styled.h2`
	font-family: "Libre Baskerville", serif;
	font-size: 2rem;
	margin-bottom: 1.5rem;
	color: #ffffff; /* Make title white */
`;

const HighlightList = styled.ul`
	list-style-type: none;
	padding: 0;
	font-family: "Open Sans", sans-serif;
	color: #ffffff; /* Make list items white */
`;

const HighlightItem = styled.li`
	margin-bottom: 1rem;
	color: #ffffff; /* Make individual list items white */
`;

const QuickLinks = styled.section`
	margin: 2rem 0;
	display: flex;
	justify-content: center;
`;

const LinkButton = styled(Button)`
	margin: 0 1rem;
`;

const TestimonialSection = styled.section`
	padding: 2rem;
	background-color: ${({ theme }) => theme.colors.background};
	text-align: center;
`;

const TestimonialQuote = styled.p`
	font-family: "Open Sans", sans-serif;
	font-size: 1rem;
	font-style: italic;
	margin-bottom: 1rem;
`;

const TestimonialAuthor = styled.p`
	font-family: "Libre Baskerville", serif;
	font-weight: bold;
`;

// HomePage Component
const HomePage = () => {
	const [isModalOpen, setModalOpen] = useState(false);

	const handleButtonClick = () => {
		setModalOpen(true);
	};

	const handleCloseModal = () => {
		setModalOpen(false);
	};

	return (
		<>
			{/* Hero Section */}
			<HeroSection>
				<HeroTitle>Welcome to Insurance Compare</HeroTitle>
				<HeroDescription>
					Find the best insurance plans tailored to your needs.
				</HeroDescription>
				<Button onClick={handleButtonClick}>Compare Now</Button>
			</HeroSection>

			{/* Main Content */}
			<MainContent>
				{/* Introduction and Highlights */}
				<HighlightSection>
					<HighlightTitle>Why Choose Us?</HighlightTitle>
					<HighlightList>
						<HighlightItem>
							Find the Best Insurance for Your Needs
						</HighlightItem>
						<HighlightItem>Compare Coverage and Costs</HighlightItem>
						<HighlightItem>Trusted by Experts</HighlightItem>
					</HighlightList>
				</HighlightSection>

				{/* Quick Access Links */}
				<QuickLinks>
					<LinkButton>Compare Plans</LinkButton>
					<LinkButton>Resources</LinkButton>
					<LinkButton>Contact Us</LinkButton>
				</QuickLinks>

				{/* Testimonials */}
				<TestimonialSection>
					<TestimonialQuote>
						"This website made it so easy to find the best insurance for me!"
					</TestimonialQuote>
					<TestimonialAuthor>– Happy Customer</TestimonialAuthor>
				</TestimonialSection>
			</MainContent>

			{/* Modal for further user interaction */}
			{isModalOpen && (
				<Modal onClose={handleCloseModal}>
					<h2>Request More Information</h2>
					<p>Please provide your contact details to get personalized offers.</p>
					<Input placeholder="Enter your email" />
					<Button onClick={handleCloseModal}>Close</Button>
				</Modal>
			)}
		</>
	);
};

export default HomePage;
