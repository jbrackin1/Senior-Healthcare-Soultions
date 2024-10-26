/** @format */

// src/pages/Profile.js
import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../components/ui/Global/button";
import Input from "../../components/ui/Global/Input";

// Styled Components
const ProfileContainer = styled.main`
	padding: 2rem;
	background-color: ${({ theme }) => theme.colors.backgroundAlt};
	color: ${({ theme }) => theme.colors.text};
	font-family: "Open Sans", sans-serif;
	line-height: 1.6;
	max-width: 600px;
	margin: 2rem auto;
	border-radius: 8px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
	font-family: "Libre Baskerville", serif;
	font-size: 1.8rem;
	margin-bottom: 1.5rem;
	color: ${({ theme }) => theme.colors.accent};
`;

const ProfileForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const SavedComparisonsSection = styled.div`
	margin-top: 2rem;
	padding: 1rem;
	border: 1px solid ${({ theme }) => theme.colors.border};
	border-radius: 5px;
	background-color: ${({ theme }) => theme.colors.background};
`;

const NotificationSettingsSection = styled.div`
	margin-top: 2rem;
	padding: 1rem;
	border: 1px solid ${({ theme }) => theme.colors.border};
	border-radius: 5px;
	background-color: ${({ theme }) => theme.colors.background};
`;

const StyledButton = styled(Button)`
	background-color: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.backgroundAlt};
	margin-top: 1rem;
	&:hover {
		background-color: ${({ theme }) => theme.colors.accent};
	}
`;

// Profile Component
function Profile() {
	// State to manage user data
	const [userData, setUserData] = useState({
		name: "John Doe",
		email: "john.doe@example.com",
		password: "",
	});

	// State to manage form inputs
	const [formData, setFormData] = useState({ ...userData });

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		setUserData({ ...formData });
		alert("Profile updated successfully!");
	};

	const handleLogout = () => {
		// Handle logout logic
		alert("You have been logged out.");
		// Future: Add logic to clear user session and redirect to login page
	};

	return (
		<ProfileContainer>
			{/* Personal Information Section */}
			<SectionTitle>Personal Information</SectionTitle>
			<ProfileForm onSubmit={handleFormSubmit}>
				<Input
					type="text"
					name="name"
					placeholder="Name"
					value={formData.name}
					onChange={handleInputChange}
					required
				/>
				<Input
					type="email"
					name="email"
					placeholder="Email"
					value={formData.email}
					onChange={handleInputChange}
					required
				/>
				<Input
					type="password"
					name="password"
					placeholder="Password"
					value={formData.password}
					onChange={handleInputChange}
					required
				/>
				<StyledButton type="submit">Update Profile</StyledButton>
			</ProfileForm>

			{/* Saved Comparisons Section */}
			<SavedComparisonsSection>
				<SectionTitle>Saved Comparisons</SectionTitle>
				<p>No saved insurance comparisons yet.</p>
				{/* Future implementation: Display saved comparisons dynamically */}
			</SavedComparisonsSection>

			{/* Notification Settings Section */}
			<NotificationSettingsSection>
				<SectionTitle>Notification Settings</SectionTitle>
				<p>Manage your notification preferences.</p>
				{/* Future implementation: Allow user to manage notifications */}
			</NotificationSettingsSection>

			{/* Logout Button */}
			<StyledButton onClick={handleLogout}>Logout</StyledButton>
		</ProfileContainer>
	);
}

export default Profile;

// Purpose: A user profile page for logged-in users to manage their details.
// Content:
// Personal Information: Display and update personal information
//(name, email, password).
// Saved Comparisons: A section to view and manage
//saved insurance comparisons.
// Notification Settings: Manage notifications and preferences.
// Logout: Option to securely log out.
