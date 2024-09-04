/** @format */

// src/components/Plan/PlanDetail.js
import React from "react";
import styled from "styled-components";

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
			<h2>{plan.name}</h2>
			<p>{plan.description}</p>
			{/* Add more detailed information here */}
		</DetailContainer>
	);
};

export default PlanDetail;
