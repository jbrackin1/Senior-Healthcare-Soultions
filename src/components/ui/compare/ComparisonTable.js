/** @format */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

// --- Styled Components ---
const PlanCard = styled.div`
	background-color: ${({ theme }) => theme.colors.backgroundAlt};
	padding: 1rem;
	margin: 1rem 0;
	border-radius: 8px;
	box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
	transition: background-color 0.2s ease, transform 0.2s ease;

	&:hover {
		background-color: #add8e6; /* Robin's Egg Blue on hover */
	}

	&:active {
		background-color: #add8e6; /* Robin's Egg Blue on tap */
		transform: scale(0.97); /* Optional: small pop-in press feel */
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
	table-layout: auto;
`;

const TableHeader = styled.th`
	padding: 1rem;
	border-bottom: 2px solid ${({ theme }) => theme.colors.border};
	background-color: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.textOnPrimary};
	cursor: pointer;
	position: relative;
	text-align: left;
`;

const HeaderContent = styled.span`
	display: inline-flex;
	align-items: center;
	gap: 6px;
	white-space: nowrap;
`;

const Tooltip = styled.div`
	position: absolute;
	top: 120%;
	left: 50%;
	transform: translateX(-50%);
	background-color: ${({ theme }) => theme.colors.tooltipBackground || "#333"};
	color: ${({ theme }) => theme.colors.tooltipText || "#fff"};
	padding: 0.5rem;
	font-size: 0.875rem;
	border-radius: 4px;
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
	white-space: nowrap;
	z-index: 10;
	transition: visibility 0.2s, opacity 0.2s ease-in-out;
	visibility: hidden;
	opacity: 0;

	${TableHeader}:hover & {
		visibility: visible;
		opacity: 1;
	}
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
}) => {
	const [sortKey, setSortKey] = useState("premium");
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

	const handleSort = (key) => {
		if (sortKey === key) {
			setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
		} else {
			setSortKey(key);
			setSortOrder("asc");
		}
	};

	const sortedPlans = [...plans].sort((a, b) => {
		let aValue = a[sortKey];
		let bValue = b[sortKey];

		if (sortKey === "deductibles") {
			aValue = a.deductibles?.[0]?.amount || 0;
			bValue = b.deductibles?.[0]?.amount || 0;
		} else if (sortKey === "moops") {
			aValue = a.moops?.[0]?.amount || 0;
			bValue = b.moops?.[0]?.amount || 0;
		}

		if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
		if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
		return 0;
	});

	const renderTiers = (tiers = []) => {
		const rendered = tiers.map((tier, idx) => {
			const label = tier.network_tier || `Tier ${idx + 1}`;
			return (
				<div
					key={idx}
					style={{
						fontSize: idx === 0 ? "1rem" : "0.85rem",
						fontWeight: idx === 0 ? "bold" : "normal",
					}}>
					{label}: ${tier.amount}
				</div>
			);
		});

		return rendered.length > 0 ? (
			rendered
		) : (
			<div style={{ fontSize: "0.9rem" }}>N/A</div>
		);
	};

	return (
		<>
			{isMobile ? (
				<div>
					{sortedPlans.map((plan) => (
						<PlanCard key={plan.id}>
							<PlanName>
								<td style={{ padding: 0 }}>
									<Link
										to={`/plan/${plan.id}`}
										state={{ plan }}
										style={{
											display: "block",
											width: "100%",
											height: "100%",
											padding: "0.75rem 1rem",
											textDecoration: "none",
											color: "inherit",
										}}>
										<b>{plan.name}</b>
									</Link>
								</td>
							</PlanName>

							<PlanInfo>
								<b>Premium:</b> ${plan.premium}
							</PlanInfo>
							{plan.premium_w_credit !== undefined && (
								<PlanInfo style={{ fontSize: "0.9rem", color: "#555" }}>
									After Credit: ${plan.premium_w_credit}
								</PlanInfo>
							)}
							{plan.ehb_premium !== undefined && (
								<PlanInfo style={{ fontSize: "0.9rem", color: "#555" }}>
									EHB Only: ${plan.ehb_premium}
								</PlanInfo>
							)}

							<PlanInfo>
								<b>Deductible In-Network:</b> $
								{plan.tiered_deductibles?.[0]?.amount || "N/A"}
							</PlanInfo>
							<PlanInfo>
								<b>Deductible Out-of-Network:</b> $
								{plan.tiered_deductibles?.[1]?.amount || "N/A"}
							</PlanInfo>
							<PlanInfo>
								<b>Deductible Combined:</b> $
								{plan.tiered_deductibles?.[2]?.amount || "N/A"}
							</PlanInfo>

							<PlanInfo>
								<b>Max Out-of-Pocket In-Network:</b> $
								{plan.tiered_moops?.[0]?.amount || "N/A"}
							</PlanInfo>
							<PlanInfo>
								<b>Max Out-of-Pocket Out-of-Network:</b> $
								{plan.tiered_moops?.[1]?.amount || "N/A"}
							</PlanInfo>
							<PlanInfo>
								<b>Max Combined:</b> ${plan.tiered_moops?.[2]?.amount || "N/A"}
							</PlanInfo>
						</PlanCard>
					))}
				</div>
			) : (
				<Table>
					<thead>
						<tr>
							<TableHeader onClick={() => handleSort("name")}>
								Plan Name <InfoIcon>ⓘ</InfoIcon>
								<Tooltip>Click to sort plans alphabetically.</Tooltip>
							</TableHeader>
							<TableHeader onClick={() => handleSort("premium")}>
								Premium <InfoIcon>ⓘ</InfoIcon>
								<Tooltip>Click to sort by monthly premium.</Tooltip>
							</TableHeader>
							<TableHeader onClick={() => handleSort("deductibles")}>
								Deductible <InfoIcon>ⓘ</InfoIcon>
								<Tooltip>Click to sort by deductible amount.</Tooltip>
							</TableHeader>
							<TableHeader onClick={() => handleSort("moops")}>
								Out of Pocket Max <InfoIcon>ⓘ</InfoIcon>
								<Tooltip>Click to sort by max out-of-pocket cost.</Tooltip>
							</TableHeader>
						</tr>
					</thead>
					<tbody>
						{sortedPlans.map((plan) => (
							<tr key={plan.id}>
								<td>
									<Link to={`/plan/${plan.id}`} state={{ plan }}>
										<b>{plan.name || "N/A"}</b>
									</Link>
								</td>
								<td>
									<div>
										<b>${plan.premium}</b>
										{plan.premium_w_credit !== undefined && (
											<div style={{ fontSize: "0.85rem", color: "#555" }}>
												After credit: ${plan.premium_w_credit}
											</div>
										)}
										{plan.ehb_premium !== undefined && (
											<div style={{ fontSize: "0.85rem", color: "#555" }}>
												EHB Only: ${plan.ehb_premium}
											</div>
										)}
									</div>
								</td>
								<td>{renderTiers(plan.tiered_deductibles)}</td>
								<td>{renderTiers(plan.tiered_moops)}</td>
							</tr>
						))}
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
};

ComparisonTable.defaultProps = {
	selectedPlans: [],
};

export default ComparisonTable;
