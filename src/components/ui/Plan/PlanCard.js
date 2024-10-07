/** @format */

// src/components/Plan/PlanCard.js
import React from "react";
import styled from "styled-components";
import Button from "../ui/button";

const CardContainer = styled.div`
	padding: 1.5rem;
	margin-bottom: 1.5rem;
	border-radius: 8px;
	background-color: ${({ theme }) => theme.colors.background};
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const PlanInfo = styled.div`
	flex-grow: 1;
`;

const PlanTitle = styled.h3`
	font-size: 1.5rem;
	margin-bottom: 0.5rem;
	color: ${({ theme }) => theme.colors.primary};
`;

const PlanCard = ({ plan, onFavoriteToggle, isFavorite }) => {
	return (
		<CardContainer>
			<PlanInfo>
				<PlanTitle>{plan.name}</PlanTitle>
				<p>Type: {plan.type}</p>
				<p>Premium: {plan.premium}</p>
				<p>Deductible: {plan.deductible}</p>
				<p>General Co-Pay: {plan.coPay.general}</p>
				<p>Specialist Co-Pay: {plan.coPay.specialist}</p>
				<p>Network Coverage: {plan.networkCoverage}</p>
				<p>Additional Benefits: {plan.additionalBenefits.join(", ")}</p>
			</PlanInfo>
			<Button onClick={() => onFavoriteToggle(plan.id)}>
				{isFavorite ? "❤️" : "♡"}
			</Button>
		</CardContainer>
	);
};

export default PlanCard;
