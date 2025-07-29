/** @format */

//Resources.js

// src/pages/Resources.js
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Global/everywhere/button";

// Styled Components
const ResourcesContainer = styled.main`
	padding: 2rem;
	background-color: ${({ theme }) => theme.colors.backgroundAlt};
	color: ${({ theme }) => theme.colors.text};
	font-family: "Open Sans", sans-serif;
	line-height: 1.6;
`;

const Section = styled.section`
	margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
	font-family: "Libre Baskerville", serif;
	font-size: 2rem;
	margin-bottom: 1rem;
	color: ${({ theme }) => theme.colors.accent};
`;

const ArticleList = styled.ul`
	list-style-type: none;
	padding: 0;
	margin-bottom: 2rem;
`;

const ArticleItem = styled.li`
	margin-bottom: 1.5rem;
	padding: 1rem;
	border: 1px solid ${({ theme }) => theme.colors.border};
	border-radius: 5px;
	background-color: ${({ theme }) => theme.colors.background};
`;

const ArticleTitle = styled.h3`
	font-size: 1.5rem;
	margin-bottom: 0.5rem;
`;

const ArticleDescription = styled.p`
	font-size: 1rem;
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

const DownloadList = styled.ul`
	list-style-type: none;
	padding: 0;
`;

const DownloadItem = styled.li`
	margin-bottom: 1rem;
`;

const ExternalLinkList = styled.ul`
	list-style-type: none;
	padding: 0;
`;

const ExternalLinkItem = styled.li`
	margin-bottom: 1rem;
`;

const ExternalLink = styled.a`
	color: ${({ theme }) => theme.colors.accent};
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`;

const Resources = () => {
	return (
		<ResourcesContainer>
			{/* Articles or Guides */}
			<Section>
				<SectionTitle>Educational Articles and Guides</SectionTitle>
				<ArticleList>
					<ArticleItem>
						<ArticleTitle>
							Choosing the Right Medical Insurance Plan
						</ArticleTitle>
						<ArticleDescription>
							Learn how to evaluate and choose the best medical insurance plan
							for your needs, including understanding premiums, deductibles, and
							coverage options.
						</ArticleDescription>
					</ArticleItem>
					<ArticleItem>
						<ArticleTitle>Understanding Healthcare Coverage</ArticleTitle>
						<ArticleDescription>
							A comprehensive guide on what healthcare coverage entails, what to
							expect, and how to navigate the complexities of insurance.
						</ArticleDescription>
					</ArticleItem>
					{/* Additional articles can be added here */}
				</ArticleList>
			</Section>

			{/* FAQs */}
			<Section>
				<SectionTitle>Frequently Asked Questions (FAQs)</SectionTitle>
				<FAQList>
					<FAQItem>
						<FAQQuestion id="Compare-Plans">
							What is the best way to compare insurance plans?
						</FAQQuestion>
						<FAQAnswer>
							Compare plans based on your specific health needs, budget, and
							preferred healthcare providers. Use our comparison tools to make
							the process easier.
						</FAQAnswer>
					</FAQItem>
					<FAQItem>
						<FAQQuestion id="deductibles">
							How do deductibles and premiums work?
						</FAQQuestion>
						<FAQAnswer>
							A premium is what you pay monthly for insurance, while a
							deductible is the amount you pay out-of-pocket before the
							insurance covers expenses.
						</FAQAnswer>
					</FAQItem>
					<FAQItem>
						<FAQQuestion id="metal-tiers">
							What Do Metal Levels Actually Mean?
						</FAQQuestion>
						<p>
							Metal levels (Bronze, Silver, Gold, Platinum) are just labels the
							government uses to describe how costs are split between you and
							the insurance company:
						</p>

						<table
							style={{
								width: "100%",
								marginTop: "1rem",
								borderCollapse: "collapse",
							}}>
							<thead>
								<tr>
									<th style={{ textAlign: "left" }}>Tier</th>
									<th>Monthly Cost</th>
									<th>Deductible</th>
									<th>Insurance Pays</th>
									<th>You Pay</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>🥉 Bronze</td>
									<td>💸 Low</td>
									<td>😬 High</td>
									<td>~60%</td>
									<td>~40%</td>
								</tr>
								<tr>
									<td>🥈 Silver</td>
									<td>🪙 Medium</td>
									<td>🪙 Medium</td>
									<td>~70%</td>
									<td>~30%</td>
								</tr>
								<tr>
									<td>🥇 Gold</td>
									<td>💰 Higher</td>
									<td>😊 Lower</td>
									<td>~80%</td>
									<td>~20%</td>
								</tr>
								<tr>
									<td>💎 Platinum</td>
									<td>🤑 Highest</td>
									<td>😎 Lowest</td>
									<td>~90%</td>
									<td>~10%</td>
								</tr>
							</tbody>
						</table>
						<FAQAnswer>
							<p style={{ marginTop: "1rem" }}>
								🗣️ <strong>In plain English:</strong>
								<br />
								<strong>Bronze</strong> plans are cheaper per month but cost
								more when you need care.
								<br />
								<strong>Gold</strong> and <strong>Platinum</strong> cost more up
								front but pay more if you get sick.
								<br />
								<strong>Silver</strong> is the only one that may unlock{" "}
								<em>extra savings</em> if you qualify based on income.
							</p>
						</FAQAnswer>
					</FAQItem>
					{/* Additional FAQs can be added here */}
				</FAQList>
			</Section>

			{/* Downloads */}
			<Section>
				<SectionTitle>Downloads</SectionTitle>
				<DownloadList>
					<DownloadItem>
						<Button as="a" href="/downloads/insurance-checklist.pdf" download>
							Download Insurance Comparison Checklist
						</Button>
					</DownloadItem>
					<DownloadItem>
						<Button as="a" href="/downloads/healthcare-guide.pdf" download>
							Download Healthcare Guide
						</Button>
					</DownloadItem>
				</DownloadList>
			</Section>

			{/* Links to External Resources */}
			<Section>
				<SectionTitle>External Resources</SectionTitle>
				<ExternalLinkList>
					<ExternalLinkItem>
						<ExternalLink
							href="https://www.medicare.gov"
							target="_blank"
							rel="noopener noreferrer">
							Medicare.gov
						</ExternalLink>
					</ExternalLinkItem>
					<ExternalLinkItem>
						<ExternalLink
							href="https://www.consumerreports.org/health-insurance"
							target="_blank"
							rel="noopener noreferrer">
							Consumer Reports - Health Insurance
						</ExternalLink>
					</ExternalLinkItem>
					{/* Additional external links can be added here */}
				</ExternalLinkList>
			</Section>
		</ResourcesContainer>
	);
};

export default Resources;

// Purpose: Provides valuable information about insurance, healthcare,
// and related topics.
// Content:
// Articles or Guides: Educational content on choosing insurance,
//understanding coverage, navigating healthcare, etc.
// FAQs: Frequently asked questions related to insurance and
// the comparison process.
// Downloads: Brochures, guides, or checklists that users can download.
// Links to External Resources: Reliable resources like government sites,
// consumer reports, etc
