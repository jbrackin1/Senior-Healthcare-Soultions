/** @format */

// src/pages/Dash.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserManagement from "../../components/ui/Admin/UserManagement";
import EditDocument from "../../components/ui/Admin/EditDocs";
import AdminBlog from "../../components/ui/Admin/AdminBlog";
import AnalyticsChart from "../../components/ui/Admin/AnalyticsChart";
import Settings from "../../components/ui/Admin/Settings";
import Button from "../../components/ui/Global/button";

// Styled Components for Dashboard Layout
const DashboardContainer = styled.main`
	display: flex;
	flex-direction: column;
	padding: 2rem;
	background-color: ${({ theme }) => theme.colors.backgroundAlt};
	color: ${({ theme }) => theme.colors.text};
	font-family: "Open Sans", sans-serif;
	min-height: 100vh;
`;

const Section = styled.section`
	margin-bottom: 2rem;
	padding: 1.5rem;
	border: 1px solid ${({ theme }) => theme.colors.border};
	border-radius: 8px;
	background-color: ${({ theme }) => theme.colors.background};
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
	font-family: "Libre Baskerville", serif;
	font-size: 1.8rem;
	margin-bottom: 1rem;
	color: ${({ theme }) => theme.colors.accent};
`;

const AdminButton = styled(Button)`
	margin-top: 1rem;
	background-color: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.backgroundAlt};
	&:hover {
		background-color: ${({ theme }) => theme.colors.accent};
	}
`;

const DashboardGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	gap: 2rem;
`;

const NavigationMenu = styled.div`
	margin-bottom: 2rem;
	padding: 1rem;
	border-radius: 8px;
	background-color: ${({ theme }) => theme.colors.background};
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	display: flex;
	justify-content: space-around;
`;

const NavButton = styled(Button)`
	background-color: ${({ active }) =>
		active
			? ({ theme }) => theme.colors.accent
			: ({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.backgroundAlt};
	&:hover {
		background-color: ${({ theme }) => theme.colors.accent};
	}
`;

function Dash() {
	const [activeSection, setActiveSection] = useState("user-management");
	const navigate = useNavigate();

	const handleNavigation = (section) => {
		setActiveSection(section);
	};

	return (
		<DashboardContainer>
			{/* Navigation Menu */}
			<NavigationMenu>
				<NavButton
					active={activeSection === "user-management"}
					onClick={() => handleNavigation("user-management")}>
					User Management
				</NavButton>
				<NavButton
					active={activeSection === "content-management"}
					onClick={() => handleNavigation("content-management")}>
					Content Management
				</NavButton>
				<NavButton
					active={activeSection === "analytics"}
					onClick={() => handleNavigation("analytics")}>
					Analytics & Reports
				</NavButton>
				<NavButton
					active={activeSection === "settings"}
					onClick={() => handleNavigation("settings")}>
					Settings
				</NavButton>
			</NavigationMenu>

			<DashboardGrid>
				{/* Conditionally Render Components Based on Active Section */}
				{activeSection === "user-management" && (
					<Section>
						<SectionTitle>User Management</SectionTitle>
						<UserManagement />
					</Section>
				)}

				{activeSection === "content-management" && (
					<Section>
						<SectionTitle>Content Management</SectionTitle>
						<AdminBlog />
						<EditDocument documentType="Privacy Policy" />
					</Section>
				)}

				{activeSection === "analytics" && (
					<Section>
						<SectionTitle>Analytics and Reports</SectionTitle>
						<AnalyticsChart />
					</Section>
				)}

				{activeSection === "settings" && (
					<Section>
						<SectionTitle>Settings and Configurations</SectionTitle>
						<Settings />
					</Section>
				)}
			</DashboardGrid>
		</DashboardContainer>
	);
}

export default Dash;
