/** @format */

// PrivacyPolicy.js
// Purpose: Legal page to outline how user data is handled.
// Review for Compliance: Depending on your audience and location,
// consider reviewing this content with a legal professional to ensure it
//complies with applicable laws like GDPR or CCPA.
// Additional Tips:
// Link to the Page: Make sure this PrivacyPolicy page is easily accessible
// from your website's footer or any other relevant section.
// User Consent: Consider implementing a cookie consent banner or
//modal to ensure users are aware of your data collection practices.

import React from "react";
import styled from "styled-components";

// Styled components
const PrivacyContainer = styled.div`
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

const PrivacyPolicy = () => {
	return (
		<PrivacyContainer>
			<Heading>
				Privacy Policy- NOTICE - Generic template have a lawyer review it.
			</Heading>
			<Paragraph>
				This Privacy Policy explains how Senior Healthcare Solution collects,
				uses, and protects the personal information you provide while using our
				website. By using this website, you agree to the collection and use of
				information in accordance with this policy.
			</Paragraph>

			<Section>Data Collection</Section>
			<Paragraph>
				We may collect personal information that you voluntarily provide to us,
				including but not limited to your name, email address, phone number, and
				any other information necessary to provide you with insurance comparison
				services. We may also collect non-personal information such as your IP
				address, browser type, and usage data through cookies and similar
				technologies.
			</Paragraph>

			<Section>Usage of Data</Section>
			<Paragraph>
				The information we collect is used to provide you with relevant
				insurance plans, personalize your experience, and improve our services.
				We may use your data to communicate with you, respond to your inquiries,
				and provide updates on our services. We do not sell, rent, or share your
				personal information with third parties except as required by law or
				with your explicit consent.
			</Paragraph>
			<Paragraph>
				We may also use aggregated and anonymized data for research, analysis,
				and improving our service offerings. This data does not identify any
				individual user and is not considered personal information.
			</Paragraph>

			<Section>User Rights</Section>
			<Paragraph>
				As a user, you have the right to access, correct, or delete your
				personal information held by us. You may also opt-out of receiving
				marketing communications from us at any time. To exercise these rights,
				please contact us using the information provided below.
			</Paragraph>
			<Paragraph>
				If you are located in the European Union, you have additional rights
				under the General Data Protection Regulation (GDPR), including the right
				to request the restriction of processing of your personal data and the
				right to data portability.
			</Paragraph>

			<Section>Data Security</Section>
			<Paragraph>
				We implement reasonable security measures to protect your personal
				information from unauthorized access, alteration, disclosure, or
				destruction. However, please be aware that no method of transmission
				over the internet or electronic storage is 100% secure, and we cannot
				guarantee absolute security.
			</Paragraph>

			<Section>Cookies and Tracking Technologies</Section>
			<Paragraph>
				Our website uses cookies and similar tracking technologies to enhance
				your experience. You can choose to accept or decline cookies by
				modifying your browser settings, but this may prevent you from taking
				full advantage of the website.
			</Paragraph>

			<Section>Changes to This Privacy Policy</Section>
			<Paragraph>
				We may update this Privacy Policy from time to time. Any changes will be
				posted on this page with an updated effective date. We encourage you to
				review this policy periodically for any changes. Your continued use of
				the website after any modifications constitutes your acceptance of the
				updated policy.
			</Paragraph>

			<Section>Contact Information</Section>
			<Paragraph>
				If you have any questions or concerns about this Privacy Policy or our
				data practices, please contact us at [Your Contact Email].
			</Paragraph>
		</PrivacyContainer>
	);
};

export default PrivacyPolicy;
