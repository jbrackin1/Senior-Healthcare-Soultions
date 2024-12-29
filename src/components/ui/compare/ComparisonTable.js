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
	const [sortOrder, setSortOrder] = useState("asc");
  
	// Check if plans exist
	if (!plans || !plans.length) {
	  console.log("No plans available");
	  return <p>No plans available.</p>;
	}
  
	// Debug: Log the plans array
	console.log("Plans:", plans);
  
	// Sort plans dynamically based on sortKey
	const sortedPlans = [...plans].sort((a, b) => {
	  let aValue = a[sortKey];
	  let bValue = b[sortKey];
  
	  // Handle deductibles and moops as arrays
	  if (sortKey === "deductibles") {
		aValue = a.deductibles[0]?.amount || 0;
		bValue = b.deductibles[0]?.amount || 0;
	  } else if (sortKey === "moops") {
		aValue = a.moops[0]?.amount || 0;
		bValue = b.moops[0]?.amount || 0;
	  }
  
	  // Ascending or descending order
	  if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
	  if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
	  return 0;
	});
  
	// Handle column sorting
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
			<TableHeader onClick={() => handleSort("name")}>Plan Name</TableHeader>
			<TableHeader onClick={() => handleSort("premium")}>Premium</TableHeader>
			<TableHeader onClick={() => handleSort("deductibles")}>Deductible</TableHeader>
			<TableHeader onClick={() => handleSort("moops")}>Out of Pocket Max</TableHeader>
			<TableHeader onClick={() => handleSort("network_tier")}>Network</TableHeader>
			<TableHeader onClick={() => handleSort("hsa_eligible")}>HSA Eligible</TableHeader>
		  </tr>
		</thead>
		<tbody>
		  {sortedPlans.length === 0 ? (
			<tr>
			  <td colSpan="6">No plans available to display.</td>
			</tr>
		  ) : (
			sortedPlans.map((plan) => (
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
			))
		  )}
		</tbody>
	  </Table>
	);
  };
  
  export default ComparisonTable;