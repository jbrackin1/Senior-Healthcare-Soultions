/** @format */

// src/pages/Login.js
import React, { useState } from "react";
import styled from "styled-components";
import button from "../components/ui/Global/button";
import Input from "../components/ui/Global/Input";

// Styled Components
const LoginContainer = styled.main`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background-image: url("/assets/images/BlueBackground.jpeg"); /* Background image for the login page */
	background-size: cover; /* Cover the entire background area */
	background-position: center; /* Center the background image */
	background-repeat: no-repeat; /* Prevents the image from repeating */
	color: ${({ theme }) => theme.colors.text};
`;

const LoginForm = styled.form`
	background-color: rgba(
		255,
		255,
		255,
		0.8
	); /* Semi-transparent white background for contrast */
	padding: 2rem;
	border-radius: 8px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	display: flex;
	flex-direction: column;
	width: 300px;
	text-align: center;
`;

const LoginTitle = styled.h2`
	font-family: "Libre Baskerville", serif;
	font-size: 2rem;
	margin-bottom: 1.5rem;
	color: ${({ theme }) => theme.colors.primary};
`;

const StyledInput = styled(Input)`
	margin-bottom: 1rem;
`;

const Styledbutton = styled(button)`
	margin-top: 1rem;
	background-color: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.backgroundAlt};
	&:hover {
		background-color: ${({ theme }) => theme.colors.accent};
	}
`;

// Login Component
function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle login logic here, e.g., send credentials to the server
		alert(`Logging in with ${email}`);
	};

	return (
		<LoginContainer>
			<LoginForm onSubmit={handleSubmit}>
				<LoginTitle>Login</LoginTitle>
				<StyledInput
					type="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
				<StyledInput
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
				<Styledbutton type="submit">Login</Styledbutton>
			</LoginForm>
		</LoginContainer>
	);
}

export default Login;
