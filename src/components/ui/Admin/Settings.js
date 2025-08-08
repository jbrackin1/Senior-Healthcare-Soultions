/** @format */

// src/components/Admin/Settings.js
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const SettingsContainer = styled.div`
	padding: 2rem;
	background-color: ${({ theme }) => theme.colors.backgroundAlt};
	color: ${({ theme }) => theme.colors.text};
	border-radius: 8px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	margin-top: 1.5rem;

	label {
		display: block;
		margin-bottom: 1rem;
		font-weight: bold;
	}

	textarea,
	input[type="text"] {
		width: 100%;
		margin-bottom: 1.5rem;
		padding: 0.75rem;
		font-size: 1rem;
		border: 1px solid #ccc;
		border-radius: 4px;
	}
`;

const Settings = () => {
	const [settings, setSettings] = useState({
		privacyPolicy: "",
		contactInfo: "",
		enableComments: false,
	});

	useEffect(() => {
		const fetchSettings = async () => {
			const response = await fetch("/api/settings");
			const data = await response.json();
			setSettings(data);
		};
		fetchSettings();
	}, []);

	const handleSaveSettings = async () => {
		try {
			const response = await fetch("/api/settings", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(settings),
			});
			const result = await response.json();
			alert(result.message);
		} catch (error) {
			console.error("Error saving settings:", error);
		}
	};

	return (
		<SettingsContainer>
			<h2 id="site-settings-heading">Site Settings</h2>
			<form
				aria-labelledby="site-settings-heading"
				onSubmit={(e) => {
					e.preventDefault();
					handleSaveSettings();
				}}>
				<label htmlFor="privacyPolicy">Privacy Policy Text</label>
				<textarea
					id="privacyPolicy"
					value={settings.privacyPolicy}
					onChange={(e) =>
						setSettings({ ...settings, privacyPolicy: e.target.value })
					}
					placeholder="Enter your privacy policy"
					aria-required="false"
				/>

				<label htmlFor="contactInfo">Contact Information</label>
				<input
					id="contactInfo"
					type="text"
					value={settings.contactInfo}
					onChange={(e) =>
						setSettings({ ...settings, contactInfo: e.target.value })
					}
					placeholder="Enter contact info"
					aria-required="false"
				/>

				<label htmlFor="enableComments">
					<input
						id="enableComments"
						type="checkbox"
						checked={settings.enableComments}
						onChange={() =>
							setSettings({
								...settings,
								enableComments: !settings.enableComments,
							})
						}
					/>
					Enable Comments
				</label>

				<button type="submit">Save Settings</button>
			</form>
		</SettingsContainer>
	);
};

export default Settings;
