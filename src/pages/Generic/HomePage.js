/** @format */

import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../components/ui/Global/everywhere/button"; // ✅ Capitalized
import Input from "../../components/ui/Global/forms/Input";
import Modal from "../../components/ui/Global/everywhere/modal";
import { Link } from "react-router-dom";
import DarkLogoSHS from "../../Img/assets/SiteLogos/DarkLogoSHS.webp";
import LappyBG from "../../Img/assets/images/LappyBG.png";
import CellphoneBG from "../../Img/assets/images/CellphoneBG.png";

// ✅ Skip link
const SkipLink = styled.a`
	position: absolute;
	top: 0;
	left: 0;
	background-color: #ffffff;
	color: #000000;
	padding: 0.5rem;
	z-index: 1000;
	text-decoration: underline;
	transform: translateY(-200%);
	&:focus {
		transform: translateY(0%);
	}
`;

const PageWrapper = styled.div`
	padding: 0;
	background-image: url(${LappyBG});
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;
	color: ${({ theme }) => theme.colors.text};
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;

	@media (max-width: 768px) {
		background-image: url(${CellphoneBG});
		background-size: cover;
		background-position: center;
	}
`;

const HeroSection = styled.section`
	width: 100%;
	text-align: center;
	background-color: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.backgroundAlt};
	padding: 2rem;
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
	gap: 2rem;
	width: 100%;
	padding: 6rem;

	@media (max-width: 768px) {
		flex-direction: column;
		padding: 2rem;
		gap: 2rem;
	}
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
	background-color: rgba(255, 255, 255, 0.5);
	text-align: center;
	width: 100%;
	margin-top: 2rem;
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
		<>
			<SkipLink href="#main">Skip to main content</SkipLink>

			<PageWrapper id="main">
				<HeroSection>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}>
						<img
							src={DarkLogoSHS}
							alt="Senior Healthcare Solutions company logo"
							style={{ width: "250px", maxWidth: "90%" }}
						/>

						<h1
							style={{
								fontFamily: "Libre Baskerville",
								fontSize: "2rem",
								marginBottom: "1rem",
							}}>
							Confused by Medicare or Marketplace plans? Let us simplify it for
							you.
						</h1>

						<HeroDescription>
							Get clear, personalized insurance options, No pressure, no cost.
							We'll only reach out if you ask for help from a licensed expert
							you can trust.
						</HeroDescription>

						<LinkButton onClick={handleButtonClick}>
							Get Personalized Recommendations
						</LinkButton>
					</div>
				</HeroSection>

				<MiddleContent>
					<QuickLinks>
						<StyledLink to="/marketplace">
							<LinkButton>Compare Plans</LinkButton>
						</StyledLink>
						<StyledLink to="/resources">
							<LinkButton>Resources</LinkButton>
						</StyledLink>
						<StyledLink to="/about">
							<LinkButton>About Us</LinkButton>
						</StyledLink>
						<StyledLink to="/contact">
							<LinkButton>Contact Us</LinkButton>
						</StyledLink>
					</QuickLinks>

					<HighlightSection>
						<HighlightTitle>Why Choose Us?</HighlightTitle>
						<HighlightList>
							<HighlightItem>
								Personalized plan matching: We tailor options to your needs
							</HighlightItem>
							<HighlightItem>
								Transparent cost comparisons: No hidden surprises
							</HighlightItem>
							<HighlightItem>
								Built for seniors & caregivers: Trusted by families, backed by
								experts
							</HighlightItem>
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
					<Modal
						onClose={handleCloseModal}
						role="dialog"
						aria-labelledby="modal-title"
						aria-modal="true">
						<h2 id="modal-title">Request More Information</h2>
						<p>
							Sign up with your contact details to receive offers customized
							just for you.
						</p>
						<label htmlFor="modal-email" className="sr-only">
							Your email address
						</label>
						<Input
							id="modal-email"
							placeholder="Enter your email"
							aria-label="Your email address"
						/>
						<Button onClick={handleCloseModal}>Close</Button>
					</Modal>
				)}
			</PageWrapper>
		</>
	);
};

export default HomePage;