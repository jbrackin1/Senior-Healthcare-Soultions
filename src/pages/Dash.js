/** @format */

// src/pages/Dash.js
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/ui/Global/button";
import EditBlog from "../components/ui/Admin/EditBlog" 
import AnalyticsChart from "../components/ui/Admin/AnalyticsChart";
import EditDocs from "../components/ui/Admin/EditDocs"; 

// Styled Components
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

// Admin Dashboard Component
function Dash() {
	const navigate = useNavigate();

	const handleUserManagement = () => {
		alert("Navigating to User Management...");
	};

	const handleContentManagement = () => {
		// Navigate to AdminBlog component page
		navigate("/admin/blog");
	};

	const handleAnalyticsReports = () => {
		alert("Displaying Analytics and Reports...");
	};

	const handleSettings = () => {
		// Navigate to EditDocs component page
		navigate("/admin/settings");
	};

	return (
		<DashboardContainer>
			<SectionTitle>Admin Dashboard</SectionTitle>
			<DashboardGrid>
				{/* User Management Section */}
				<Section>
					<SectionTitle>User Management</SectionTitle>
					<p>Manage registered users, roles, permissions, and activity logs.</p>
					<AdminButton onClick={handleUserManagement}>Manage Users</AdminButton>
				</Section>

				{/* Content Management Section */}
				<Section>
					<SectionTitle>Content Management</SectionTitle>
					<p>
						Add, edit, or remove pages, blog posts, insurance plan data, FAQs,
						etc.
					</p>
					<AdminButton onClick={handleContentManagement}>
						Manage Blog
					</AdminButton>
                    <EditBlog />
                    <EditDocs />
				</Section>

				{/* Analytics and Reports Section */}
				<Section>
					<SectionTitle>Analytics and Reports</SectionTitle>
					<p>
						View site analytics, user engagement stats, and conversion metrics.
					</p>
					<AnalyticsChart />
					<AdminButton onClick={handleAnalyticsReports}>
						View Analytics
					</AdminButton>
				</Section>

				{/* Settings and Configurations Section */}
				<Section>
					<SectionTitle>Settings and Configurations</SectionTitle>
					<p>
						Configure site settings, privacy policies, and user notifications.
					</p>
					<AdminButton onClick={handleSettings}>Manage Settings</AdminButton>
				</Section>
			</DashboardGrid>
		</DashboardContainer>
	);
}

export default Dash;
