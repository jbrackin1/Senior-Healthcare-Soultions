/** @format */

import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const TableWrapper = styled.div`
	width: 100%;
	max-width: 100%;
	overflow-x: auto;
	margin: 1rem 0;
	padding: 0;

	@media (max-width: 768px) {
		overflow-x: fixed;
		padding: 0;
	}
`;

const StyledTable = styled.table`
	width: 100%;
	border-collapse: collapse;
	font-size: 1.1rem;
	font-family: "Open Sans", sans-serif;
	background-color: ${({ theme }) => theme.colors.backgroundAlt || "#f8f9fa"};
	color: ${({ theme }) => theme.colors.text || "#000"};
	margin-top: 1rem;
	box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);

	th,
	td {
		padding: 0.75rem 1rem;
		text-align: left;
		border-bottom: 1px solid ${({ theme }) => theme.colors.border || "#ccc"};
		word-break: break-word; /* Prevent text from overflowing */
	}

	th {
		background-color: ${({ theme }) => theme.colors.primary || "#007BFF"};
		color: #13343E;
		font-family: "Libre Baskerville", serif;
		font-weight: bold;
		font-size: 1.3rem;
	}

	tr:nth-child(even) {
		background-color: ${({ theme }) => theme.colors.background || "#ffffff"};
	}

	tr:hover {
		background-color: ${({ theme }) => theme.colors.backgroundHover || "#eef6fb"};
	}

	}

	@media (max-width: 768px) {
		font-size: 1rem;
		th,
		td {
			padding: 0.5rem 0.75rem;
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
									{typeof cell === "object" && cell.label && cell.url ? (
										<a
											href={cell.url}
											target="_blank"
											rel="noopener noreferrer">
											{cell.label}
										</a>
									) : (
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
