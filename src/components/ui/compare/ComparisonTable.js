/** @format */

import React from "react";
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

const ComparisonTable = ({ plans, selectedPlans = [], onTogglePlan }) => {
  if (!plans || !plans.length) {
    return <p>No plans available.</p>;
  }

  return (
    <Table>
      <thead>
        <tr>
          <TableHeader>Choose</TableHeader>
          <TableHeader>Plan Name</TableHeader>
          <TableHeader>Premium</TableHeader>
          <TableHeader>Deductible</TableHeader>
          <TableHeader>Out of Pocket Max</TableHeader>
          <TableHeader>Network</TableHeader>
          <TableHeader>HSA Eligible</TableHeader>
        </tr>
      </thead>
      <tbody>
        {plans.map((plan) => (
          <tr key={plan.id}>
            <td>
              <input
                type="checkbox"
                checked={selectedPlans.some((p) => p.id === plan.id)}
                onChange={() => onTogglePlan(plan)}
              />
            </td>
            <td>{plan.name || "N/A"}</td>
            <td>{plan.premium !== undefined ? `$${plan.premium}` : "N/A"}</td>
            <td>${plan.deductibles[0]?.amount || "N/A"}</td>
            <td>${plan.moops[0]?.amount || "N/A"}</td>
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
	onSort: propTypes.func.isRequired,
};

ComparisonTable.defaultProps = {
	selectedPlans: [],
};

export default ComparisonTable;
