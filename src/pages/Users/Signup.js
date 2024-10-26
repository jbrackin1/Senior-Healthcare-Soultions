/** @format */

// src/pages/LoginSignup.js
import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../components/ui/Global/button";
import Input from "../../components/ui/Global/Input";

// Styled Components
const LoginSignupContainer = styled.main`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background-image: url("/assets/images/BlueBackground.jpeg"); /* Background image for the page */
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	color: ${({ theme }) => theme.colors.text};
`;

const FormContainer = styled.div`
	background-color: rgba(255, 255, 255, 0.8);
	padding: 2rem;
	border-radius: 8px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	display: flex;
	flex-direction: column;
	width: 300px;
	text-align: center;
`;

const FormTitle = styled.h2`
	font-family: "Libre Baskerville", serif;
	font-size: 2rem;
	margin-bottom: 1.5rem;
	color: ${({ theme }) => theme.colors.primary};
`;

const StyledInput = styled(Input)`
	margin-bottom: 1rem;
`;

const StyledButton = styled(Button)`
	margin-top: 1rem;
	background-color: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.backgroundAlt};
	&:hover {
		background-color: ${({ theme }) => theme.colors.accent};
	}
`;

const ToggleButton = styled.button`
	background: none;
	border: none;
	color: ${({ theme }) => theme.colors.primary};
	cursor: pointer;
	font-size: 0.9rem;
	margin-top: 1rem;

	&:hover {
		text-decoration: underline;
	}
`;

// LoginSignup Component
function LoginSignup() {
	const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (isLogin) {
			// Handle login logic here
			alert(`Logging in with ${email}`);
		} else {
			// Handle signup logic here
			alert(`Signing up with ${name} and ${email}`);
		}
	};

	return (
		<LoginSignupContainer>
			<FormContainer>
				<FormTitle>{isLogin ? "Login" : "Sign Up"}</FormTitle>
				<form onSubmit={handleSubmit}>
					{!isLogin && (
						<StyledInput
							type="text"
							placeholder="Name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
						/>
					)}
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
					<StyledButton type="submit">
						{isLogin ? "Login" : "Sign Up"}
					</StyledButton>
				</form>
				<ToggleButton onClick={() => setIsLogin(!isLogin)}>
					{isLogin
						? "Don't have an account? Sign Up"
						: "Already have an account? Login"}
				</ToggleButton>
			</FormContainer>
		</LoginSignupContainer>
	);
}

export default LoginSignup;
