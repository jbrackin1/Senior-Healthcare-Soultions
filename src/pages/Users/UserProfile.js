/** @format */

import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../components/ui/Global/everywhere/button";
import Input from "../../components/ui/Global/forms/Input";
import Dropdowns from "../../components/ui/Global/forms/Dropdowns";

// Styled Components

const BackgroundContainer = styled.div`
	background-image: url("/assets/images/MedicalWallpaper.webp");
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	background-size: cover;
	background-position: center;
`;

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

// Profile Component
function Profile() {
	const [userData, setUserData] = useState({
		name: "John Doe",
		email: "john.doe@example.com",
		password: "",
		age: "",
		sex: "",
		zipCode: "",
		income: "",
		householdSize: "",
		isVeteran: false,
	});

	const [formData, setFormData] = useState({ ...userData });

	const handleInputChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: type === "checkbox" ? checked : value,
		}));
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		setUserData({ ...formData });
		alert("Profile updated successfully!");
	};

	const handleLogout = () => {
		alert("You have been logged out.");
	};

	return (
		<BackgroundContainer>
			<ProfileContainer>
				<SectionTitle>Personal Information</SectionTitle>
				<ProfileForm onSubmit={handleFormSubmit}>
					<div>
						Name (Optional)
						<Input
							type="text"
							name="name"
							placeholder="Name (Optional)"
							value={formData.name}
							onChange={handleInputChange}
						/>
					</div>
					<div>
						{" "}
						Need to update to make this send to BE and states
						thisiswheretheychange their email, sameforpassword
						<Input
							type="email"
							name="email"
							placeholder="Email"
							value={formData.email}
							onChange={handleInputChange}
						/>
					</div>
					<Input
						type="password"
						name="password"
						placeholder="Change Password"
						value={formData.password}
						onChange={handleInputChange}
					/>
					<div>
						{" "}
						Enter your Age(Optional)
						<Input
							type="number"
							name="age"
							placeholder="Age"
							value={formData.age}
							onChange={handleInputChange}
						/>
					</div>
					<label>
						Sex:
						<Dropdowns
							name="sex"
							value={formData.sex}
							onChange={handleInputChange}
							options={["Male", "Female", "Other", "Prefer not to say"]}
						/>
					</label>
					<Input
						type="text"
						name="zipCode"
						placeholder="ZIP Code"
						value={formData.zipCode}
						onChange={handleInputChange}
					/>
					<label>
						Annual Income (Optional):
						<Dropdowns
							name="income"
							value={formData.income}
							onChange={handleInputChange}
							options={[
								"Below $25,000",
								"$25,000 - $50,000",
								"$50,000 - $75,000",
								"$75,000 - $100,000",
								"Above $100,000",
							]}
						/>
					</label>
					<div>
						{" "}
						Enter Household Size
						<Input
							type="number"
							name="householdSize"
							placeholder="Household Size (Optional)"
							value={formData.householdSize}
							onChange={handleInputChange}
						/>
					</div>
					<label
						style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
						<input
							type="checkbox"
							name="isVeteran"
							checked={formData.isVeteran}
							onChange={handleInputChange}
						/>
						<span>Are you a veteran? (Check the box if yes)</span>
					</label>
					<Button type="submit">Update Profile</Button>
				</ProfileForm>

				{/* <SavedComparisonsSection>
					<SectionTitle>Saved Comparisons</SectionTitle>
					<p>No saved insurance comparisons yet.</p>
				</SavedComparisonsSection>

				<NotificationSettingsSection>
					<SectionTitle>Notification Settings</SectionTitle>
					<p>Manage your notification preferences.</p>
				</NotificationSettingsSection> */}
				<div
					style={{
						gap: "0.5rem",
						margin: "1rem 0",
					}}>
					<button onClick={handleLogout}>Logout</button>
				</div>
			</ProfileContainer>
		</BackgroundContainer>
	);
}

export default Profile;

// TO DO:
// Logic for User Information:

// Missing state or logic to fetch and display user details (e.g., name, email, saved plan IDs).
// Could benefit from integrating an API call to retrieve user profile data.
// Authentication Check:

// Likely needs logic to verify if the user is signed in.
// If not signed in, it should redirect to a login page or show limited functionality.
// Plan ID Management:

// Should include logic to display and manage saved plan IDs.
// Options to add, remove, or view plan IDs if authenticated.
// Error Handling:

// Needs error messages or feedback for issues like "no profile data found."
// Mobile Responsiveness:

// While styled-components are used, mobile-specific styles (e.g., media queries) should be reviewed for accessibility.
// Integration:

// Needs to connect with state management (e.g., Context API, Redux) or backend API for real-time updates.
