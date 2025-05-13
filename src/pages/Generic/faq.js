/** @format */
import React from "react";
import styled from "styled-components";

const FAQContainer = styled.section`
	padding: 2rem;
	background: ${({ theme }) => theme.colors.backgroundAlt || "#f9f9f9"};
	color: ${({ theme }) => theme.colors.text || "#333"};
	max-width: 800px;
	margin: auto;
	line-height: 1.6;
`;

const Question = styled.h3`
	margin-top: 1.5rem;
	color: ${({ theme }) => theme.colors.accent || "#0056b3"};
`;

const Answer = styled.p`
	margin-bottom: 1rem;
`;

const FAQ = () => (
	<FAQContainer>
		<h2>Frequently Asked Questions</h2>

		<Question>What is this site for?</Question>
		<Answer>
			<b>SeniorHealthcareSolution.net</b> helps you compare insurance plans
			based on your medications, budget, and needs.
		</Answer>

		<Question>Do I need to create an account?</Question>
		<Answer>
			Nope! You can search as a guest. 
			{/* Create an account to save plans or
			compare more than one. */}
		</Answer>

		<Question>Can I check if my medications are covered?</Question>
		<Answer>
			Yes! Select a plan and use the drug search tool. We’ll show coverage and
			generics.
		</Answer>

		<Question>Does this show Medicare/Medicaid plans?</Question>
		<Answer>
			Yes. We pull from trusted sources like CMS Blue Button and state Medicaid
			programs.
		</Answer>

		<Question>Is my data safe?</Question>
		<Answer>
			Yes. We follow HIPAA-aligned best practices, including encryption and data
			minimization.
		</Answer>

		<Question>Glossary of Insurance Terms</Question>
		<Answer as="div">
			<ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
				<li>
					<b>Premium:</b> The amount you pay monthly to keep your insurance plan
					active.
				</li>
				<li>
					<b>Deductible:</b> The amount you pay out-of-pocket each year before
					insurance begins covering costs.
				</li>
				<li>
					<b>Co-pay:</b> A fixed amount you pay for services like doctor visits
					or prescriptions.
				</li>
				<li>
					<b>Co-insurance:</b> The percentage of costs you pay after your
					deductible is met.
				</li>
				<li>
					<b>Out-of-Pocket Maximum (MOOP):</b> The most you’ll pay in a year
					before your insurance covers 100%.
				</li>
				<li>
					<b>Formulary:</b> The list of medications your plan covers and how
					they're priced.
				</li>
				<li>
					<b>HMO:</b> A plan with lower costs but fewer provider choices,
					usually requiring referrals.
				</li>
				<li>
					<b>PPO:</b> A plan with more provider flexibility and no referrals,
					but typically higher costs.
				</li>
			</ul>
		</Answer>
	</FAQContainer>
);

export default FAQ;
