/** @format */

// src/components/Admin/UserManagement.js
import React, { useState, useEffect } from "react";
import { Table } from "react-table";
import styled from "styled-components";
import Button from "../Global/button";

const UserManagementContainer = styled.div`
	padding: 2rem;
	background-color: ${({ theme }) => theme.colors.backgroundAlt};
	color: ${({ theme }) => theme.colors.text};
	border-radius: 8px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	margin-top: 1.5rem;
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

	const handleRoleChange = (userId, newRole) => {
		// Handle role change logic here
	};

	return (
		<UserManagementContainer>
			<h2>User Management</h2>
			<Table
				data={users}
				columns={[
					{ Header: "Name", accessor: "name" },
					{ Header: "Email", accessor: "email" },
					{ Header: "Role", accessor: "role" },
					{
						Header: "Actions",
						accessor: "id",
						Cell: ({ value }) => (
							<div>
								<Button onClick={() => handleRoleChange(value, "Admin")}>
									Make Admin
								</Button>
								<Button onClick={() => handleRoleChange(value, "User")}>
									Make User
								</Button>
							</div>
						),
					},
				]}
			/>
		</UserManagementContainer>
	);
};

export default UserManagement;
