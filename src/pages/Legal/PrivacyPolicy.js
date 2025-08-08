/** @format */

// PrivacyPolicy.js
// Section 508-compliant legal page for user data practices

import React from "react";
import styled from "styled-components";

const PrivacyContainer = styled.main`
	padding: 2rem;
	max-width: 800px;
	margin: 0 auto;
	font-family: "Open Sans", sans-serif;
	line-height: 1.6;
`;

const Heading = styled.h1`
	color: ${({ theme }) => theme.colors.accent};
	margin-bottom: 1rem;
	font-size: 2rem;
`;

const Paragraph = styled.p`
	color: ${({ theme }) => theme.colors.text};
	margin-bottom: 1rem;
	line-height: 1.6;
`;

const Section = styled.section`
	margin-top: 2rem;
`;
const List = styled.ul`
	margin-left: 1.5rem;
	margin-bottom: 1rem;
`;

const ListItem = styled.li`
	margin-bottom: 0.5rem;
`;

const Subheading = styled.h2`
	color: ${({ theme }) => theme.colors.secondary};
	font-size: 1.5rem;
	margin-bottom: 0.5rem;
`;

const PrivacyPolicy = () => {
	return (
		<PrivacyContainer aria-labelledby="privacy-policy-heading">
			<Heading id="privacy-policy-heading">Privacy Policy</Heading>
			<nav aria-label="Table of contents">
				<ul style={{ listStyle: "none", paddingLeft: 0 }}>
					<li>
						<a href="#section-1-heading">1. Introduction & Scope</a>
					</li>
					<li>
						<a href="#section-2-heading">2. Data We Collect</a>
					</li>
					<li>
						<a href="#section-3-heading">3. How We Collect It</a>
					</li>
					<li>
						<a href="#section-4-heading">4. How We Use It</a>
					</li>
					<li>
						<a href="#section-5-heading">
							5. Legal Grounds (HIPAA, GDPR, CCPA)
						</a>
					</li>
					<li>
						<a href="#section-6-heading">6. Sharing & Disclosure</a>
					</li>
					<li>
						<a href="#section-7-heading">7. Data Storage (Browser + Backend)</a>
					</li>
					<li>
						<a href="#section-8-heading">8. Security Measures</a>
					</li>
					<li>
						<a href="#section-9-heading">9. User Rights & Requests</a>
					</li>
					<li>
						<a href="#section-10-heading">10. Data Retention</a>
					</li>
					<li>
						<a href="#section-11-heading">11. Children’s Privacy</a>
					</li>
					<li>
						<a href="#section-12-heading">12. Cookies & Analytics</a>
					</li>
					<li>
						<a href="#section-13-heading">13. Policy Changes</a>
					</li>
					<li>
						<a href="#section-14-heading">14. Contact & Complaints</a>
					</li>
				</ul>
			</nav>

			<Section aria-labelledby="section-1-heading">
				<Subheading id="section-1-heading">1. Introduction</Subheading>
				<Paragraph>
					This Privacy Policy outlines how SeniorHealthCareSolution.net ("we",
					"our", or "the App") collects, uses, and protects personal information
					you provide while using our platform. By accessing or using this site,
					you consent to this policy and any changes posted on this page.
				</Paragraph>
				<Section aria-labelledby="data-collection">
					<Subheading id="data-collection">1. Data Collection</Subheading>
					<Paragraph>
						We collect both personal and non-personal information:
					</Paragraph>
					<ul>
						<li>
							Information you voluntarily provide: name, email, ZIP code,
							gender, age, etc.
						</li>
						<li>
							Insurance preferences and health-related inputs (e.g.,
							medications, conditions)
						</li>
						<li>
							Technical data: IP address, browser type, device ID, session
							activity
						</li>
					</ul>
				</Section>
			</Section>

			<Section aria-labelledby="data-usage">
				<Subheading id="data-usage">2. Use of Collected Data</Subheading>
				<Paragraph>We use your information to:</Paragraph>
				<ul>
					<li>Match you with insurance plans tailored to your profile</li>
					<li>Display plan comparisons and health cost estimates</li>
					<li>Respond to support inquiries and improve service</li>
					<li>
						Analyze anonymized data for system improvement and compliance audits
					</li>
				</ul>
			</Section>
			<Section aria-labelledby="data-rights">
				<Subheading id="data-rights">3. Your Rights</Subheading>
				<Paragraph>You have the right to:</Paragraph>
				<ul>
					<li>Access and correct your personal data</li>
					<li>Request deletion of your account and associated data</li>
					<li>Revoke consent or opt out of communications</li>
					<li>
						If in the EU: exercise GDPR rights such as portability and
						processing restriction
					</li>
				</ul>
			</Section>
			<Section aria-labelledby="data-security">
				<Subheading id="data-security">4. Data Security</Subheading>
				<Paragraph>
					We use secure technologies (TLS encryption, RBAC, audit logs) to
					protect your information. While we follow best practices, no system is
					completely immune to breaches.
				</Paragraph>
			</Section>
			<Section aria-labelledby="cookies">
				<Subheading id="cookies">5. Cookies and Tracking</Subheading>
				<Paragraph>
					We use cookies for performance monitoring, accessibility checks, and
					usability improvements. You can adjust cookie settings in your
					browser. Disabling cookies may affect functionality.
				</Paragraph>
			</Section>
			<Section aria-labelledby="policy-changes">
				<Subheading id="policy-changes">6. Policy Updates</Subheading>
				<Paragraph>
					This policy may be updated periodically. The latest version will
					always be posted here with an updated "Last Modified" date. Continued
					use of the site after changes means you agree to them.
				</Paragraph>
			</Section>
			<Section aria-labelledby="contact">
				<Subheading id="contact">7. Contact Us</Subheading>
				<Paragraph>
					If you have questions or requests regarding your data, please email us
					at: <a href="mailto:your@email.com">your@email.com</a>
				</Paragraph>
				<Paragraph>
					Mailing address: [Insert your business mailing address]
				</Paragraph>
			</Section>
			<Section aria-labelledby="section-1-heading">
				<Heading id="section-1-heading">1. Introduction & Scope</Heading>

				<Paragraph>
					SeniorHealthCareSolution.net ("we," "our," or "the App") is a
					healthcare technology platform designed to help individuals compare
					insurance plans based on cost, drug coverage, provider networks, and
					personal health preferences.
				</Paragraph>

				<Paragraph>
					This Privacy Policy explains how we collect, use, store, share, and
					protect your information when you:
				</Paragraph>

				<List>
					<ListItem>Use our website or mobile-friendly version</ListItem>
					<ListItem>
						Submit personal or health-related information via forms
					</ListItem>
					<ListItem>Compare insurance plans through our platform</ListItem>
					<ListItem>
						Access or connect external services such as CMS Blue Button or VA
						APIs
					</ListItem>
				</List>

				<Paragraph>
					By using our website or related services, you agree to the terms of
					this Privacy Policy. If you do not agree, please do not use the site
					or submit personal information.
				</Paragraph>

				<Paragraph>This policy applies to all users, including:</Paragraph>

				<List>
					<ListItem>Guests using our comparison tools anonymously</ListItem>
					<ListItem>
						Registered users with saved preferences or dashboards
					</ListItem>
					<ListItem>
						Users connecting third-party APIs (e.g., Medicare, Medicaid, VA,
						Cigna)
					</ListItem>
				</List>

				<Paragraph>
					This Privacy Policy does not apply to the practices of insurance
					providers or government APIs we integrate with. We encourage users to
					review the privacy policies of those entities directly.
				</Paragraph>
			</Section>
			<Section aria-labelledby="section-2-heading">
				<Subheading id="section-2-heading">2. What Data We Collect</Subheading>

				<Paragraph>
					We collect four primary categories of information, depending on how
					you use our services and whether you connect third-party systems.
				</Paragraph>

				<Paragraph>
					<strong>A. Personal Identifiable Information (PII)</strong>
				</Paragraph>
				<Paragraph>
					This includes data that can directly identify you or, when combined
					with other data, reasonably identify you:
				</Paragraph>
				<List>
					<ListItem>Name (if an account is created)</ListItem>
					<ListItem>Email address</ListItem>
					<ListItem>
						ZIP code (used to calculate local insurance plans)
					</ListItem>
					<ListItem>Age or age range</ListItem>
					<ListItem>Gender</ListItem>
					<ListItem>Veteran status</ListItem>
					<ListItem>Phone number (optional)</ListItem>
					<ListItem>
						Browser and device metadata (e.g., IP address, browser version)
					</ListItem>
				</List>

				<Paragraph>
					<strong>B. Health-Related Information (May Qualify as ePHI)</strong>
				</Paragraph>
				<Paragraph>
					Collected either via direct input or authorized APIs (e.g., CMS Blue
					Button):
				</Paragraph>
				<List>
					<ListItem>
						Medical conditions (e.g., diabetes, cancer, mental health)
					</ListItem>
					<ListItem>Current medications (via RxCUI lookup)</ListItem>
					<ListItem>Procedure needs or history</ListItem>
					<ListItem>Medicare or Medicaid eligibility</ListItem>
					<ListItem>
						Plan structure preferences (e.g., HMO, dental/vision)
					</ListItem>
				</List>
				<Paragraph>
					Some of this may qualify as Protected Health Information (PHI) under
					HIPAA. We apply enhanced safeguards accordingly.
				</Paragraph>

				<Paragraph>
					<strong>C. User Preferences and Matching Inputs</strong>
				</Paragraph>
				<List>
					<ListItem>
						Desired coverage types (e.g., dental, vision, telehealth)
					</ListItem>
					<ListItem>
						Preferred cost structures (e.g., premium range, deductible limits)
					</ListItem>
					<ListItem>
						Lifestyle-related programs (e.g., SilverSneakers, fitness)
					</ListItem>
					<ListItem>Plan selection and saved comparison history</ListItem>
				</List>

				<Paragraph>
					<strong>D. Technical and Usage Data</strong>
				</Paragraph>
				<List>
					<ListItem>IP address and generalized geolocation</ListItem>
					<ListItem>Browser/device metadata</ListItem>
					<ListItem>
						Pages visited and user behavior (clicks, features used)
					</ListItem>
					<ListItem>
						Browser-local storage for plan selections or draft inputs
					</ListItem>
					<ListItem>Crash and diagnostic logs</ListItem>
				</List>

				<Paragraph>
					<strong>Sensitive Data Disclaimer</strong>
				</Paragraph>
				<Paragraph>We do not request or retain the following:</Paragraph>
				<List>
					<ListItem>Full Social Security Numbers</ListItem>
					<ListItem>Provider-issued medical records</ListItem>
					<ListItem>Genetic or biometric identifiers</ListItem>
				</List>
				<Paragraph>
					If you enter additional sensitive data into free-text fields, you do
					so voluntarily. Please avoid submitting private details unless
					explicitly requested.
				</Paragraph>
			</Section>

			<Section aria-labelledby="section-3-heading">
				<Subheading id="section-3-heading">
					3. How We Collect Information
				</Subheading>

				<Paragraph>
					We collect information through multiple channels depending on how you
					interact with the platform.
				</Paragraph>

				<Paragraph>
					<strong>A. Information You Provide Directly</strong>
				</Paragraph>
				<List>
					<ListItem>
						Filling out insurance preference or eligibility forms
					</ListItem>
					<ListItem>
						Using our multi-step form to input age, sex, veteran status,
						medications, or health conditions
					</ListItem>
					<ListItem>
						Creating an account or subscribing to a newsletter
					</ListItem>
					<ListItem>Contacting us through email or the contact form</ListItem>
					<ListItem>
						Submitting saved comparisons or preferences in your dashboard (if
						available)
					</ListItem>
				</List>
				<Paragraph>
					Each form clearly indicates whether a field is required or optional.
				</Paragraph>

				<Paragraph>
					<strong>B. Information Collected Automatically</strong>
				</Paragraph>
				<List>
					<ListItem>
						Browser and device details (type, version, language)
					</ListItem>
					<ListItem>IP address and approximate location</ListItem>
					<ListItem>
						Pages visited, time spent, and navigation patterns
					</ListItem>
					<ListItem>
						Cookies, session storage, and localStorage (e.g., saved plan
						selections or in-progress form data)
					</ListItem>
				</List>

				<Paragraph>
					<strong>
						C. Information Collected via APIs and External Services
					</strong>
				</Paragraph>
				<Paragraph>
					With your explicit consent, we collect health and insurance data from
					third-party APIs such as:
				</Paragraph>
				<List>
					<ListItem>
						CMS Blue Button (Medicare claims and health history)
					</ListItem>
					<ListItem>VA Community Care API (veteran benefit data)</ListItem>
					<ListItem>
						Private insurer APIs (e.g., Cigna, UnitedHealthcare, Humana)
					</ListItem>
					<ListItem>
						CMS Marketplace API (plan data, drug coverage, ZIP-based
						eligibility)
					</ListItem>
				</List>
				<Paragraph>
					These connections use secure, authenticated access—usually requiring
					your OAuth2 login or token authorization.
				</Paragraph>

				<Paragraph>
					<strong>D. Information from Cookies and Similar Technologies</strong>
				</Paragraph>
				<Paragraph>
					We use browser cookies, analytics tools, and accessibility scanners to
					monitor performance and improve user experience.
				</Paragraph>
				<List>
					<ListItem>Google Analytics for usage trends</ListItem>
					<ListItem>Axe for accessibility monitoring</ListItem>
				</List>
				<Paragraph>
					All data is anonymized and aggregated. You may disable these tools in
					your browser settings, but some features may not function as intended.
				</Paragraph>
			</Section>
			<Section aria-labelledby="section-4-heading">
				<Subheading id="section-4-heading">4. How We Use It</Subheading>
				{/* Insert content here */}
			</Section>

			<Section aria-labelledby="section-5-heading">
				<Subheading id="section-5-heading">
					5. Legal Grounds (HIPAA, GDPR, CCPA)
				</Subheading>
				{/* Insert content here */}
			</Section>

			<Section aria-labelledby="section-6-heading">
				<Subheading id="section-6-heading">6. Sharing & Disclosure</Subheading>
				{/* Insert content here */}
			</Section>

			<Section aria-labelledby="section-7-heading">
				<Subheading id="section-7-heading">
					7. Data Storage (Browser + Backend)
				</Subheading>
				{/* Insert content here */}
			</Section>

			<Section aria-labelledby="section-8-heading">
				<Subheading id="section-8-heading">8. Security Measures</Subheading>
				{/* Insert content here */}
			</Section>

			<Section aria-labelledby="section-9-heading">
				<Subheading id="section-9-heading">
					9. User Rights & Requests
				</Subheading>
				{/* Insert content here */}
			</Section>

			<Section aria-labelledby="section-10-heading">
				<Subheading id="section-10-heading">10. Data Retention</Subheading>
				{/* Insert content here */}
			</Section>

			<Section aria-labelledby="section-11-heading">
				<Subheading id="section-11-heading">11. Children’s Privacy</Subheading>
				{/* Insert content here */}
			</Section>

			<Section aria-labelledby="section-12-heading">
				<Subheading id="section-12-heading">12. Cookies & Analytics</Subheading>
				{/* Insert content here */}
			</Section>

			<Section aria-labelledby="section-13-heading">
				<Subheading id="section-13-heading">13. Policy Changes</Subheading>
				{/* Insert content here */}
			</Section>

			<Section aria-labelledby="section-14-heading">
				<Subheading id="section-14-heading">
					14. Contact & Complaints
				</Subheading>
				{/* Insert content here */}
			</Section>
		</PrivacyContainer>
	);
};

export default PrivacyPolicy;
