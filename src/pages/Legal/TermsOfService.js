/** @format */

// TermsOfService.js
// Purpose: Legal page to outline the terms and conditions for using the website.

import React from "react";
import styled from "styled-components";

const TermsContainer = styled.div`
	padding: 2rem;
	max-width: 800px;
	margin: 0 auto;
	font-family: "Open Sans", sans-serif;
	line-height: 1.6;
`;

const Heading = styled.h1`
	color: ${({ theme }) => theme.colors.accent};
	margin-bottom: 1rem;
`;

const Section = styled.h2`
	color: ${({ theme }) => theme.colors.secondary};
	margin-top: 1.5rem;
`;

const Paragraph = styled.p`
	color: ${({ theme }) => theme.colors.text};
`;

const TermsOfService = () => {

	return (
		<TermsContainer>
			<Heading>
				Terms and Conditions - NOTICE - Generic template have a lawyer verify
				if it is good or not
			</Heading>
			<Paragraph>
				Welcome to [Your Website Name]. By accessing or using our website, you
				agree to comply with and be bound by the following terms and conditions
				of use. If you disagree with any part of these terms, please do not use
				our website.
			</Paragraph>
			<Section>User Responsibilities</Section>
			<Paragraph>
				You are responsible for your use of the website and for any consequences
				arising from such use. You agree to use the website in compliance with
				all applicable laws and regulations. You must not use the website to
				post or transmit any material that is defamatory, offensive, or
				otherwise objectionable.
			</Paragraph>
			<Section>Limitation of Liability</Section>
			<Paragraph>
				The information provided on this website is for general informational
				purposes only and does not constitute professional advice. [Your Website
				Name] makes no representations or warranties of any kind, express or
				implied, about the completeness, accuracy, reliability, suitability, or
				availability with respect to the website or the information, products,
				services, or related graphics contained on the website for any purpose.
				Any reliance you place on such information is therefore strictly at your
				own risk.
			</Paragraph>
			<Paragraph>
				In no event will [Your Website Name], its directors, employees, or
				agents be liable for any loss or damage including without limitation,
				indirect or consequential loss or damage, or any loss or damage
				whatsoever arising from loss of data or profits arising out of, or in
				connection with, the use of this website.
			</Paragraph>
			<Section>Modifications and Updates</Section>
			<Paragraph>
				[Your Website Name] reserves the right to modify or update these terms
				and conditions at any time without prior notice. Your continued use of
				the website following any changes signifies your acceptance of the new
				terms. It is your responsibility to review these terms periodically for
				any updates or changes.
			</Paragraph>
			<Section>Governing Law</Section>
			<Paragraph>
				These terms and conditions are governed by and construed in accordance
				with the laws of [Your Country/State]. Any disputes arising out of or in
				connection with these terms and conditions will be subject to the
				exclusive jurisdiction of the courts of [Your Country/State].
			</Paragraph>
			<Section>Contact Us</Section>
			<Paragraph>
				If you have any questions or concerns about these terms and conditions,
				please contact us at [Your Contact Email].
			</Paragraph>
		</TermsContainer>
	);
};

export default TermsOfService;
