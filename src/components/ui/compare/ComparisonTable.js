/** @format */
import React, { useState } from "react";
import styled from "styled-components";

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
`;

const TableData = styled.td`
	padding: 1rem;
	border-bottom: 1px solid ${({ theme }) => theme.colors.border};
	text-align: center;
	background-color: ${({ theme }) => theme.colors.background};
	color: ${({ theme }) => theme.colors.text};
`;

const ComparisonTable = ({ plans }) => {
	const [sortKey, setSortKey] = useState("premium");

	if (!plans || !plans.length) {
		console.log("No plans available");
		return <p>No plans available.</p>;
	}

	// Debug: Log plans array
	console.log("Plans:", plans);

	// Filter recommended plans
	const recommendedPlans = plans.filter(
		(plan) => plan.premium < 300 && plan.deductibles[0]?.amount <= 5000
	);

	// Debug: Log recommended plans
	console.log("Recommended Plans:", recommendedPlans);

	// Sort plans dynamically based on sortKey
	const sortedPlans = [...recommendedPlans].sort((a, b) => {
		if (sortKey === "deductibles") {
			const aDeductible = a.deductibles[0]?.amount || 0;
			const bDeductible = b.deductibles[0]?.amount || 0;
			return aDeductible - bDeductible;
		}
		return a[sortKey] - b[sortKey];
	});

	// Debug: Log sorted plans
	console.log("Sorted Plans:", sortedPlans);

	return (
		<Table>
			<thead>
				<tr>
					<TableHeader>Plan Name</TableHeader>
					<TableHeader>Premium</TableHeader>
					<TableHeader>Deductible</TableHeader>
					<TableHeader>Out of Pocket Max</TableHeader>
					<TableHeader>Network</TableHeader>
					<TableHeader>HSA Eligible</TableHeader>
				</tr>
			</thead>
			<tbody>
				{sortedPlans.map((plan) => (
					<tr key={plan.id}>
						<TableData>{plan.name || "N/A"}</TableData>
						<TableData>
							{plan.premium !== undefined ? `$${plan.premium}` : "N/A"}
						</TableData>
						<TableData>{plan.deductibles[0]?.amount || "N/A"}</TableData>
						<TableData>{plan.moops[0]?.amount || "N/A"}</TableData>
						<TableData>{plan.network_tier || "N/A"}</TableData>
						<TableData>{plan.hsa_eligible ? "Yes" : "No"}</TableData>
					</tr>
				))}
			</tbody>
		</Table>
	);
};

export default ComparisonTable;
