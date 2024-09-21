/** @format */

// HomePage.js
import React, { useState } from "react";
import styled from "styled-components";
import Button from "../components/ui/Global/button";
import Input from "../components/ui/Global/Input";
import Modal from "../components/ui/Global/modal";
import { Link } from "react-router-dom";


// Full page wrapper with background image
const PageWrapper = styled.div`
	padding: 0;
	background-image: url("/assets/images/BlueBackground.jpeg");
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	color: ${({ theme }) => theme.colors.text};
	min-height: 100vh; /* Ensure it covers the full viewport height */
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
`;

// Hero Section alone at the top
const HeroSection = styled.section`
	width: 100%;
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

const MiddleContent = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 6rem;
	width: 100%;
	padding: 12rem;
`;

const QuickLinks = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	flex: 1;
`;

const StyledLink = styled(Link)`
	text-decoration: none;
`;

const LinkButton = styled(Button)`
	margin-bottom: 1rem;
`;

const HighlightSection = styled.section`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	flex: 1;
	padding: 2rem;
	margin: 2rem;
	z-index: 1;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(255, 255, 255, 0.5);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
		border-radius: 12px;
		z-index: -1;
		color: ${({ theme }) => theme.colors.text};
	}
`;

const HighlightTitle = styled.h2`
	font-family: "Libre Baskerville", serif;
	font-size: 2rem;
	margin-bottom: 1.5rem;
`;

const HighlightList = styled.ul`
	list-style-type: none;
	padding: 0;
	font-family: "Open Sans", sans-serif;
	margin: 0;
`;

const HighlightItem = styled.li`
	margin-bottom: 0.2rem;
	font-size: 1.25rem;
	font-weight: bold;
`;

const TestimonialSection = styled.section`
	padding: 2rem;
	border-radius: 8px;
	background-color: rgba(255, 255, 255, 0.8);
	text-align: center;
	width: 100%;
	margin-top: 2rem;
	background-color: rgba(
		255,
		255,
		255,
		0.5
	);
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
	border-radius: 12px; 
`;

const TestimonialQuote = styled.p`
	font-family: "Open Sans", sans-serif;
	font-size: 1rem;
	font-weight: bold;
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
		<PageWrapper>
			<HeroSection>
				<HeroTitle>Senior Healthcare Solutions</HeroTitle>
				<HeroDescription>
					Find the best insurance plans tailored to your needs.
				</HeroDescription>
				<Button onClick={handleButtonClick}>Sign Up Now</Button>
			</HeroSection>

			<MiddleContent>
				<QuickLinks>
					<StyledLink to="/compare">
						<LinkButton>Compare Plans</LinkButton>
					</StyledLink>
					<StyledLink to="/resources">
						<LinkButton>Resources</LinkButton>
					</StyledLink>
					<StyledLink to="/contact">
						<LinkButton>Contact Us</LinkButton>
					</StyledLink>
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
			</MiddleContent>

			<TestimonialSection>
				<TestimonialQuote>
					"This website made it so easy to find the best insurance for me!"
				</TestimonialQuote>
				<TestimonialAuthor>A Happy Customer</TestimonialAuthor>
			</TestimonialSection>

			{isModalOpen && (
				<Modal onClose={handleCloseModal}>
					<h2>Request More Information</h2>
					<div>Sign up with your contact details to</div>
					<div>receive offers customized just for you.</div>
					<Input placeholder="Enter your email" />
					<Button onClick={handleCloseModal}>Close</Button>
				</Modal>
			)}
		</PageWrapper>
	);
};

export default HomePage;
