/** @format */

// src/pages/JobListings.js
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Styled Components
const JobListingsContainer = styled.main`
	padding: 2rem;
	background-color: ${({ theme }) => theme.colors.backgroundAlt};
	color: ${({ theme }) => theme.colors.text};
	font-family: "Open Sans", sans-serif;
	line-height: 1.6;
	text-align: center;
`;

const JobSection = styled.section`
	margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
	font-family: "Libre Baskerville", serif;
	font-size: 2rem;
	margin-bottom: 1rem;
	color: ${({ theme }) => theme.colors.accent};
`;

const NoJobsMessage = styled.p`
	font-size: 1.2rem;
	margin-top: 2rem;
	color: ${({ theme }) => theme.colors.text};
`;

const JobList = styled.ul`
	list-style-type: none;
	padding: 0;
	margin: 0;
`;

const JobItem = styled.li`
	margin-bottom: 2rem;
	padding: 1.5rem;
	border: 1px solid ${({ theme }) => theme.colors.border};
	border-radius: 5px;
	background-color: ${({ theme }) => theme.colors.background};
	text-align: left;
`;

const JobTitle = styled.h3`
	font-size: 1.5rem;
	margin-bottom: 0.5rem;
`;

const JobDescription = styled.p`
	font-size: 1rem;
	margin-bottom: 1rem;
`;

const Applybutton = styled(Link)`
	display: inline-block;
	padding: 0.5rem 1rem;
	background-color: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.backgroundAlt};
	text-decoration: none;
	border-radius: 3px;

	&:hover {
		background-color: ${({ theme }) => theme.colors.accent};
	}
`;

// const jobData = [
// 	{
// 		title: "Customer Service Representative",
// 		description:
// 			"Join our team to assist customers with their insurance needs.",
// 		applyLink: "/apply/customer-service-representative",
// 	},
// 	{
// 		title: "Sales Manager",
// 		description: "Lead our sales team and help grow our customer base.",
// 		applyLink: "/apply/sales-manager",
// 	},
// 	// Add job listings here
// ];

// Job Listings Component
const JobListings = () => {
	// Placeholder for future job data (currently empty)
	const jobData = []; // Use this array to add job listings in the future

	return (
		<JobListingsContainer>
			<SectionTitle>Job Openings</SectionTitle>

			{jobData.length === 0 ? (
				// Display message when no jobs are available
				<NoJobsMessage>
					There are currently no job openings available. Please check back
					later.
				</NoJobsMessage>
			) : (
				// Display job listings when available
				<JobList>
					{jobData.map((job, index) => (
						<JobItem key={index}>
							<JobTitle>{job.title}</JobTitle>
							<JobDescription>{job.description}</JobDescription>
							<Applybutton to={job.applyLink}>Apply Now</Applybutton>
						</JobItem>
					))}
				</JobList>
			)}
		</JobListingsContainer>
	);
};

export default JobListings;

// Optional - future use -  when your website organization grows,
// this could include job openings, company culture, and application forms.
