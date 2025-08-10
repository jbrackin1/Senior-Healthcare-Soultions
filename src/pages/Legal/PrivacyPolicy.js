/** @format */

// PrivacyPolicy.js
// Section 508-compliant legal page for user data practices

import React from "react";
import styled from "styled-components";


const Section = styled.section`
	color: ${({ theme }) => theme.colors.secondary};
	margin-top: 1.5rem;
	/* ensure visible keyboard focus when navigated via anchor */
	&:focus {
		outline: 3px solid ${({ theme }) => theme.colors.accent};
		outline-offset: 2px;
	}
`;

const Subheading = styled.h2`
	color: ${({ theme }) => theme.colors.secondary};
	font-size: 1.5rem;
	margin-bottom: 0.5rem;
`;

/* ---------- Shared/Matching Styles (same look as your Terms ToC) ---------- */
const SkipLink = styled.a`
	position: absolute;
	left: -999px;
	top: -999px;
	background: #fff;
	color: #000;
	padding: 0.5rem 1rem;
	border: 2px solid #000;
	z-index: 1000;
	&:focus {
		left: 0.5rem;
		top: 0.5rem;
		outline: none;
	}
`;

const PrivacyContainer = styled.main`
	padding: 2rem;
	max-width: 800px;
	margin: 0 auto;
	font-family: "Open Sans", sans-serif;
	line-height: 1.6;
`;

const Heading = styled.h1`
	color: ${({ theme }) => theme.colors.accent};
	margin-bottom: 0.25rem;
`;

const LastUpdated = styled.p`
	margin: 0 0 1rem 0;
	font-size: 0.95rem;
	color: ${({ theme }) => theme.colors.muted || theme.colors.text};
`;

const SectionHeading = styled.h2`
	color: ${({ theme }) => theme.colors.secondary};
	margin-top: 1.5rem;
	/* ensure visible keyboard focus when navigated via anchor */
	&:focus {
		outline: 3px solid ${({ theme }) => theme.colors.accent};
		outline-offset: 2px;
	}
`;

const Paragraph = styled.p`
	color: ${({ theme }) => theme.colors.text};
	margin: 0.5rem 0 1rem;
`;

const TocNav = styled.nav`
	border: 1px solid ${({ theme }) => theme.colors.border || "#ccc"};
	border-radius: 8px;
	padding: 1rem;
	background: ${({ theme }) => theme.colors.backgroundAlt || "#f8f8f8"};
	margin: 1rem 0 2rem 0;
`;

const TocTitle = styled.h2`
	margin: 0 0 0.5rem 0;
	font-size: 1.25rem;
`;

const TocList = styled.ol`
	margin: 0;
	padding-left: 1.25rem;
`;

const TocLink = styled.a`
	color: ${({ theme }) => theme.colors.link || "#0645ad"};
	text-decoration: underline;
	&:focus-visible {
		outline: 3px solid ${({ theme }) => theme.colors.accent};
		outline-offset: 2px;
	}
`;

const BackToTop = styled.a`
	display: inline-block;
	margin-top: 0.5rem;
	text-decoration: underline;
	color: ${({ theme }) => theme.colors.link || "#0645ad"};
	&:focus-visible {
		outline: 3px solid ${({ theme }) => theme.colors.accent};
		outline-offset: 2px;
	}
`;

const List = styled.ul`
	margin: 0.25rem 0 1rem;
	padding-left: 1.25rem;
`;

const ListItem = styled.li`
	color: ${({ theme }) => theme.colors.text};
`;

/* ---------- Extras you used on Privacy (keep + match styling) ---------- */
const TableWrapper = styled.div`
	margin: 1rem 0;
	overflow-x: auto; /* a11y: prevent horizontal scroll traps on small screens */
`;

const VisuallyHidden = styled.span`
	position: absolute !important;
	height: 1px;
	width: 1px;
	overflow: hidden;
	clip: rect(1px, 1px, 1px, 1px);
	white-space: nowrap; /* added to prevent the element from taking up space */
`;

const contactEmail = "privacy@seniorhealthcaresolution.net";

/* small helper so anchor targets receive focus for keyboard users */
const anchorFocusProps = { tabIndex: -1 };


const PrivacyPolicy = () => {
	return (
		<>
			<SkipLink href="#privacy-main">Skip to main content</SkipLink>

			<PrivacyContainer
				id="privacy-main"
				role="main"
				aria-label="Privacy Policy">
				<Heading>Privacy Policy</Heading>
				<LastUpdated>Last updated: August 10, 2025</LastUpdated>

				<TocNav
					aria-label="Table of contents"
					aria-labelledby="toc-title"
					role="doc-toc"
					id="toc">
					<TocTitle>On this page</TocTitle>
					<TocList>
						<li>
							<TocLink href="#intro-scope">Introduction & Scope</TocLink>
						</li>
						<li>
							<TocLink href="#what-we-collect">What Data We Collect</TocLink>
						</li>
						<li>
							<TocLink href="#how-we-collect">How We Collect It</TocLink>
						</li>
						<li>
							<TocLink href="#how-we-use">How We Use Your Data</TocLink>
						</li>
						<li>
							<TocLink href="#sharing">Sharing & Disclosures</TocLink>
						</li>
						<li>
							<TocLink href="#security">Data Security</TocLink>
						</li>
						<li>
							<TocLink href="#retention">Data Retention</TocLink>
						</li>
						<li>
							<TocLink href="#rights">Your Rights</TocLink>
						</li>
						<li>
							<TocLink href="#children">Children’s Privacy</TocLink>
						</li>
						<li>
							<TocLink href="#cookies">Cookies & Tracking</TocLink>
						</li>
						<li>
							<TocLink href="#dnt">Do Not Track / Opt-Out</TocLink>
						</li>
						<li>
							<TocLink href="#intl">International Transfers</TocLink>
						</li>
						<li>
							<TocLink href="#contact">Contact</TocLink>
						</li>
					</TocList>
				</TocNav>

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
						providers or government APIs we integrate with. We encourage users
						to review the privacy policies of those entities directly.
					</Paragraph>
				</Section>
				<BackToTop href="#toc" aria-label="Back to top of index">
					Back to top
				</BackToTop>

				<Section id="what-we-collect" aria-labelledby="section-2-heading">
					<Subheading id="section-2-heading">
						2. What Data We Collect
					</Subheading>

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
				<BackToTop href="#toc" aria-label="Back to top of index">
					Back to top
				</BackToTop>
				<BackToTop href="#toc" aria-label="Back to top of index">
					Back to top
				</BackToTop>

				<Section id="intro-scope" aria-labelledby="section-3-heading">
					<Subheading id="section-3-heading">
						3. How We Collect Information
					</Subheading>

					<Paragraph>
						We collect information through multiple channels depending on how
						you interact with the platform.
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
						With your explicit consent, we collect health and insurance data
						from third-party APIs such as:
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
						<strong>
							D. Information from Cookies and Similar Technologies
						</strong>
					</Paragraph>
					<Paragraph>
						We use browser cookies, analytics tools, and accessibility scanners
						to monitor performance and improve user experience.
					</Paragraph>
					<List>
						<ListItem>Google Analytics for usage trends</ListItem>
						<ListItem>Axe for accessibility monitoring</ListItem>
					</List>
					<Paragraph>
						All data is anonymized and aggregated. You may disable these tools
						in your browser settings, but some features may not function as
						intended.
					</Paragraph>
				</Section>
				<BackToTop href="#toc" aria-label="Back to top of index">
					Back to top
				</BackToTop>

				<Section id="intro-scope" aria-labelledby="section-4-heading">
					<Subheading id="section-4-heading">
						4. How We Use Your Information
					</Subheading>

					<Paragraph>
						The information we collect is used to support your insurance journey
						and ensure our platform is secure, personalized, and legally
						compliant.
					</Paragraph>

					<Paragraph>
						<strong>A. To Provide Insurance Comparison Services</strong>
					</Paragraph>
					<List>
						<ListItem>
							Generate plan matches based on inputs like age, ZIP code, health
							conditions, and medications.
						</ListItem>
						<ListItem>
							Display drug coverage using RxCUI-based matching and insurer APIs.
						</ListItem>
						<ListItem>
							Let users compare premiums, deductibles, and covered benefits
							across multiple plans.
						</ListItem>
					</List>

					<Paragraph>
						<strong>B. To Personalize Your Experience</strong>
					</Paragraph>
					<List>
						<ListItem>
							Pre-fill forms with previous selections (via localStorage or
							account memory).
						</ListItem>
						<ListItem>
							Save your plan filters, selections, or comparison history if you
							create an account.
						</ListItem>
						<ListItem>
							Offer tailored plan suggestions (e.g., dental, wellness, Medicare
							Advantage) based on your preferences.
						</ListItem>
					</List>

					<Paragraph>
						<strong>
							C. To Support Secure API Access and Data Integrations
						</strong>
					</Paragraph>
					<List>
						<ListItem>
							Use OAuth2 or token-based access to securely connect to APIs (CMS,
							VA, Cigna, etc.).
						</ListItem>
						<ListItem>
							Fetch approved data like prior claims, conditions, or procedures
							for better plan matching.
						</ListItem>
					</List>

					<Paragraph>
						<strong>D. To Communicate With You</strong>
					</Paragraph>
					<List>
						<ListItem>
							Reply to messages sent through our contact form or support email.
						</ListItem>
						<ListItem>
							Send plan updates, comparison reminders, or dashboard
							notifications (only if opted in).
						</ListItem>
						<ListItem>
							Deliver onboarding tips, educational content, and service
							announcements.
						</ListItem>
					</List>
					<Paragraph>
						We never send marketing messages or share your data with advertisers
						unless you explicitly opt in.
					</Paragraph>

					<Paragraph>
						<strong>E. To Maintain Legal and Regulatory Compliance</strong>
					</Paragraph>
					<List>
						<ListItem>
							Comply with HIPAA, GDPR, CCPA, and other applicable laws.
						</ListItem>
						<ListItem>
							Respond to lawful requests from government or regulatory agencies.
						</ListItem>
						<ListItem>
							Log access and edits to sensitive data as required by audit
							standards.
						</ListItem>
					</List>

					<Paragraph>
						<strong>F. To Improve and Secure Our Services</strong>
					</Paragraph>
					<List>
						<ListItem>
							Analyze anonymous usage data to improve performance and
							accessibility.
						</ListItem>
						<ListItem>
							Test new platform features and refine the user experience.
						</ListItem>
						<ListItem>
							Prevent fraud, diagnose technical issues, and block unauthorized
							access.
						</ListItem>
					</List>
				</Section>
				<BackToTop href="#toc" aria-label="Back to top of index">
					Back to top
				</BackToTop>

				<Section id="intro-scope" aria-labelledby="section-5-heading">
					<Subheading id="section-5-heading">
						5. Legal Grounds and Consent
					</Subheading>

					<Paragraph>
						We process your information based on user consent, contractual
						necessity, and legitimate interests, as permitted by applicable law.
						Your location and method of use (e.g., guest, signed-in,
						API-connected) may affect the legal basis.
					</Paragraph>

					<Paragraph>
						<strong>A. Consent</strong>
					</Paragraph>
					<Paragraph>We rely on your informed consent when you:</Paragraph>
					<List>
						<ListItem>
							Submit personal or health-related data into forms
						</ListItem>
						<ListItem>
							Use the platform to search or compare insurance plans
						</ListItem>
						<ListItem>
							Authorize API access (e.g., CMS Blue Button, VA, Cigna)
						</ListItem>
						<ListItem>Opt in to receive updates or communication</ListItem>
					</List>
					<Paragraph>
						Explicit actions such as clicking “Continue” or “I Agree” are
						treated as your consent for the stated purposes.
					</Paragraph>
					<Paragraph>
						You may withdraw your consent at any time by contacting us or
						discontinuing use of the platform.
					</Paragraph>

					<Paragraph>
						<strong>B. Legitimate Interest</strong>
					</Paragraph>
					<Paragraph>
						In some cases, we process data to support legitimate business
						functions, as long as they do not override your privacy rights:
					</Paragraph>
					<List>
						<ListItem>
							Storing plan selections in your browser to improve usability
						</ListItem>
						<ListItem>
							Collecting anonymized analytics to enhance performance
						</ListItem>
						<ListItem>
							Monitoring site activity to prevent abuse or misuse
						</ListItem>
					</List>

					<Paragraph>
						<strong>C. Contractual Necessity</strong>
					</Paragraph>
					<Paragraph>
						If you create an account or request insurance comparisons, we
						process your data as necessary to fulfill your request for those
						services.
					</Paragraph>

					<Paragraph>
						<strong>D. HIPAA Status</strong>
					</Paragraph>
					<Paragraph>
						We are not a covered entity under HIPAA. However, we apply
						HIPAA-aligned safeguards for health-related data:
					</Paragraph>
					<List>
						<ListItem>Role-based access controls</ListItem>
						<ListItem>TLS encryption for all data in transit</ListItem>
						<ListItem>
							Data minimization and no raw medical record storage
						</ListItem>
						<ListItem>Secure, token-based API access</ListItem>
					</List>
					<Paragraph>
						We process only structured data needed for plan recommendations,
						such as conditions or medications—not full medical records.
					</Paragraph>

					<Paragraph>
						<strong>E. GDPR and International Users</strong>
					</Paragraph>
					<Paragraph>
						For users in the European Union or countries with similar laws, we
						process data under the following bases:
					</Paragraph>
					<List>
						<ListItem>Consent (e.g., plan personalization)</ListItem>
						<ListItem>Legitimate interest (e.g., system improvement)</ListItem>
						<ListItem>Compliance (e.g., honoring data subject rights)</ListItem>
					</List>
					<Paragraph>
						You may object to any processing based on our legitimate interests.
					</Paragraph>

					<Paragraph>
						<strong>F. CCPA (California Residents)</strong>
					</Paragraph>
					<Paragraph>
						If you reside in California, you are entitled to the following
						rights:
					</Paragraph>
					<List>
						<ListItem>Know what personal data we collect</ListItem>
						<ListItem>Request deletion of your personal data</ListItem>
						<ListItem>
							Opt out of the sale of your data (note: we do not sell personal
							data)
						</ListItem>
					</List>
					<Paragraph>
						To exercise your rights, refer to the contact information in Section
						14.
					</Paragraph>
				</Section>
				<BackToTop href="#toc" aria-label="Back to top of index">
					Back to top
				</BackToTop>

				<Section id="intro-scope" aria-labelledby="section-6-heading">
					<Subheading id="section-6-heading">
						6. Data Sharing and Disclosure
					</Subheading>

					<Paragraph>
						We do not sell, rent, or trade your personal or health-related
						information. Data is only shared under limited, clearly defined
						circumstances.
					</Paragraph>

					<Paragraph>
						<strong>A. With Your Explicit Authorization</strong>
					</Paragraph>
					<Paragraph>
						We only share identifiable or health-related data with third parties
						when you clearly authorize us to do so, such as when:
					</Paragraph>
					<List>
						<ListItem>
							Connecting your CMS Blue Button, VA API, or insurer account
						</ListItem>
						<ListItem>
							Submitting forms to retrieve plan comparisons or drug data
						</ListItem>
						<ListItem>
							Saving/exporting results or search history (if logged in)
						</ListItem>
					</List>
					<Paragraph>In these cases, data may be shared with:</Paragraph>
					<List>
						<ListItem>
							Government insurance marketplaces (e.g., Healthcare.gov)
						</ListItem>
						<ListItem>Private insurance provider APIs</ListItem>
						<ListItem>
							Federal and state agencies (e.g., Medicare, Medicaid, VA)
						</ListItem>
					</List>
					<Paragraph>
						Data is always scoped to what is necessary for the action being
						performed.
					</Paragraph>

					<Paragraph>
						<strong>B. With Service Providers and Data Processors</strong>
					</Paragraph>
					<Paragraph>
						We use vetted third-party vendors to help run and secure our
						platform. These may include:
					</Paragraph>
					<List>
						<ListItem>Cloud providers (e.g., AWS, Azure)</ListItem>
						<ListItem>Analytics tools (e.g., Google Analytics, Axe)</ListItem>
						<ListItem>Email and notification systems</ListItem>
						<ListItem>
							Database, hosting, or error monitoring infrastructure
						</ListItem>
						<ListItem>Developers or IT contractors under NDA</ListItem>
					</List>
					<Paragraph>
						Vendors are contractually required to protect your data and may only
						use it to perform tasks on our behalf. We pseudonymize or anonymize
						data where appropriate.
					</Paragraph>

					<Paragraph>
						<strong>C. For Legal or Regulatory Reasons</strong>
					</Paragraph>
					<Paragraph>
						We may disclose your data if required to do so by law, including:
					</Paragraph>
					<List>
						<ListItem>
							Subpoenas, court orders, or lawful government investigations
						</ListItem>
						<ListItem>
							Requests from CMS, HHS, or healthcare regulators
						</ListItem>
						<ListItem>
							Fraud, abuse, national security, or law enforcement matters
						</ListItem>
					</List>
					<Paragraph>
						Where legally allowed, we will notify you if your data is disclosed
						in this way.
					</Paragraph>

					<Paragraph>
						<strong>D. Business Transfers or Ownership Changes</strong>
					</Paragraph>
					<Paragraph>
						If we undergo a business transaction such as a merger, acquisition,
						or asset sale, your data may be transferred to the new owner. We
						will ensure:
					</Paragraph>
					<List>
						<ListItem>The new entity honors this Privacy Policy, or</ListItem>
						<ListItem>
							You are notified about the policy change in advance
						</ListItem>
					</List>
				</Section>
				<BackToTop href="#toc" aria-label="Back to top of index">
					Back to top
				</BackToTop>

				<Section id="intro-scope" aria-labelledby="section-7-heading">
					<Subheading id="section-7-heading">
						7. Data Storage and Retention
					</Subheading>

					<Paragraph>
						We use client-side (browser) and server-side storage to deliver
						services and maintain functionality. We follow data minimization and
						store only what is necessary to provide the service or meet legal
						obligations.
					</Paragraph>

					<Paragraph>
						<strong>A. Client‑Side (Browser) Storage</strong>
					</Paragraph>
					<List>
						<ListItem>
							Technologies: <code>localStorage</code>,{" "}
							<code>sessionStorage</code>, and cookies (e.g., preferences,
							analytics opt‑in).
						</ListItem>
						<ListItem>
							May store: form responses (selected plans, entered medications),
							temporary comparison flags, and non‑identifiable performance data.
						</ListItem>
						<ListItem>
							Security: browser storage is not automatically encrypted and
							remains on your device.
						</ListItem>
						<ListItem>
							Control: you can clear this data at any time in your browser
							settings. If you share a device, consider clearing data after use.
						</ListItem>
					</List>

					<Paragraph>
						<strong>
							B. Server‑Side Storage (If Account Features Are Used)
						</strong>
					</Paragraph>
					<List>
						<ListItem>
							Account data (e.g., name, email, saved selections) is stored
							securely on our servers.
						</ListItem>
						<ListItem>
							Credentials are hashed/salted and never stored in plain text.
						</ListItem>
						<ListItem>
							Sensitive fields may be encrypted at rest using industry‑standard
							techniques.
						</ListItem>
						<ListItem>
							Role‑based access controls and audit logging restrict and track
							access or modifications.
						</ListItem>
					</List>

					<Paragraph>
						<strong>C. Data Retention Periods</strong>
					</Paragraph>
					<table
						role="table"
						aria-describedby="retention-notes"
						style={{ width: "100%", borderCollapse: "collapse" }}>
						<caption className="sr-only">
							Data retention policies by data type
						</caption>
						<thead>
							<tr>
								<th
									scope="col"
									style={{
										textAlign: "left",
										borderBottom: "1px solid #ccc",
										padding: "0.5rem",
									}}>
									Data Type
								</th>
								<th
									scope="col"
									style={{
										textAlign: "left",
										borderBottom: "1px solid #ccc",
										padding: "0.5rem",
									}}>
									Retention Policy
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td style={{ verticalAlign: "top", padding: "0.5rem" }}>
									Temporary browser data
								</td>
								<td style={{ verticalAlign: "top", padding: "0.5rem" }}>
									Until manually cleared or browser storage expires
								</td>
							</tr>
							<tr>
								<td style={{ verticalAlign: "top", padding: "0.5rem" }}>
									Plan comparison history (guest)
								</td>
								<td style={{ verticalAlign: "top", padding: "0.5rem" }}>
									Not stored on server; browser only
								</td>
							</tr>
							<tr>
								<td style={{ verticalAlign: "top", padding: "0.5rem" }}>
									User account data (signed in)
								</td>
								<td style={{ verticalAlign: "top", padding: "0.5rem" }}>
									Retained until the user deletes the account or requests
									removal
								</td>
							</tr>
							<tr>
								<td style={{ verticalAlign: "top", padding: "0.5rem" }}>
									API tokens (OAuth connections)
								</td>
								<td style={{ verticalAlign: "top", padding: "0.5rem" }}>
									Stored temporarily; cleared after session or upon manual
									revocation
								</td>
							</tr>
							<tr>
								<td style={{ verticalAlign: "top", padding: "0.5rem" }}>
									Aggregated analytics or logs
								</td>
								<td style={{ verticalAlign: "top", padding: "0.5rem" }}>
									Retained in anonymized form for performance and compliance
								</td>
							</tr>
						</tbody>
					</table>
					<Paragraph id="retention-notes">
						Retention periods may be adjusted to comply with legal, regulatory,
						or security requirements.
					</Paragraph>

					<Paragraph>
						<strong>D. Data Deletion Requests</strong>
					</Paragraph>
					<Paragraph>
						You may request deletion of data associated with your account or
						identity by contacting us at [Insert Contact Email]. We will process
						verified requests within 14 days unless restricted by applicable
						law.
					</Paragraph>
				</Section>
				<BackToTop href="#toc" aria-label="Back to top of index">
					Back to top
				</BackToTop>

				<Section id="intro-scope" aria-labelledby="section-8-heading">
					<Subheading id="section-8-heading">8. Security Measures</Subheading>

					<Paragraph>
						We implement administrative, technical, and physical safeguards to
						protect the personal and health-related information you provide.
						While no system can guarantee absolute security, we follow industry
						best practices to reduce risk.
					</Paragraph>

					<List>
						<ListItem>
							<strong>A. Encryption</strong>
							<List>
								<ListItem>
									In Transit: All data transmitted between your browser and our
									servers is encrypted using Transport Layer Security (TLS).
								</ListItem>
								<ListItem>
									At Rest: Sensitive data stored on our servers is encrypted
									using industry-standard encryption methods (e.g., AES-256)
									where applicable.
								</ListItem>
								<ListItem>
									API Connections: Third-party API integrations use secure
									OAuth2 or tokenized connections.
								</ListItem>
							</List>
						</ListItem>

						<ListItem>
							<strong>B. Access Controls</strong>
							<List>
								<ListItem>
									Role-based access control (RBAC) limits data visibility to
									authorized personnel only.
								</ListItem>
								<ListItem>
									Administrative access is protected by strong authentication,
									including multi-factor authentication (MFA) where applicable.
								</ListItem>
								<ListItem>
									Access logs are maintained to track administrative actions and
									monitor for unauthorized activity.
								</ListItem>
							</List>
						</ListItem>

						<ListItem>
							<strong>C. Data Minimization</strong>
							<List>
								<ListItem>
									We only collect and store the information needed to provide
									services, avoiding retention beyond necessary use periods.
								</ListItem>
							</List>
						</ListItem>

						<ListItem>
							<strong>D. Monitoring and Auditing</strong>
							<List>
								<ListItem>
									Activity logs are reviewed periodically for signs of
									unauthorized access or anomalies.
								</ListItem>
								<ListItem>
									Intrusion detection tools may be used to identify and respond
									to threats.
								</ListItem>
							</List>
						</ListItem>

						<ListItem>
							<strong>E. Vendor Security</strong>
							<List>
								<ListItem>
									Third-party service providers must maintain reasonable
									security measures consistent with industry standards.
								</ListItem>
								<ListItem>
									Where applicable, Business Associate Agreements (BAAs) are
									used to meet HIPAA requirements.
								</ListItem>
							</List>
						</ListItem>

						<ListItem>
							<strong>F. User Responsibility</strong>
							<List>
								<ListItem>
									Use strong, unique passwords if you create an account.
								</ListItem>
								<ListItem>
									Protect your device from unauthorized access.
								</ListItem>
								<ListItem>
									Clear browser storage after using shared or public devices.
								</ListItem>
							</List>
						</ListItem>

						<ListItem>
							<strong>G. Disclaimer</strong>
							<List>
								<ListItem>
									No method of electronic storage or transmission is 100%
									secure. We encourage avoiding unnecessary sensitive medical
									details in free-text fields.
								</ListItem>
							</List>
						</ListItem>
					</List>
				</Section>
				<BackToTop href="#toc" aria-label="Back to top of index">
					Back to top
				</BackToTop>

				<Section id="intro-scope" aria-labelledby="user-rights-heading">
					<Subheading id="#section-9-heading">
						9. User Rights & Requests
					</Subheading>
					<Paragraph>
						You have certain rights regarding the collection, use, and storage
						of your personal information. These rights may vary depending on
						your location and applicable laws.
					</Paragraph>

					<Subheading as="h3">A. Access and Correction</Subheading>
					<List>
						<ListItem>
							Request a copy of the personal information we hold about you
						</ListItem>
						<ListItem>
							Request corrections to inaccurate or incomplete information
						</ListItem>
					</List>
					<Paragraph>
						To exercise these rights, contact us at{" "}
						<a href="mailto:[Insert Contact Email]">[Insert Contact Email]</a>.
						We will respond within the timeframes required by law.
					</Paragraph>

					<Subheading as="h3">B. Deletion</Subheading>
					<Paragraph>
						You may request that we delete your personal data from our systems.
						We will comply unless retention is required by law, regulatory
						obligations, or for legitimate business purposes (e.g., dispute
						resolution, fraud prevention).
					</Paragraph>

					<Subheading as="h3">C. Withdrawal of Consent</Subheading>
					<Paragraph>
						If you have previously consented to data processing, you may
						withdraw your consent at any time. This may limit our ability to
						provide certain services.
					</Paragraph>

					<Subheading as="h3">D. Portability</Subheading>
					<Paragraph>
						If applicable under GDPR or similar laws, you may request a copy of
						your personal data in a structured, commonly used, machine-readable
						format.
					</Paragraph>

					<Subheading as="h3">E. Right to Opt Out of Sale (CCPA)</Subheading>
					<Paragraph>
						We do not sell personal information. If this changes, you will be
						provided notice and the option to opt out before any such sale
						occurs.
					</Paragraph>

					<Subheading as="h3">
						F. Right to Restrict Processing (GDPR)
					</Subheading>
					<Paragraph>
						If you are located in the European Union or a country with similar
						protections, you may request that we limit the processing of your
						data under certain circumstances, such as when contesting accuracy
						or objecting to processing.
					</Paragraph>

					<Subheading as="h3">G. Verification Process</Subheading>
					<Paragraph>
						For your protection, we will verify your identity before fulfilling
						any rights requests. This may involve confirming details you
						previously provided.
					</Paragraph>

					<Subheading as="h3">H. How to Submit a Request</Subheading>
					<Paragraph>
						All rights requests should be submitted in writing to{" "}
						<a href="mailto:[Insert Contact Email]">[Insert Contact Email]</a>.
						Please specify:
					</Paragraph>
					<List>
						<ListItem>The right you wish to exercise</ListItem>
						<ListItem>
							The data or account information relevant to your request
						</ListItem>
					</List>
					<Paragraph>
						We will confirm receipt within the legally required timeframe and
						provide updates on the status of your request.
					</Paragraph>
				</Section>
				<BackToTop href="#toc" aria-label="Back to top of index">
					Back to top
				</BackToTop>

				<Section id="intro-scope" aria-labelledby="data-retention-heading">
					<Heading id="#section-10-heading">10. Data Retention</Heading>

					<Paragraph>
						We retain personal and health-related information only for as long
						as necessary to fulfill the purposes outlined in this Privacy
						Policy, comply with legal and regulatory requirements, and resolve
						disputes.
					</Paragraph>

					<Subheading id="retention-periods">
						A. Retention Periods by Data Type
					</Subheading>
					<Paragraph id="retention-periods-desc">
						The table below lists typical retention periods and why we keep the
						data.
					</Paragraph>

					<div
						role="region"
						aria-labelledby="retention-periods"
						aria-describedby="retention-periods-desc">
						{/* <RetentionTable> */}
						<caption>
							Data retention periods by data type
							<VisuallyHidden>
								; columns are Data Type, Retention Period, and Purpose of
								Retention.
							</VisuallyHidden>
						</caption>
						<thead>
							<tr>
								<th scope="col">Data Type</th>
								<th scope="col">Retention Period</th>
								<th scope="col">Purpose of Retention</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">
									Temporary browser storage (localStorage, cookies)
								</th>
								<td>Until cleared by user or browser expiration settings</td>
								<td>Support in-progress forms and comparisons</td>
							</tr>
							<tr>
								<th scope="row">Guest plan comparison data</th>
								<td>Not stored on our servers; only in browser storage</td>
								<td>
									Maintain guest user functionality without account creation
								</td>
							</tr>
							<tr>
								<th scope="row">User account information</th>
								<td>Until account deletion request is processed</td>
								<td>
									Provide ongoing access to saved comparisons and preferences
								</td>
							</tr>
							<tr>
								<th scope="row">API access tokens (OAuth2 connections)</th>
								<td>
									Valid for session only; cleared upon expiration or user
									revocation
								</td>
								<td>
									Maintain secure API connections to CMS, VA, or insurer systems
								</td>
							</tr>
							<tr>
								<th scope="row">Communications and support tickets</th>
								<td>Up to 2 years after resolution</td>
								<td>Maintain service records and dispute resolution</td>
							</tr>
							<tr>
								<th scope="row">Audit logs and security records</th>
								<td>Minimum 6 years (if handling HIPAA-aligned data)</td>
								<td>
									Meet compliance, fraud prevention, and security auditing
									requirements
								</td>
							</tr>
							<tr>
								<th scope="row">Aggregated analytics (non-identifiable)</th>
								<td>Indefinite</td>
								<td>Performance monitoring and service improvement</td>
							</tr>
						</tbody>
						{/* </RetentionTable> */}
					</div>
					{/* </TableWrapper> */}

					<Subheading>B. Criteria for Determining Retention</Subheading>
					<ul>
						<li>
							The original purpose of collection and whether it has been
							fulfilled
						</li>
						<li>
							Legal and regulatory requirements (e.g., HIPAA, CMS, CCPA, GDPR)
						</li>
						<li>Security, fraud prevention, and dispute resolution needs</li>
						<li>Contractual obligations with service providers or partners</li>
					</ul>

					<Subheading>C. Deletion Upon Request</Subheading>
					<Paragraph>
						You may request the deletion of your personal data at any time by
						contacting us at{" "}
						<a
							href={`mailto:${contactEmail}`}
							aria-label="Email our privacy team to request deletion">
							{contactEmail}
						</a>
						. We will respond within the legally required timeframe and confirm
						when deletion has been completed. Certain legal, regulatory, or
						technical reasons may require us to retain some information
						temporarily after your request.
					</Paragraph>

					<Subheading>D. Post-Deletion Residual Data</Subheading>
					<Paragraph>
						Deleted information may remain in encrypted backups for a limited
						period until those backups are overwritten as part of our standard
						backup cycle. We do not use this data for any purpose other than
						disaster recovery.
					</Paragraph>
				</Section>
				<BackToTop href="#toc" aria-label="Back to top of index">
					Back to top
				</BackToTop>

				<Section aria-labelledby="cookies-tracking-heading">
					<Subheading id="#section-11-heading">
						11. Cookies and Tracking Technologies
					</Subheading>
					<Paragraph>
						We use cookies, local storage, and similar technologies to improve
						your experience, analyze performance, and provide personalized
						insurance comparison results.
					</Paragraph>

					<Subheading as="h3">
						A. Types of Cookies and Technologies We Use
					</Subheading>

					<Subheading as="h4">Essential Cookies</Subheading>
					<Paragraph>
						Required for core functionality, such as form submission and plan
						comparison. Cannot be disabled through our cookie settings panel.
					</Paragraph>

					<Subheading as="h4">Functional Cookies</Subheading>
					<Paragraph>
						Store user preferences (e.g., coverage type, ZIP code) to streamline
						future visits. May be stored in your browser’s localStorage or
						cookies.
					</Paragraph>

					<Subheading as="h4">Analytics Cookies</Subheading>
					<Paragraph>
						Collect anonymized usage data (e.g., page views, time on site, click
						patterns). Used to improve performance, accessibility, and user
						experience. Tools may include Google Analytics, Axe (for
						accessibility scanning), and Lighthouse.
					</Paragraph>

					<Subheading as="h4">Session Storage</Subheading>
					<Paragraph>
						Temporarily holds form and comparison data during a single browser
						session. Automatically cleared when the browser tab or window is
						closed.
					</Paragraph>

					<Subheading as="h4">Pixels and API Tracking</Subheading>
					<Paragraph>
						May be used for internal reporting and service improvement. No
						third-party marketing pixels are used without your explicit opt-in
						consent.
					</Paragraph>

					<Subheading as="h3">B. How We Use These Technologies</Subheading>
					<List>
						<ListItem>
							Keep track of in-progress form entries and plan comparisons
						</ListItem>
						<ListItem>
							Remember user settings for future visits (if not cleared)
						</ListItem>
						<ListItem>
							Measure system performance and diagnose technical issues
						</ListItem>
						<ListItem>Ensure compliance with accessibility standards</ListItem>
					</List>

					<Subheading as="h3">
						C. Your Control Over Cookies and Tracking
					</Subheading>
					<Paragraph>
						You can manage or disable cookies and other storage technologies by
						adjusting your browser settings. Depending on your browser, you may
						be able to:
					</Paragraph>
					<List>
						<ListItem>Delete stored cookies and localStorage entries</ListItem>
						<ListItem>Block cookies from specific sites</ListItem>
						<ListItem>Enable “Do Not Track” signals</ListItem>
					</List>
					<Paragraph>
						Please note: Disabling essential cookies or localStorage may prevent
						certain features (such as saved comparisons) from functioning
						properly.
					</Paragraph>

					<Subheading as="h3">D. Third-Party Cookies</Subheading>
					<Paragraph>
						We do not allow advertising networks to set cookies on our site
						without your prior consent. If we introduce such cookies in the
						future, we will update this Privacy Policy and request your opt-in
						approval.
					</Paragraph>
				</Section>
				<BackToTop href="#toc" aria-label="Back to top of index">
					Back to top
				</BackToTop>

				<Section id="intro-scope" aria-labelledby="third-party-links-heading">
					<Subheading id="section-12-heading">
						12. Third-Party Links and Services
					</Subheading>
					<Paragraph>
						Our platform may contain links to or integrations with third-party
						websites, APIs, and services that are not operated or controlled by
						us. This includes, but is not limited to:
					</Paragraph>
					<List>
						<ListItem>The CMS Marketplace API and Healthcare.gov</ListItem>
						<ListItem>
							CMS Blue Button services (Medicare claims and history)
						</ListItem>
						<ListItem>VA Community Care Network tools</ListItem>
						<ListItem>
							Private insurance provider portals and plan data APIs
						</ListItem>
						<ListItem>External benefit or pharmacy lookup tools</ListItem>
					</List>

					<Subheading as="h3">
						A. No Control Over Third-Party Privacy Practices
					</Subheading>
					<Paragraph>
						We are not responsible for the privacy practices, security measures,
						or content of these third-party sites and services. Your use of
						those services is governed by their own privacy policies and terms
						of use.
					</Paragraph>
					<Paragraph>
						We encourage you to review those policies before providing personal
						or health-related information to any third party.
					</Paragraph>

					<Subheading as="h3">B. Data Exchange with Third Parties</Subheading>
					<Paragraph>
						When you authorize a connection to a third-party API or site from
						within our platform:
					</Paragraph>
					<List>
						<ListItem>
							Only the data necessary to complete the requested action is
							shared.
						</ListItem>
						<ListItem>
							The transfer occurs via secure, encrypted channels.
						</ListItem>
						<ListItem>
							We do not store your full third-party account credentials.
						</ListItem>
					</List>

					<Subheading as="h3">C. External Links</Subheading>
					<Paragraph>
						Our website may provide informational or resource links to external
						organizations, government programs, or advocacy groups. These links
						are provided for convenience and do not imply endorsement. Once you
						leave our website, this Privacy Policy no longer applies.
					</Paragraph>

					<Subheading as="h3">D. Liability Limitation</Subheading>
					<Paragraph>
						We are not liable for any damages or losses arising from your use of
						third-party services or reliance on information obtained through
						those services. Any disputes should be directed to the third party
						in question.
					</Paragraph>
				</Section>
				<BackToTop href="#toc" aria-label="Back to top of index">
					Back to top
				</BackToTop>

				<Section id="intro-scope" aria-labelledby="changes-policy-heading">
					<Subheading id="section-13-heading">
						13. Changes to This Privacy Policy
					</Subheading>
					<Paragraph>
						We may update or revise this Privacy Policy from time to time to
						reflect changes in our practices, technology, legal requirements, or
						other factors.
					</Paragraph>

					<Subheading as="h3">A. Notification of Changes</Subheading>
					<Paragraph>When updates are made, we will:</Paragraph>
					<List>
						<ListItem>
							Post the updated Privacy Policy on this page with a new “Effective
							Date” at the top.
						</ListItem>
					</List>
					<Paragraph>
						For material changes that affect how we handle your personal or
						health-related information, we may also:
					</Paragraph>
					<List>
						<ListItem>
							Send a notification email to registered account holders
						</ListItem>
						<ListItem>
							Display a prominent notice on our homepage or dashboard
						</ListItem>
					</List>

					<Subheading as="h3">B. Effective Date of Changes</Subheading>
					<Paragraph>
						Changes take effect as of the date they are posted unless otherwise
						stated. If the changes significantly alter your rights or our
						obligations, they will take effect after a reasonable notice period,
						during which you may choose to discontinue use of our services.
					</Paragraph>

					<Subheading as="h3">C. Continued Use as Acceptance</Subheading>
					<Paragraph>
						Your continued use of our platform after the updated Privacy Policy
						takes effect constitutes your acceptance of the changes. If you do
						not agree to the updated terms, you should stop using the platform
						and, if applicable, request deletion of your account and data.
					</Paragraph>
				</Section>
				<BackToTop href="#toc" aria-label="Back to top of index">
					Back to top
				</BackToTop>

				<Section id="intro-scope" aria-labelledby="contact-information">
					<Subheading id="section-14-heading">
						14. Contact Information
					</Subheading>
					<Paragraph>
						If you have questions, concerns, or requests regarding this Privacy
						Policy, our data handling practices, or your rights, you may contact
						us using the information below:
					</Paragraph>

					<address>
						<p>
							<strong>SeniorHealthCareSolution.net</strong>
							<br />
							Attn: Privacy Officer
							<br />
							[Insert Mailing Address]
							<br />
							Email:{" "}
							<a href="mailto:[Insert Contact Email]">[Insert Contact Email]</a>
							<br />
							Phone:{" "}
							<a href="tel:[Insert Contact Phone]">[Insert Contact Phone]</a>
						</p>
					</address>

					<Subheading as="h3">A. Types of Inquiries We Handle</Subheading>
					<List>
						<ListItem>
							Requests to access, correct, or delete your personal data
						</ListItem>
						<ListItem>
							Questions about how your information is collected, stored, or
							shared
						</ListItem>
						<ListItem>
							Concerns regarding data security or potential breaches
						</ListItem>
						<ListItem>
							Clarification of your rights under applicable laws (e.g., HIPAA,
							GDPR, CCPA)
						</ListItem>
						<ListItem>
							Reporting suspected unauthorized use of your account or data
						</ListItem>
					</List>

					<Subheading as="h3">B. Response Timeline</Subheading>
					<Paragraph>
						We will acknowledge receipt of your inquiry within 5 business days
						and provide a full response or status update within 30 calendar
						days, unless a shorter period is required by law.
					</Paragraph>
				</Section>
				<BackToTop href="#toc" aria-label="Back to top of index">
					Back to top
				</BackToTop>
			</PrivacyContainer>
		</>
	);
};

export default PrivacyPolicy;

