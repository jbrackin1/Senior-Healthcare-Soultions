/** @format */

import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const TableWrapper = styled.div`
	margin-bottom: 2rem;
	overflow-x: auto;
`;

const StyledTable = styled.table`
	width: 100%;
	border-collapse: collapse;
	font-size: 1.2rem; /* Accessible text size */
	font-family: "Open Sans", sans-serif;
	color: ${({ theme }) => theme.colors.text || "#000"}; /* Black fallback */
	background-color: ${({ theme }) => theme.colors.backgroundAlt || "#f8f9fa"};
	min-width: 300px;
	margin-top: 1rem;
	box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);

	th,
	td {
		padding: 0.75rem 1rem;
		text-align: left;
		border-bottom: 1px solid ${({ theme }) => theme.colors.border || "#ccc"};
	}

	th {
		background-color: ${({ theme }) => theme.colors.primary || "#007BFF"};
		color: ${({ theme }) =>
			theme.colors.textOnPrimary || "#add8e6"}; /* Light blue */
		font-family: "Libre Baskerville", serif;
		font-weight: bold;
		font-size: 1.3rem;
	}

	tr:nth-child(even) {
		background-color: ${({ theme }) => theme.colors.background || "#ffffff"};
	}

	tr:hover {
		background-color: ${({ theme }) =>
			theme.colors.backgroundHover || "#eef6fb"};
	}

	a {
		color: ${({ theme }) =>
			theme.colors.accent || "#007BFF"}; /* Light blue links */
		text-decoration: underline;
		font-weight: 500;

		&:hover {
			color: #add8e6;
			text-decoration: underline;
		}
	}
`;

const ReusableTable = ({ headers, data }) => {
	return (
		<TableWrapper>
			<StyledTable>
				<thead>
					<tr>
						{headers.map((header, idx) => (
							<th key={idx}>{header}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.map((row, rowIdx) => (
						<tr key={rowIdx}>
							{row.map((cell, cellIdx) => (
								<td key={cellIdx}>
									{/* If the cell is an object with label and url, render a link */}
									{typeof cell === "object" && cell.label && cell.url ? (
										<a
											href={cell.url}
											target="_blank"
											rel="noopener noreferrer">
											{cell.label}
										</a>
									) : (
										// Else render plain text
										cell
									)}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</StyledTable>
		</TableWrapper>
	);
};

ReusableTable.propTypes = {
	headers: PropTypes.arrayOf(PropTypes.string).isRequired,
	data: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default ReusableTable;
