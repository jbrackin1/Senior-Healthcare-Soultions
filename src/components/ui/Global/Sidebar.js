// /** @format */

// // src/components/ui/Global/Sidebar.js

// import React from "react";
// import styled from "styled-components";
// import { Link } from "react-router-dom";

// // Styled Components for Sidebar
// const SidebarContainer = styled.aside`
// 	width: 200px;
// 	padding: 20px;
// 	background-color: #f8f8f8;
// 	border-right: 1px solid #ddd;
// 	position: fixed;
// 	top: 80px; /* Adjust depending on header height */
// 	left: 0;
// 	height: 100%;
// `;

// const SidebarMenu = styled.ul`
// 	list-style: none;
// 	padding: 0;
// `;

// const SidebarMenuItem = styled.li`
// 	margin-bottom: 10px;
// `;

// const SidebarLink = styled(Link)`
// 	text-decoration: none;
// 	color: #333;
// 	font-weight: bold;

// 	&:hover {
// 		color: #000;
// 	}
// `;

// // Sidebar Component
// function Sidebar() {
// 	return (
// 		<SidebarContainer>
// 			<h3>Menu</h3>
// 			<SidebarMenu>
// 				<SidebarMenuItem>
// 					<SidebarLink to="/">Home</SidebarLink>
// 				</SidebarMenuItem>
// 				<SidebarMenuItem>
// 					<SidebarLink to="/about">About</SidebarLink>
// 				</SidebarMenuItem>
// 				<SidebarMenuItem>
// 					<SidebarLink to="/contact">Contact</SidebarLink>
// 				</SidebarMenuItem>
// 			</SidebarMenu>
// 		</SidebarContainer>
// 	);
// }

// export default Sidebar;
