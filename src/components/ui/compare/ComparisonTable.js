/** @format */

// src/components/ComparePlans/ComparisonTable.js
import React from "react";
import styled from "styled-components";

const Table = styled.table`
	width: 100%;
	border-collapse: collapse;
	margin-top: 1rem;
`;

const TableHeader = styled.th`
	padding: 1rem;
	border-bottom: 2px solid ${({ theme }) => theme.colors.border};
	background-color: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.backgroundAlt};
`;

const TableData = styled.td`
	padding: 1rem;
	border-bottom: 1px solid ${({ theme }) => theme.colors.border};
	text-align: center;
`;

const ComparisonTable = ({ plans }) => {
	if (plans.length === 0) return null;

	return (
		<Table>
			<thead>
				<tr>
					<TableHeader>Plan Name</TableHeader>
					<TableHeader>Premium</TableHeader>
					<TableHeader>Deductible</TableHeader>
					{/* Add more headers as needed */}
				</tr>
			</thead>
			<tbody>
				{plans.map((plan) => (
					<tr key={plan.id}>
						<TableData>{plan.name}</TableData>
						<TableData>{plan.premium}</TableData>
						<TableData>{plan.deductible}</TableData>
						{/* Add more data as needed */}
					</tr>
				))}
			</tbody>
		</Table>
	);
};

export default ComparisonTable;
