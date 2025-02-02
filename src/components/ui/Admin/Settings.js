/** @format */

// src/components/Admin/Settings.js
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import button from "../Global/button";

const SettingsContainer = styled.div`
	padding: 2rem;
	background-color: ${({ theme }) => theme.colors.backgroundAlt};
	color: ${({ theme }) => theme.colors.text};
	border-radius: 8px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	margin-top: 1.5rem;
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
			<h2>Site Settings</h2>
			<textarea
				value={settings.privacyPolicy}
				onChange={(e) =>
					setSettings({ ...settings, privacyPolicy: e.target.value })
				}
				placeholder="Privacy Policy Text"
			/>
			<input
				type="text"
				value={settings.contactInfo}
				onChange={(e) =>
					setSettings({ ...settings, contactInfo: e.target.value })
				}
				placeholder="Contact Information"
			/>
			<label>
				<input
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
			<button onClick={handleSaveSettings}>Save Settings</button>
		</SettingsContainer>
	);
};

export default Settings;
