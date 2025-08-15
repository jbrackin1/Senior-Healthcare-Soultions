/** @format */

// src/pages/About.js
import React from "react";
import styled from "styled-components";

// Styled Components (unchanged from your code)
const BackgroundContainer = styled.div`
	background-image: url("/assets/images/MedicalWallpaper.webp");
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	background-size: cover;
	background-position: center;
`;

const AboutContainer = styled.main`
	padding: 2rem;
	background-color: ${({ theme }) => theme.colors.backgroundAlt};
	color: ${({ theme }) => theme.colors.text};
	font-family: "Open Sans", sans-serif;
	line-height: 1.8;
	max-width: 800px;
	margin: 2rem auto;
	border-radius: 8px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
	font-family: "Libre Baskerville", serif;
	font-size: 2rem;
	margin-bottom: 1.5rem;
	color: ${({ theme }) => theme.colors.accent};
	text-align: center;
`;

const Paragraph = styled.p`
	margin-bottom: 1.5rem;
	font-size: 1rem;
`;

const TeamSection = styled.section`
	margin-top: 2rem;
`;

const TeamMember = styled.div`
	margin-bottom: 1.5rem;
	display: flex;
	align-items: center;
`;

const TeamImage = styled.img`
	width: 80px;
	height: 80px;
	border-radius: 50%;
	margin-right: 1rem;
`;

const TeamBio = styled.div`
	font-size: 1rem;
`;

const ValueSection = styled.div`
	margin-top: 2rem;
	padding: 1rem;
	background-color: ${({ theme }) => theme.colors.background};
	border: 1px solid ${({ theme }) => theme.colors.border};
	border-radius: 8px;
	line-height: 1.6;
`;

// New About Component content
const About = () => {
	return (
		<BackgroundContainer>
			<AboutContainer>
				{/* Company Mission */}
				<SectionTitle>Our Mission</SectionTitle>
				<Paragraph>
					At SR Healthcare Solutions, we believe everyone deserves access to
					insurance plans tailored to their unique health needs—without stress,
					confusion, or unwanted solicitations. Our mission is to simplify your
					search for coverage by providing transparent, personalized options
					that empower you to make informed decisions confidently.
				</Paragraph>
				<Paragraph>
					Founded by Nicole Townley Williams, MA, CCC-SLP, SR Healthcare
					Solutions draws from her deep commitment to community well-being and
					professional expertise. Nicole’s passion for helping individuals eat
					safely and communicate effectively extends to her dedication to
					improving insurance access for patients in South Louisiana.
				</Paragraph>

				{/* Team Members */}
				<TeamSection>
					<SectionTitle>Meet Our Founder</SectionTitle>
					<TeamMember>
						<TeamImage
							src="/assets/images/NicoleTownleyWilliams.jpg"
							alt="Nicole Townley Williams, MA, CCC-SLP"
						/>
						<TeamBio>
							<strong>Nicole Townley Williams, MA, CCC-SLP</strong> is a
							Speech-Language Pathologist and veteran with over 15 years of
							experience serving patients in hospitals, rehabilitation centers,
							and home health settings. She founded SR Healthcare Solutions to
							provide the highest quality diagnostics and personalized care
							recommendations, helping people live safer, fuller lives.
						</TeamBio>
					</TeamMember>
				</TeamSection>

				{/* History */}
				<SectionTitle>Our Story</SectionTitle>
				<Paragraph>
					Nicole’s journey began in the military and continued through her
					graduate studies and clinical career. Inspired by the challenges her
					own family faced navigating complex insurance policies, she set out to
					build a platform that puts patient needs and privacy first. Launched
					in 2023, SR Healthcare Solutions combines compassionate service with
					advanced diagnostics and individualized support.
				</Paragraph>

				{/* Values and Credibility */}
				<SectionTitle>Our Values</SectionTitle>
				<ValueSection>
					<Paragraph>
						At SR Healthcare Solutions, we are committed to:
					</Paragraph>
					<ul>
						<li>
							Compassionate Service: We genuinely care about our patients and
							strive to make the insurance process easier and more transparent.
						</li>
						<li>
							Privacy First: Your information belongs to you, and we never sell
							or share it without consent.
						</li>
						<li>
							Transparency: No hidden fees or confusing jargon. We provide
							clear, honest comparisons tailored to your unique conditions.
						</li>
						<li>
							Integrity: We partner only with trusted insurers and providers who
							share our dedication to ethical patient care.
						</li>
					</ul>
				</ValueSection>

				{/* Credibility */}
				<SectionTitle>Our Partners</SectionTitle>
				<Paragraph>
					We proudly collaborate with leading healthcare organizations and
					insurers to bring you reliable, up-to-date plan options. Our
					partnerships ensure you receive expert guidance and access to
					comprehensive coverage suited to your needs.
				</Paragraph>
				{/* TODO: Add partner logos here */}
			</AboutContainer>
		</BackgroundContainer>
	);
};

export default About;
