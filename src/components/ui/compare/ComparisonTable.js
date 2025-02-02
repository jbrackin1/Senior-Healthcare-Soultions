/** @format */

import React, { useState } from "react";
import styled from "styled-components";
import propTypes from "prop-types";

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

const ComparisonTable = ({ plans, selectedPlans = [], onTogglePlan }) => {
	const [sortKey, setSortKey] = useState("premium");
	const [sortOrder, setSortOrder] = useState("asc");

	if (!plans || !plans.length) {
		return <p>No plans available.</p>;
	}

	// Sorting logic
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

	const handleSort = (key) => {
		if (sortKey === key) {
			setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
		} else {
			setSortKey(key);
			setSortOrder("asc");
		}
	};

	return (
		<Table>
			<thead>
				<tr>
					<TableHeader>Choose</TableHeader>
					<TableHeader onClick={() => handleSort("name")}>
						<HeaderContent>
							Plan Name <InfoIcon>ⓘ</InfoIcon>
						</HeaderContent>
						<Tooltip>Click to sort plans alphabetically.</Tooltip>
					</TableHeader>
					<TableHeader onClick={() => handleSort("premium")}>
						<HeaderContent>
							Premium <InfoIcon>ⓘ</InfoIcon>
						</HeaderContent>
						<Tooltip>Click to sort by monthly premium.</Tooltip>
					</TableHeader>
					<TableHeader onClick={() => handleSort("deductibles")}>
						<HeaderContent>
							Deductible<InfoIcon> ⓘ</InfoIcon>
						</HeaderContent>
						<Tooltip>Click to sort by deductible amount.</Tooltip>
					</TableHeader>
					<TableHeader onClick={() => handleSort("moops")}>
						<HeaderContent>
							Out of Pocket Max <InfoIcon> ⓘ</InfoIcon>
						</HeaderContent>
						<Tooltip>Click to sort by max out-of-pocket cost.</Tooltip>
					</TableHeader>
					<TableHeader onClick={() => handleSort("network_tier")}>
						<HeaderContent>
							Network <InfoIcon> ⓘ</InfoIcon>
							<Tooltip>Click to sort by network type.</Tooltip>
						</HeaderContent>
					</TableHeader>
					<TableHeader onClick={() => handleSort("hsa_eligible")}>
						<HeaderContent>
            HSA Eligible <InfoIcon> ⓘ</InfoIcon>
            </HeaderContent>
						<Tooltip>Click to sort by HSA eligibility.</Tooltip>
					</TableHeader>
				</tr>
			</thead>
			<tbody>
				{sortedPlans.map((plan) => (
					<tr
						key={plan.id}
						onClick={() => (window.location.href = `/plan/${plan.id}`)}
						style={{ cursor: "pointer" }}>
						<td>
							<input
								type="checkbox"
								checked={selectedPlans.some((p) => p.id === plan.id)}
								onChange={() => onTogglePlan(plan)}
							/>
						</td>
						<td>
							<b>{plan.name || "N/A"}</b>
						</td>
						<td>{plan.premium !== undefined ? `$${plan.premium}` : "N/A"}</td>
						<td>${plan.deductibles?.[0]?.amount || "N/A"}</td>
						<td>${plan.moops?.[0]?.amount || "N/A"}</td>
						<td>{plan.network_tier || "N/A"}</td>
						<td>{plan.hsa_eligible ? "Yes" : "No"}</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
};

ComparisonTable.propTypes = {
	plans: propTypes.array.isRequired,
	selectedPlans: propTypes.array,
	onTogglePlan: propTypes.func.isRequired,
};

ComparisonTable.defaultProps = {
	selectedPlans: [],
};

export default ComparisonTable;
