/** @format */

// Contact.js

// src/pages/Contact.js
import React from "react";
import styled from "styled-components";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import button from "../../components/ui/Global/everywhere/button";
import Input from "../../components/ui/Global/forms/Input";
import TextArea from "../../components/ui/Global/forms/TextArea";

const ContactContainer = styled.main`
	padding: 2rem;
	background-color: ${({ theme }) => theme.colors.backgroundAlt};
	color: ${({ theme }) => theme.colors.text};
	font-family: "Open Sans", sans-serif;
	line-height: 1.6;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Section = styled.section`
	margin-bottom: 3rem;
	max-width: 600px;
	width: 100%;
	text-align: center;
`;

const SectionTitle = styled.h2`
	font-family: "Libre Baskerville", serif;
	font-size: 2rem;
	margin-bottom: 1rem;
	color: ${({ theme }) => theme.colors.accent};
`;

const ContactForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	max-width: 600px;
	margin: 0 auto;
`;

const SocialMediaLinks = styled.div`
	display: flex;
	justify-content: center;
	gap: 1rem;
	margin-top: 1rem;
`;

const SocialIcon = styled.a`
	color: ${({ theme }) => theme.colors.accent};
	font-size: 1.5rem;

	&:hover {
		color: ${({ theme }) => theme.colors.hoverBackground};
	}
`;

const FAQList = styled.ul`
	list-style-type: none;
	padding: 0;
`;

const FAQItem = styled.li`
	margin-bottom: 1rem;
	padding: 1rem;
	border: 1px solid ${({ theme }) => theme.colors.border};
	border-radius: 5px;
	background-color: ${({ theme }) => theme.colors.background};
`;

const FAQQuestion = styled.h3`
	font-size: 1.3rem;
	margin-bottom: 0.5rem;
`;

const FAQAnswer = styled.p`
	font-size: 1rem;
`;

const ContactInfo = styled.div`
	margin-top: 2rem;
	text-align: center;
`;

const ContactInfoItem = styled.p`
	font-size: 1rem;
	margin-bottom: 0.5rem;
`;

const MapContainer = styled.div`
	margin-top: 2rem;
	text-align: center;
	iframe {
		width: 100%;
		max-width: 600px;
		height: 300px;
		border: 0;
	}
`;

const Contact = () => {
	return (
		<ContactContainer>
			<Section>
				<SectionTitle>Contact Us</SectionTitle>
				<ContactForm>
					<Input type="text" placeholder="Your Name" required />
					<Input type="email" placeholder="Your Email" required />
					<Input type="tel" placeholder="Your Phone Number" />
					<TextArea rows="5" placeholder="Your Message" required />
					<button type="submit">Send Message</button>
				</ContactForm>
			</Section>

			<Section>
				<SectionTitle>Contact Information</SectionTitle>
				<ContactInfo>
					<ContactInfoItem>Phone: 1-800-INSUREME</ContactInfoItem>
					<ContactInfoItem>Email: support@insuranceco.com</ContactInfoItem>
					<ContactInfoItem>
						Address: 123 Main Street, Suite 400, City, State ZIP
					</ContactInfoItem>
					<ContactInfoItem>Office Hours: Mon-Fri, 9 AM - 5 PM</ContactInfoItem>
				</ContactInfo>
			</Section>

			<Section>
				<SectionTitle>Our Location</SectionTitle>
				<MapContainer>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093744!2d144.9537353153214!3d-37.81621897975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5772a8c8dd9e8e!2sInsurance%20Co.!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
						allowFullScreen=""
						loading="lazy"></iframe>
				</MapContainer>
			</Section>

			<Section>
				<SectionTitle>Follow Us</SectionTitle>
				<SocialMediaLinks>
					<SocialIcon
						href="https://facebook.com"
						target="fill_in_the_blank"
						rel="noopener noreferrer">
						<FaFacebook />
					</SocialIcon>
					<SocialIcon
						href="https://twitter.com"
						target="_blank"
						rel="noopener noreferrer">
						<FaTwitter />
					</SocialIcon>
					<SocialIcon
						href="https://linkedin.com"
						target="_blank"
						rel="noopener noreferrer">
						<FaLinkedin />
					</SocialIcon>
				</SocialMediaLinks>
			</Section>

			<Section>
				<SectionTitle>Frequently Asked Questions</SectionTitle>
				<FAQList>
					<FAQItem>
						<FAQQuestion>How can I contact customer support?</FAQQuestion>
						<FAQAnswer>
							You can contact our support team via phone, email, or through the
							contact form on this page.
						</FAQAnswer>
					</FAQItem>
					<FAQItem>
						<FAQQuestion>What are your office hours?</FAQQuestion>
						<FAQAnswer>
							Our office hours are Monday to Friday, 9 AM to 5 PM.
						</FAQAnswer>
					</FAQItem>
					{/* Additional FAQs can be added here */}
				</FAQList>
			</Section>
		</ContactContainer>
	);
};

export default Contact;

// Purpose: Allows users to reach out for more information, support, or inquiries.
// Content:
// Contact Form: Fields for name, email, phone number, and a message.
// Contact Information: Phone number, email address, physical address and office hours.
// Map Integration: If there's a physical location, include a map.
// Social Media Links: Icons linking to your social media pages.
// FAQ Section: Short list of FAQs to help with common inquiries.
