/** @format */

import React from "react";
import styled from "styled-components";
import { FaFacebook, FaTwitter, FaLinkedin,FaInstagram } from "react-icons/fa";
import Button from "../../components/ui/Global/everywhere/button";
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

const Label = styled.label`
	text-align: left;
	font-weight: 600;
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
		<ContactContainer role="main">
			<Section aria-labelledby="contact-form-heading">
				<SectionTitle id="contact-form-heading">Contact Us</SectionTitle>
				<ContactForm aria-label="Contact form">
					<Label htmlFor="name">Your Name</Label>
					<Input
						id="name"
						type="text"
						required
						aria-required="true"
						aria-label="Your name"
					/>

					<Label htmlFor="email">Your Email</Label>
					<Input
						id="email"
						type="email"
						required
						aria-required="true"
						aria-label="Your email"
					/>

					<Label htmlFor="phone">Your Phone Number</Label>
					<Input id="phone" type="tel" aria-label="Your phone number" />

					<Label htmlFor="message">Your Message</Label>
					<TextArea
						id="message"
						rows="5"
						required
						aria-required="true"
						aria-label="Your message"
					/>

					<p style={{ fontSize: "0.875rem", color: "gray", textAlign: "left" }}>
						<strong>Note:</strong> This form is not intended for sharing
						sensitive medical information. Please avoid including personal
						health details.
					</p>

					
						<Label htmlFor="consent" style={{ fontSize: "0.875rem" }}>
							<input
								type="checkbox"
								id="consent"
								required
								style={{ marginRight: "0.5rem" }}
							/>
							I consent to being contacted by a team member from
							SeniorHealthcareSolutions.net.
						</Label>

					<Button type="submit" aria-label="Submit contact form">
						Send Message
					</Button>
				</ContactForm>
			</Section>

			<Section aria-labelledby="contact-info-heading">
				<SectionTitle id="contact-info-heading">
					Contact Information
				</SectionTitle>
				<ContactInfo>
					<ContactInfoItem>Phone: (225) 269-9971</ContactInfoItem>
					<ContactInfoItem>
						Email: nicole@louisianavoiceandswallow.com
					</ContactInfoItem>
					<ContactInfoItem>
						Address: 2255 S. Burnside Ave, Gonzales, LA 70737
					</ContactInfoItem>
					<ContactInfoItem>
						Typical response hours: Monday – Friday, 8 AM – 5 PM
					</ContactInfoItem>
					<ContactInfoItem>
						Please use the form above or email us anytime — we’ll get back to
						you as soon as possible.
					</ContactInfoItem>
				</ContactInfo>
			</Section>

			<Section aria-labelledby="map-heading">
				<SectionTitle id="map-heading">Our Location</SectionTitle>
				<MapContainer>
					<iframe
						title="Our office location on map"
						src="https://www.google.com/maps/place/Louisiana+Voice+and+Swallow+Solutions/@30.2144676,-90.923434,773m/data=!3m1!1e3!4m15!1m8!3m7!1s0x8626cbd28e97209f:0xe52ad53e22ee9b64!2sLouisiana+Voice+and+Swallow+Solutions!8m2!3d30.2144676!4d-90.9208591!10e2!16s%2Fg%2F11ndx3jd58!3m5!1s0x8626cbd28e97209f:0xe52ad53e22ee9b64!8m2!3d30.2144676!4d-90.9208591!16s%2Fg%2F11ndx3jd58?entry=ttu&g_ep=EgoyMDI1MDgwNS4wIKXMDSoASAFQAw%3D%3D"
						allowFullScreen=""
						loading="lazy"></iframe>
				</MapContainer>
			</Section>

			<Section aria-labelledby="follow-us-heading">
				<SectionTitle id="follow-us-heading">Follow Us</SectionTitle>
				<SocialMediaLinks>
					<SocialIcon
						href="https://www.facebook.com/nicolewilliamsslp"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Follow us on Facebook">
						<FaFacebook />
					</SocialIcon>
					<SocialIcon
						href="https://www.instagram.com/louisianavoiceandswallow/"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Follow us on Instagram">
						<FaInstagram />
					</SocialIcon>
					{/* <SocialIcon
						href="https://twitter.com"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Follow us on Twitter">
						<FaTwitter />
					</SocialIcon> */}
					<SocialIcon
						href="https://www.linkedin.com/company/louisianavoiceandswallowsolutions/"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Follow us on LinkedIn">
						<FaLinkedin />
					</SocialIcon>
				</SocialMediaLinks>
			</Section>

			<Section aria-labelledby="faq-heading">
				<SectionTitle id="faq-heading">Frequently Asked Questions</SectionTitle>
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
							We respond to messages Monday to Friday, 8 AM to 5 PM.
						</FAQAnswer>
					</FAQItem>
				</FAQList>
			</Section>
		</ContactContainer>
	);
};

export default Contact;
