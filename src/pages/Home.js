/** @format */

// HomePage.js
import React, { useState } from "react";
import styled from "styled-components";
import Button from "../components/ui/Global/button";
import Input from "../components/ui/Global/Input";
import Modal from "../components/ui/Global/modal";

// Styled Components for Main Content and Layout
const MainContent = styled.main`
	padding: 2rem;
	background-image: url("/assets/images/BlueBackground.jpeg");
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	color: ${({ theme }) => theme.colors.text};
	display: flex; /* Use flex to align items side by side */
	justify-content: space-between; /* Space between sections */
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
	margin: 2rem;
	display: flex;
	flex-direction: column; /* Stack items vertically */
	align-items: flex-start; /* Align items to the left */
`;

const HighlightTitle = styled.h2`
	font-family: "Libre Baskerville", serif;
	font-size: 2rem;
	margin-bottom: 1.5rem;
	color: #ffffff;
`;

const HighlightList = styled.ul`
	list-style-type: none;
	padding: 0;
	font-family: "Open Sans", sans-serif;
	color: #ffffff;
	margin: 0; /* Reset margin */
`;

const HighlightItem = styled.li`
	margin-bottom: 1rem;
	color: #ffffff;
`;

const QuickLinks = styled.section`
	margin: 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
  justify-content:center;
`;

const LinkButton = styled(Button)`
	margin-bottom: 1rem;
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
			<HeroSection>
				<HeroTitle>Welcome to Insurance Compare</HeroTitle>
				<HeroDescription>
					Find the best insurance plans tailored to your needs.
				</HeroDescription>
				<Button onClick={handleButtonClick}>Compare Now</Button>
			</HeroSection>

			<MainContent>
				<QuickLinks>
					<LinkButton>Compare Plans</LinkButton>
					<LinkButton>Resources</LinkButton>
					<LinkButton>Contact Us</LinkButton>
				</QuickLinks>

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
			</MainContent>

			<TestimonialSection>
				<TestimonialQuote>
					"This website made it so easy to find the best insurance for me!"
				</TestimonialQuote>
				<TestimonialAuthor>A Happy Customer</TestimonialAuthor>
			</TestimonialSection>

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
