/** @format */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import {
	matchPlanToUserPrefs,
	hasUserSelectedPrefs,
} from "../../../utils/user/matchUserPrefs";

// --- Styled Components ---
const PlanCard = styled.div`
	background-color: ${({ theme }) => theme.colors.backgroundAlt};
	padding: 1rem;
	margin: 1rem 0;
	border-radius: 8px;
	box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
	transition: background-color 0.2s ease, transform 0.2s ease;

	&:hover {
		background-color: #add8e6;
	}
	&:active {
		background-color: #add8e6;
		transform: scale(0.97);
	}
`;

const PlanName = styled.h3`
	font-size: 1.25rem;
	margin-bottom: 0.5rem;
`;

const PlanInfo = styled.p`
	margin: 0.25rem 0;
	font-size: 1rem;
`;

const Table = styled.table`
	width: 100%;
	border-collapse: collapse;
	margin-top: 1rem;
	background-color: ${({ theme }) => theme.colors.backgroundAlt};
	color: ${({ theme }) => theme.colors.text};
`;

const TableHeader = styled.th`
	padding: 1rem;
	border-bottom: 2px solid ${({ theme }) => theme.colors.border};
	background-color: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.textOnPrimary};
	cursor: pointer;
	text-align: left;
`;

const InfoIcon = styled.span`
	font-size: 0.9rem;
	margin-left: 0.25rem;
	cursor: help;
	color: ${({ theme }) => theme.colors.textOnPrimary || "navy"};
	display: inline-block;
	vertical-align: middle;
`;

// --- Main Component ---
const ComparisonTable = ({
	plans,
	selectedPlans = [],
	onTogglePlan,
	loading,
	userPrefs = {},
}) => {
	const [sortKey, setSortKey] = useState("matchScore");
	const [sortOrder, setSortOrder] = useState("asc");
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkScreenSize = () => {
			setIsMobile(window.innerWidth < 768);
		};
		checkScreenSize();
		window.addEventListener("resize", checkScreenSize);
		return () => window.removeEventListener("resize", checkScreenSize);
	}, []);

	if (loading) return <p>Loading plans...</p>;

	const userHasPrefs = hasUserSelectedPrefs(userPrefs);

	const handleSort = (key) => {
		if (sortKey === key) {
			setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
		} else {
			setSortKey(key);
			setSortOrder("asc");
		}
	};

	const sortedPlans = [...plans].sort((a, b) => {
		if (sortKey === "matchScore" && userHasPrefs) {
			const aScore = matchPlanToUserPrefs(a, userPrefs).matched.length;
			const bScore = matchPlanToUserPrefs(b, userPrefs).matched.length;
			return sortOrder === "asc" ? aScore - bScore : bScore - aScore;
		}

		let aValue = a[sortKey];
		let bValue = b[sortKey];

		if (sortKey === "deductibles") {
			aValue = a.deductibles?.[0]?.amount || 0;
			bValue = b.deductibles?.[0]?.amount || 0;
		} else if (sortKey === "moops") {
			aValue = a.moops?.[0]?.amount || 0;
			bValue = b.moops?.[0]?.amount || 0;
		}

		return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
	});

	const renderTiers = (tiers = []) => {
		return tiers.length > 0
			? tiers.map((tier, idx) => (
					<div
						key={idx}
						style={{
							fontSize: idx === 0 ? "1rem" : "0.85rem",
							fontWeight: idx === 0 ? "bold" : "normal",
						}}>
						{tier.network_tier || `Tier ${idx + 1}`}: ${tier.amount}
					</div>
			  ))
			: "N/A";
	};

	return (
		<>
			{isMobile ? (
				<div>
					{sortedPlans.map((plan) => {
						const fullPlan = {
							...plan,
							benefits:
								Array.isArray(plan.benefits) && plan.benefits.length > 0
									? plan.benefits
									: plan.details?.benefits || [],
						};


						const matchSummary = userHasPrefs
							? matchPlanToUserPrefs(fullPlan, userPrefs)
							: null;

						return (
							<PlanCard key={plan.id}>
								<PlanName>
									<Link to={`/plan/${plan.id}`} state={{ plan, userPrefs }}>
										<b>{plan.name}</b>
									</Link>
								</PlanName>

								<PlanInfo>
									<b>Premium:</b> ${plan.premium}
								</PlanInfo>

								{userHasPrefs && matchSummary && (
									<>
										{matchSummary.matchesAll ? (
											<div
												className="highlight-badge"
												style={{ marginTop: "1rem", color: "green" }}>
												✅ Meets ALL your preferences
											</div>
										) : (
											<>
												{matchSummary.matched.length > 0 && (
													<div
														className="match-summary"
														style={{ marginTop: "1rem", color: "green" }}>
														✅ Matches: {matchSummary.matched.join(", ")}
													</div>
												)}
												{matchSummary.missing.length > 0 && (
													<div
														className="missing-summary"
														style={{ color: "gray" }}>
														❌ Missing: {matchSummary.missing.join(", ")}
													</div>
												)}
											</>
										)}
									</>
								)}
							</PlanCard>
						);
					})}
				</div>
			) : (
				<Table>
					<thead>
						<tr>
							<TableHeader onClick={() => handleSort("name")}>
								Plan Name{" "}
								<InfoIcon title="Click to sort alphabetically">ⓘ</InfoIcon>
							</TableHeader>
							<TableHeader onClick={() => handleSort("premium")}>
								Premium <InfoIcon title="Click to sort by premium">ⓘ</InfoIcon>
							</TableHeader>
							<TableHeader onClick={() => handleSort("deductibles")}>
								Deductible{" "}
								<InfoIcon title="Click to sort by deductible">ⓘ</InfoIcon>
							</TableHeader>
							<TableHeader onClick={() => handleSort("moops")}>
								Out-of-Pocket Max{" "}
								<InfoIcon title="Click to sort by max OOP">ⓘ</InfoIcon>
							</TableHeader>
						</tr>
					</thead>
					<tbody>
						{sortedPlans.map((plan) => {
							const fullPlan = {
								...plan,
								benefits:
									Array.isArray(plan.benefits) && plan.benefits.length > 0
										? plan.benefits
										: plan.details?.benefits || [],
							};


							const matchSummary = userHasPrefs
								? matchPlanToUserPrefs(fullPlan, userPrefs)
								: null;

							return (
								<tr key={plan.id}>
									<td>
										<Link to={`/plan/${plan.id}`} state={{ plan, userPrefs }}>
											<b>{plan.name || "N/A"}</b>
										</Link>
										{userHasPrefs && matchSummary && (
											<div style={{ marginTop: "0.5rem" }}>
												{matchSummary.matchesAll ? (
													<div
														className="highlight-badge"
														style={{ color: "green" }}>
														✅ Meets ALL your preferences
													</div>
												) : (
													<>
														{matchSummary.matched.length > 0 && (
															<div
																className="match-summary"
																style={{ color: "green" }}>
																✅ {matchSummary.matched.join(", ")}
															</div>
														)}
														{matchSummary.missing.length > 0 && (
															<div
																className="missing-summary"
																style={{ color: "gray" }}>
																❌ {matchSummary.missing.join(", ")}
															</div>
														)}
													</>
												)}
											</div>
										)}
									</td>
									<td>${plan.premium}</td>
									<td>{renderTiers(plan.tiered_deductibles)}</td>
									<td>{renderTiers(plan.tiered_moops)}</td>
								</tr>
							);
						})}
					</tbody>
				</Table>
			)}
		</>
	);
};

ComparisonTable.propTypes = {
	plans: propTypes.array.isRequired,
	selectedPlans: propTypes.array,
	onTogglePlan: propTypes.func.isRequired,
	loading: propTypes.bool.isRequired,
	userPrefs: propTypes.object,
};

ComparisonTable.defaultProps = {
	selectedPlans: [],
	userPrefs: {},
};

export default ComparisonTable;
