/** @format */

// src/components/Admin/UserManagement.js
import React, { useState, useEffect } from "react";
import { useTable } from "react-table";
import styled from "styled-components";
import button from "../Global/button";

const UserManagementContainer = styled.div`
	padding: 2rem;
	background-color: ${({ theme }) => theme.colors.backgroundAlt};
	color: ${({ theme }) => theme.colors.text};
	border-radius: 8px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	margin-top: 1.5rem;
`;

const TableContainer = styled.table`
	width: 100%;
	border-collapse: collapse;
	margin-top: 1rem;

	th,
	td {
		padding: 0.75rem;
		border: 1px solid #ddd;
		text-align: left;
	}

	th {
		background-color: ${({ theme }) => theme.colors.primary};
		color: white;
	}
`;

const UserManagement = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const fetchUsers = async () => {
			const response = await fetch("/api/users");
			const data = await response.json();
			setUsers(data);
		};
		fetchUsers();
	}, []);

	const data = React.useMemo(() => users, [users]);

	const columns = React.useMemo(
		() => [
			{ Header: "Name", accessor: "name" },
			{ Header: "Email", accessor: "email" },
			{ Header: "Role", accessor: "role" },
			{
				Header: "Actions",
				accessor: "id",
				Cell: ({ row }) => (
					<div>
						<button onClick={() => handleRoleChange(row.original.id, "Admin")}>
							Make Admin
						</button>
						<button onClick={() => handleRoleChange(row.original.id, "User")}>
							Make User
						</button>
					</div>
				),
			},
		],
		[]
	);

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		useTable({ columns, data });

	const handleRoleChange = (userId, newRole) => {
		// Handle role change logic here
	};

	return (
		<UserManagementContainer>
			<h2>User Management</h2>
			<TableContainer {...getTableProps()}>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th {...column.getHeaderProps()}>{column.render("Header")}</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{rows.map((row) => {
						prepareRow(row);
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map((cell) => (
									<td {...cell.getCellProps()}>{cell.render("Cell")}</td>
								))}
							</tr>
						);
					})}
				</tbody>
			</TableContainer>
		</UserManagementContainer>
	);
};

export default UserManagement;
