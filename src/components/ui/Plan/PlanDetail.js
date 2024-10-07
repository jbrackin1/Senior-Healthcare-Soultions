/** @format */

// src/components/Plan/PlanDetail.js
import React from "react";
import styled from "styled-components";
import {
	formatInsuranceData,
	formatInsuranceList,
} from "../../../utils/formatData";


const DetailContainer = styled.div`
	padding: 2rem;
	background-color: ${({ theme }) => theme.colors.background};
	border-radius: 8px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	max-width: 800px;
	margin: auto;
`;

const PlanDetail = ({ plan }) => {
	return (
		<DetailContainer>
			<h2>{formattedPlan.name}</h2>
			<p>{formattedPlan.description}</p>
			<p>Premium: {formattedPlan.premium}</p>
			<p>Plan Type: {formattedPlan.planType}</p>
			<p>Network: {formattedPlan.network}</p>
			<p>Benefits: {formattedPlan.benefits}</p>
			<p>Deductible: {formattedPlan.deductible}</p>
			<p>General Co-Pay: {formattedData.coPay.general}</p>
			<p>Specialist Co-Pay: {formattedData.coPay.specialist}</p>
			<p>Hospital Co-Pay: {formattedData.coPay.hospital}</p>
			<p>Network Coverage: {formattedData.networkCoverage}</p>
			<p>Medicare Eligible: {formattedData.medicareEligible}</p>
			<p>Medicaid Eligible: {formattedData.medicaidEligible}</p>
			<h3>Coverage Details:</h3>
			<ul>
				{formattedData.coverage.map((item, index) => (
					<li key={index}>
						{item.service}: {item.coverageAmount}
					</li>
				))}
			</ul>
			<h3>Additional Benefits:</h3>
			<ul>
				{formattedData.additionalBenefits.map((benefit, index) => (
					<li key={index}>{benefit}</li>
				))}
			</ul>
			{/* add more details if needed */}
		</DetailContainer>
	);
};

export default PlanDetail;
