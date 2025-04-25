/** @format */

import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const TableWrapper = styled.div`
	margin-bottom: 2rem;
`;

const TitleRow = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 0.5rem;
`;

const Title = styled.h4`
	color: ${({ theme }) => theme.colors.accent};
	font-size: 1.2rem;
`;

const FilterSelect = styled.select`
	padding: 0.25rem 0.5rem;
	font-size: 0.9rem;
`;

const Table = styled.table`
	width: 100%;
	border-collapse: collapse;
	background-color: ${({ theme }) => theme.colors.backgroundAlt};
	color: ${({ theme }) => theme.colors.text};
	font-size: 1rem;
`;

const TableHead = styled.th`
	text-align: left;
	padding: 0.75rem;
	background-color: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.textOnPrimary};
	border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const TableCell = styled.td`
	padding: 0.75rem;
	border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const TieredPlanInfoTable = ({ title, data }) => {
	const [filter, setFilter] = useState("all");

	if (!data || data.length === 0) return null;

	// Unique family types found in this dataset
	const familyTypes = Array.from(
		new Set(data.map((d) => d.family_cost || "Unknown"))
	);

	// Filter rows based on dropdown
	const filteredData =
		filter === "all" ? data : data.filter((row) => row.family_cost === filter);

	return (
		<TableWrapper>
			<TitleRow>
				<Title>{title}</Title>
				<FilterSelect
					value={filter}
					onChange={(e) => setFilter(e.target.value)}>
					<option value="all">Show All</option>
					{familyTypes.map((type, i) => (
						<option key={i} value={type}>
							{type}
						</option>
					))}
				</FilterSelect>
			</TitleRow>

			<Table>
				<thead>
					<tr>
						<TableHead>Tier</TableHead>
						<TableHead>Amount</TableHead>
						<TableHead>Family Type</TableHead>
					</tr>
				</thead>
				<tbody>
					{filteredData.map((tier, idx) => (
						<tr key={idx}>
							<TableCell>{tier.network_tier || `Tier ${idx + 1}`}</TableCell>
							<TableCell>
								{tier.amount !== undefined
									? `$${tier.amount.toLocaleString()}`
									: "N/A"}
							</TableCell>
							<TableCell>{tier.family_cost || "N/A"}</TableCell>Individual
							Family Per Person Family
						</tr>
					))}
				</tbody>
			</Table>
		</TableWrapper>
	);
};

TieredPlanInfoTable.propTypes = {
	title: PropTypes.string.isRequired,
	data: PropTypes.arrayOf(
		PropTypes.shape({
			network_tier: PropTypes.string,
			amount: PropTypes.number,
			family_cost: PropTypes.string,
		})
	),
};

export default TieredPlanInfoTable;
