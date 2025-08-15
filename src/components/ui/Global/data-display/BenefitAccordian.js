/** @format */

import React from "react";
import styled from "styled-components";
import Collapsible from "../../Global/layout/CollapsableButton";
import MomMode from "../../Feedback/MomMode";

const BenefitList = styled.ul`
	padding-left: 1rem;
	list-style: none;
`;

const BenefitItem = styled.li`
	border-left: 3px solid ${({ $covered }) => ($covered ? "#1b5e20" : "#ccc")};
	background-color: ${({ theme }) => theme.colors.backgroundAlt || "#f9f9f9"};
	border-radius: 4px;
	position: relative;
	margin-bottom: 0.75rem;
	padding: 0.5rem;
`;

const BenefitTitle = styled.h3`
	font-size: 1.1rem;
	margin: 0;
	font-weight: bold;
	color: ${({ $covered }) => ($covered ? "#000" : "crimson")};
`;

const CollapsibleWrapper = styled.div`
	margin-bottom: 1.5rem;
	border-radius: 12px;
	border: 2px solid ${({ theme }) => theme.colors.border || "#ccc"};
	box-shadow: 0 0 8px rgba(0, 0, 0, 0.06);
	background: linear-gradient(to bottom right, #fefefe, #fafafa);

`;

const Checkmark = styled.span`
	color: black;
	font-weight: bold;
	margin-right: 0.5rem;
`;

const Explanation = styled.div`
	font-size: 0.85rem;
	color: ${({ theme }) => theme.colors.textSecondary || "#666"};
	margin-top: 0.25rem;
`;

const BenefitAccordion = ({
	benefits = {},
	userPreferences = {},
	showCheckmarks = true,
}) => {
	const { enabled: momMode, translate } = MomMode.useMomMode();

	const isUserInterested = (title) => {
		if (!userPreferences || typeof userPreferences !== "object") return false;
		const allPrefs = [
			...(userPreferences?.lifestylePrograms || []),
			...(userPreferences?.dentalCoverage ? ["Dental Coverage"] : []),
			...(userPreferences?.visionCoverage ? ["Vision Coverage"] : []),
		];
		return allPrefs.includes(title);
	};

	const coreMedical = benefits["Core Medical"];
	const rest = Object.entries(benefits).filter(
		([category]) => category !== "Core Medical"
	);

	return (
		<div>
			{coreMedical && (
				<Collapsible title="Core Medical Benefits">
					<BenefitList>
						{coreMedical.map((benefit, i) => (
							<BenefitItem key={i} $covered={benefit.covered}>
								<BenefitTitle $covered={benefit.covered}>
									{momMode ? translate(benefit.name) : benefit.name} –{" "}
									{benefit.covered ? "Covered" : "Not Covered"}
								</BenefitTitle>
								{benefit.cost_sharings?.length > 0 && (
									<Explanation>
										{benefit.cost_sharings.map((cost, j) => (
											<div key={j}>
												{cost.network_tier}:{" "}
												{cost.copay_amount
													? `$${cost.copay_amount.toFixed(2)} copay`
													: cost.coinsurance_rate
													? `${Math.round(
															cost.coinsurance_rate * 100
													  )}% coinsurance`
													: "No cost info"}{" "}
												{cost.coinsurance_options
													? `– ${cost.coinsurance_options}`
													: ""}
											</div>
										))}
									</Explanation>
								)}
								{benefit.explanation && (
									<Explanation>
										<em>{benefit.explanation}</em>
									</Explanation>
								)}
							</BenefitItem>
						))}
					</BenefitList>
				</Collapsible>
			)}

			{rest.map(([category, items]) => (
				<Collapsible
					key={category}
					title={
						<>
							{showCheckmarks && isUserInterested(category) && (
								<Checkmark>✓</Checkmark>
							)}
							{category}
						</>
					}
					toggleSymbols={{ open: "−", closed: "+" }}>
					<BenefitList>
						{items.map((benefit, i) => (
							<BenefitItem key={i} $covered={benefit.covered}>
								<BenefitTitle $covered={benefit.covered}>
									{momMode ? translate(benefit.name) : benefit.name} –{" "}
									{benefit.covered ? "Covered" : "Not Covered"}
								</BenefitTitle>
								{benefit.cost_sharings?.length > 0 && (
									<Explanation>
										{benefit.cost_sharings.map((cost, j) => (
											<div key={j}>
												{cost.network_tier}:{" "}
												{cost.copay_amount
													? `$${cost.copay_amount.toFixed(2)} copay`
													: cost.coinsurance_rate
													? `${Math.round(
															cost.coinsurance_rate * 100
													  )}% coinsurance`
													: "No cost info"}{" "}
												{cost.coinsurance_options
													? `– ${cost.coinsurance_options}`
													: ""}
											</div>
										))}
									</Explanation>
								)}
								{benefit.explanation && (
									<Explanation>
										<em>{benefit.explanation}</em>
									</Explanation>
								)}
							</BenefitItem>
						))}
					</BenefitList>
				</Collapsible>
			))}
		</div>
	);
};

export default BenefitAccordion;
