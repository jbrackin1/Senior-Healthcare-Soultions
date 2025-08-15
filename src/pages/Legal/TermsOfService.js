/** @format */

// TermsOfService.js
// Section 508-compliant, project-specific Terms and Conditions

import React from "react";
import styled from "styled-components";

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

const TermsContainer = styled.main`
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

const TermsOfService = () => {
	return (
		<>
			<SkipLink href="#main-content">Skip to main content</SkipLink>

			<TermsContainer id="main-content" aria-labelledby="page-title">
				<Heading id="page-title">Terms and Conditions</Heading>
				<LastUpdated>
					Last Updated: <time dateTime="2025-08-10">August 10, 2025</time>
				</LastUpdated>
				{/* Table of Contents */}
				<TocNav aria-labelledby="toc-title" role="doc-toc" id="toc">
					<TocTitle id="toc-title">Index</TocTitle>
					<TocList>
						<li>
							<TocLink href="#acceptance-of-terms">
								Acceptance of Terms
							</TocLink>
						</li>
						<li>
							<TocLink href="#eligibility">Eligibility</TocLink>
						</li>
						<li>
							<TocLink href="#changes-to-terms">Changes to Terms</TocLink>
						</li>
						<li>
							<TocLink href="#description-of-services">
								Description of Services (includes insurance comparison &amp;
								API integrations)
							</TocLink>
						</li>
						<li>
							<TocLink href="#no-patient-provider">
								No Patient–Provider Relationship (HIPAA legal shield)
							</TocLink>
						</li>
						<li>
							<TocLink href="#no-advice">
								No Medical, Legal, or Financial Advice Disclaimer
							</TocLink>
						</li>
						<li>
							<TocLink href="#privacy-hipaa">
								Privacy &amp; HIPAA Compliance (ties to Privacy Policy)
							</TocLink>
						</li>
						<li>
							<TocLink href="#data-collection">
								Data Collection, Storage, and Retention
							</TocLink>
						</li>
						<li>
							<TocLink href="#use-of-services">
								Use of Services (acceptable use policy)
							</TocLink>
						</li>
						<li>
							<TocLink href="#intellectual-property">
								Intellectual Property Rights
							</TocLink>
						</li>
						<li>
							<TocLink href="#api-terms">
								API Data &amp; Third-Party Service Terms (CMS, VA, insurer
								APIs)
							</TocLink>
						</li>
						<li>
							<TocLink href="#limitation-of-liability">
								Limitation of Liability
							</TocLink>
						</li>
						<li>
							<TocLink href="#indemnification">Indemnification</TocLink>
						</li>
						<li>
							<TocLink href="#security">
								Security &amp; User Responsibilities (including MFA, account
								safety)
							</TocLink>
						</li>
						<li>
							<TocLink href="#termination">Termination of Access</TocLink>
						</li>
						<li>
							<TocLink href="#governing-law">Governing Law</TocLink>
						</li>
						<li>
							<TocLink href="#dispute-resolution">
								Dispute Resolution (arbitration or court choice)
							</TocLink>
						</li>
						<li>
							<TocLink href="#severability">Severability</TocLink>
						</li>
						<li>
							<TocLink href="#entire-agreement">Entire Agreement</TocLink>
						</li>
						<li>
							<TocLink href="#force-majeure">Force Majeure</TocLink>
						</li>
						<li>
							<TocLink href="#Survival-Provisions">
								Survival of Certain Provisions
							</TocLink>
						</li>
						<li>
							<TocLink href="#assignment-clause">Assignment Clause</TocLink>
						</li>
						<li>
							<TocLink href="#contact-information">
								Contact Information
							</TocLink>
						</li>
					</TocList>
				</TocNav>
				{/* Each section heading is focusable when navigated to via anchor */}
				<SectionHeading id="acceptance-of-terms" tabIndex="-1">
					Section 1 – Acceptance of Terms
				</SectionHeading>
				<Paragraph>
					By accessing or using SeniorHealthCareSolution.net (“we,” “our,” or
					“the Company”), including but not limited to its insurance comparison
					tools, plan recommendations, and related services (collectively, “the
					Services”), you acknowledge that you have read, understood, and agree
					to be bound by these Terms and Conditions (“Terms”), as well as our
					Privacy Policy and any applicable supplemental agreements.
				</Paragraph>
				<Paragraph>
					If you do not agree to these Terms, you must immediately discontinue
					use of the Services. These Terms form a legally binding agreement
					between you and the Company, even if you are accessing the Services as
					a guest without creating an account.
				</Paragraph>
				<BackToTop href="#toc" aria-label="Back to top of index">
					Back to top
				</BackToTop>
				<SectionHeading id="eligibility" tabIndex="-1">
					Section 2 – Eligibility
				</SectionHeading>
				<Paragraph>
					The Services are intended for use by individuals who are:
				</Paragraph>
				<List>
					<ListItem>
						At least 18 years of age, or the legal age of majority in your
						jurisdiction; and
					</ListItem>
					<ListItem>
						Residing in, or otherwise subject to, the laws of the United States.
					</ListItem>
				</List>
				<Paragraph>
					By using the Services, you represent and warrant that you meet these
					eligibility requirements and have the legal capacity to enter into
					these Terms. If you are accessing the Services on behalf of another
					person or entity (including as a caregiver), you confirm that you have
					proper legal authority to act on their behalf and bind them to these
					Terms.
				</Paragraph>
				<BackToTop href="#toc" aria-label="Back to top of index">
					Back to top
				</BackToTop>
				<SectionHeading id="changes-to-terms" tabIndex="-1">
					Section 3 – Changes to Terms
				</SectionHeading>
				<Paragraph>
					We reserve the right to update, modify, or replace these Terms at any
					time, at our sole discretion. Any changes will become effective
					immediately upon posting to SeniorHealthCareSolution.net, unless
					otherwise required by law.
				</Paragraph>
				<Paragraph>
					We will provide notice of material changes by updating the “Last
					Updated” date at the top of this page and, where legally required, by
					email or in-service notification. Your continued use of the Services
					after the effective date of any revised Terms constitutes your
					acceptance of the changes. If you do not agree to the revised Terms,
					you must immediately discontinue use of the Services.
				</Paragraph>
				<BackToTop href="#toc" aria-label="Back to top of index">
					Back to top
				</BackToTop>
				<SectionHeading id="description-of-services" tabIndex="-1">
					Section 4 – Description of Services
				</SectionHeading>
				<Paragraph>
					SeniorHealthCareSolution.net provides online tools that allow users
					to:
				</Paragraph>
				<List>
					<ListItem>
						Compare health insurance plans, including Medicare, Medicaid,
						Veterans Affairs, and private marketplace options.
					</ListItem>
					<ListItem>
						View plan details such as costs, coverage, drug formularies, and
						supplemental benefits.
					</ListItem>
					<ListItem>
						Access recommendations based on user-supplied preferences and, where
						applicable, data from integrated third-party APIs (including but not
						limited to CMS, VA, and insurer systems).
					</ListItem>
				</List>
				<Paragraph>
					We do not sell insurance directly, act as an insurance broker, or
					guarantee plan approval. All plan details are provided “as-is” from
					third-party sources and may change without notice. You are responsible
					for confirming the accuracy of all plan details with the respective
					insurer or official government source before making any enrollment
					decisions.
				</Paragraph>
				Perfect—here are Sections 5–20 coded to drop right under your existing
				Section 4. They follow your styles, avoid nesting lists inside
				paragraphs, and keep everything 508-friendly (focusable anchors,
				semantic lists, `address` for contact). ```jsx
				{/* Section 5 */}
				<SectionHeading id="no-patient-provider" tabIndex="-1">
					Section 5 – No Patient–Provider Relationship (HIPAA Legal Shield)
				</SectionHeading>
				<Paragraph>
					The Services are provided for informational purposes only and do not
					create, and are not intended to create, any patient–provider,
					physician–patient, or other healthcare professional relationship
					between you and the Company. The Company is not a covered entity under
					HIPAA and does not act as your healthcare provider. Any health-related
					information presented through the Services is not a substitute for
					professional diagnosis, treatment, or clinical judgment. If you
					require medical attention, you should seek the advice of a qualified
					healthcare professional.
				</Paragraph>
				<BackToTop href="#toc">Back to top</BackToTop>
				{/* Section 6 */}
				<SectionHeading id="no-advice" tabIndex="-1">
					Section 6 – No Medical, Legal, or Financial Advice Disclaimer
				</SectionHeading>
				<Paragraph>
					The Company does not provide medical, legal, tax, or financial advice.
					All content made available through the Services, including plan
					comparisons, cost estimates, and benefit information, is provided for
					general educational purposes only. You should not rely on this
					information as a substitute for professional advice. Always seek
					independent advice from a qualified provider in the relevant field
					before making decisions that could affect your health, legal standing,
					or financial condition.
				</Paragraph>
				<BackToTop href="#toc">Back to top</BackToTop>
				{/* Section 7 */}
				<SectionHeading id="privacy-hipaa" tabIndex="-1">
					Section 7 – Privacy &amp; HIPAA Compliance
				</SectionHeading>
				<Paragraph>
					Your privacy is important to us. Our handling of your personal
					information is governed by our Privacy Policy, which is incorporated
					into these Terms. While the Company is not a HIPAA-covered entity, we
					implement administrative, physical, and technical safeguards
					consistent with HIPAA standards when handling any protected health
					information voluntarily shared by you. By using the Services, you
					consent to the collection, use, and disclosure of your information as
					described in the Privacy Policy.
				</Paragraph>
				<BackToTop href="#toc">Back to top</BackToTop>
				{/* Section 8 */}
				<SectionHeading id="data-collection" tabIndex="-1">
					Section 8 – Data Collection, Storage, and Retention
				</SectionHeading>
				<Paragraph>
					We collect and store only the information necessary to provide the
					Services, improve functionality, and comply with applicable laws. Data
					retention periods are specified in our Privacy Policy. After the
					retention period expires, your personal data will be securely deleted
					or anonymized, unless we are legally required to retain it. You may
					request deletion of your data at any time, subject to legal and
					contractual limitations.
				</Paragraph>
				<BackToTop href="#toc">Back to top</BackToTop>
				{/* Section 9 */}
				<SectionHeading id="use-of-services" tabIndex="-1">
					Section 9 – Use of Services (Acceptable Use Policy)
				</SectionHeading>
				<Paragraph>
					You agree to use the Services only for lawful purposes and in
					accordance with these Terms. You must not:
				</Paragraph>
				<List>
					<ListItem>
						Use the Services in any manner that violates any applicable law or
						regulation;
					</ListItem>
					<ListItem>
						Engage in any activity that could damage, disable, overburden, or
						impair the Services;
					</ListItem>
					<ListItem>
						Attempt to gain unauthorized access to any part of the Services,
						accounts, systems, or networks;
					</ListItem>
					<ListItem>
						Use the Services to transmit any malicious code, spam, or
						unauthorized advertisements.
					</ListItem>
				</List>
				<Paragraph>
					Violation of this section may result in immediate termination of your
					access to the Services.
				</Paragraph>
				<BackToTop href="#toc">Back to top</BackToTop>
				{/* Section 10 */}
				<SectionHeading id="intellectual-property" tabIndex="-1">
					Section 10 – Intellectual Property Rights
				</SectionHeading>
				<Paragraph>
					All content, features, and functionality of the Services—including
					text, graphics, logos, icons, images, audio clips, video, software,
					and the design, selection, and arrangement thereof—are owned by the
					Company, its licensors, or other content providers and are protected
					by U.S. and international copyright, trademark, patent, trade secret,
					and other intellectual property laws. You are granted a limited,
					non-exclusive, non-transferable, revocable license to access and use
					the Services for personal, non-commercial purposes only.
				</Paragraph>
				<BackToTop href="#toc">Back to top</BackToTop>
				{/* Section 11 */}
				<SectionHeading id="api-terms" tabIndex="-1">
					Section 11 – API Data &amp; Third-Party Service Terms
				</SectionHeading>
				<Paragraph>
					The Services may integrate with third-party APIs, including but not
					limited to CMS, VA, and insurance provider systems. Use of such data
					is subject to the terms and conditions of the respective data
					providers. The Company does not control and is not responsible for the
					accuracy, completeness, or availability of third-party data. By using
					the Services, you agree to comply with all applicable third-party
					terms and restrictions.
				</Paragraph>
				<BackToTop href="#toc">Back to top</BackToTop>
				{/* Section 12 */}
				<SectionHeading id="limitation-of-liability" tabIndex="-1">
					Section 12 – Limitation of Liability
				</SectionHeading>
				<Paragraph>
					To the fullest extent permitted by law, the Company and its
					affiliates, officers, employees, and agents shall not be liable for
					any indirect, incidental, special, consequential, or punitive damages,
					including without limitation loss of profits, data, use, goodwill, or
					other intangible losses, resulting from (i) your use of or inability
					to use the Services; (ii) any unauthorized access to or use of our
					servers and/or personal information; (iii) any interruption or
					cessation of transmission to or from the Services; or (iv) any errors
					or omissions in any content.
				</Paragraph>
				<BackToTop href="#toc">Back to top</BackToTop>
				{/* Section 13 */}
				<SectionHeading id="indemnification" tabIndex="-1">
					Section 13 – Indemnification
				</SectionHeading>
				<Paragraph>
					You agree to defend, indemnify, and hold harmless the Company and its
					affiliates, officers, employees, and agents from and against any
					claims, damages, obligations, losses, liabilities, costs, or debt, and
					expenses (including attorney’s fees) arising from: (i) your use of and
					access to the Services; (ii) your violation of any term of these
					Terms; (iii) your violation of any third-party right, including
					intellectual property rights; or (iv) any claim that your use of the
					Services caused damage to a third party.
				</Paragraph>
				<BackToTop href="#toc">Back to top</BackToTop>
				{/* Section 14 */}
				<SectionHeading id="security" tabIndex="-1">
					Section 14 – Security &amp; User Responsibilities
				</SectionHeading>
				<Paragraph>
					You are responsible for maintaining the confidentiality of any login
					credentials and for all activities that occur under your account. You
					agree to implement reasonable security measures, including
					multi-factor authentication (MFA) where available, and to notify us
					immediately of any unauthorized access or breach. The Company is not
					liable for losses arising from your failure to secure your account.
				</Paragraph>
				<BackToTop href="#toc">Back to top</BackToTop>
				{/* Section 15 */}
				<SectionHeading id="termination" tabIndex="-1">
					Section 15 – Termination of Access
				</SectionHeading>
				<Paragraph>
					We reserve the right to suspend or terminate your access to the
					Services at any time, without notice, for conduct that we believe
					violates these Terms, is harmful to other users, or is otherwise
					unlawful. Upon termination, all provisions of these Terms which by
					their nature should survive will survive, including intellectual
					property provisions, disclaimers, indemnity, and limitations of
					liability.
				</Paragraph>
				<BackToTop href="#toc">Back to top</BackToTop>
				{/* Section 16 */}
				<SectionHeading id="governing-law" tabIndex="-1">
					Section 16 – Governing Law
				</SectionHeading>
				<Paragraph>
					These Terms shall be governed by and construed in accordance with the
					laws of the State of Louisiana, without regard to its conflict of law
					provisions. You agree to submit to the personal and exclusive
					jurisdiction of the courts located in Louisiana for resolution of any
					disputes.
				</Paragraph>
				<BackToTop href="#toc">Back to top</BackToTop>
				{/* Section 17 */}
				<SectionHeading id="dispute-resolution" tabIndex="-1">
					Section 17 – Dispute Resolution
				</SectionHeading>
				<Paragraph>
					Any dispute arising from or relating to these Terms or the Services
					shall be resolved through binding arbitration in accordance with the
					rules of the American Arbitration Association, conducted in Louisiana,
					unless otherwise required by law. Judgment on the arbitration award
					may be entered in any court having jurisdiction.
				</Paragraph>
				<BackToTop href="#toc">Back to top</BackToTop>
				{/* Section 18 */}
				<SectionHeading id="severability" tabIndex="-1">
					Section 18 – Severability
				</SectionHeading>
				<Paragraph>
					If any provision of these Terms is found to be invalid, illegal, or
					unenforceable, the remaining provisions shall remain in full force and
					effect.
				</Paragraph>
				<BackToTop href="#toc">Back to top</BackToTop>
				{/* Section 19 */}
				<SectionHeading id="entire-agreement" tabIndex="-1">
					Section 19 – Entire Agreement
				</SectionHeading>
				<Paragraph>
					These Terms, together with the Privacy Policy and any applicable
					supplemental agreements, constitute the entire agreement between you
					and the Company regarding your use of the Services, and supersede and
					replace any prior agreements, written or oral, relating to the same
					subject matter.
				</Paragraph>
				<BackToTop href="#toc">Back to top</BackToTop>
				{/* Section 20 */}
				<SectionHeading id="force-majeure" tabIndex="-1">
					Section 20 – Force Majeure
				</SectionHeading>
				<Paragraph>
					We shall not be held liable or responsible for any failure or delay in
					performance of our obligations under these Terms if such failure or
					delay is caused by events beyond our reasonable control. These events
					include, but are not limited to, natural disasters, war, terrorism,
					strikes, labor disputes, server outages, API shutdowns, pandemics,
					acts of government, or interruptions or failures in telecommunications
					or third-party services (including CMS, VA, or insurer APIs).
				</Paragraph>
				<BackToTop href="#toc">Back to top</BackToTop>
				{/* Section 21 */}
				<SectionHeading id="survival" tabIndex="-1">
					Section 21 – Survival of Certain Provisions
				</SectionHeading>
				<Paragraph>
					Any provisions of these Terms that by their nature should survive
					termination of your account or access to the Services shall survive,
					including but not limited to: intellectual property rights,
					disclaimers, indemnification, and limitations of liability. This
					ensures that you cannot avoid such obligations by closing your
					account.
				</Paragraph>
				<BackToTop href="#toc">Back to top</BackToTop>
				{/* Section 22 */}
				<SectionHeading id="assignment" tabIndex="-1">
					Section 22 – Assignment Clause
				</SectionHeading>
				<Paragraph>
					We may assign or transfer our rights and obligations under these
					Terms, in whole or in part, to another entity in the event of a
					merger, acquisition, sale of assets, or other corporate transaction
					without prior notice to you. You may not assign or transfer your
					rights or obligations under these Terms without our prior written
					consent. Any attempt to do so without such consent shall be null and
					void.
				</Paragraph>
				<BackToTop href="#toc">Back to top</BackToTop>
				{/* Section 23 */}
				<SectionHeading id="contact-information" tabIndex="-1">
					Section 23 – Contact Information
				</SectionHeading>
				<address>
					<Paragraph style={{ marginBottom: 0 }}>
						SeniorHealthCareSolution.net
					</Paragraph>
					<Paragraph style={{ marginTop: 0 }}>Attn: Legal Department</Paragraph>
					<Paragraph>
						Email:{" "}
						<a
							href="mailto:privacy@seniorhealthcaresolution.net"
							aria-label="Email privacy at senior healthcare solution dot net">
							privacy@seniorhealthcaresolution.net
						</a>
					</Paragraph>
				</address>
				<BackToTop href="#toc" aria-label="Back to top of index">
					Back to top
				</BackToTop>
			</TermsContainer>
		</>
	);
};

export default TermsOfService;
