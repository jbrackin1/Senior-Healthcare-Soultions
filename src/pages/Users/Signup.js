/** @format */

import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../components/ui/Global/everywhere/button";
import Input from "../../components/ui/Global/forms/Input";

const LoginSignupContainer = styled.main`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background-image: url("/assets/images/BlueBackground.jpeg");
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	color: ${({ theme }) => theme.colors.text};
`;

const FormContainer = styled.section`
	background-color: rgba(255, 255, 255, 0.95);
	padding: 2rem;
	border-radius: 8px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	display: flex;
	flex-direction: column;
	width: 320px;
	text-align: center;
`;

const FormTitle = styled.h1`
	font-family: "Libre Baskerville", serif;
	font-size: 2rem;
	margin-bottom: 1.5rem;
	color: ${({ theme }) => theme.colors.accent};
`;

const StyledInput = styled(Input)`
	margin-bottom: 1rem;
`;

const FullWidthButton = styled(Button)`
	width: 100%;
	margin-top: 1rem;
`;

const ToggleButton = styled.button`
	background: none;
	border: none;
	color: ${({ theme }) => theme.colors.accent};
	cursor: pointer;
	font-size: 0.9rem;
	margin-top: 1rem;

	&:hover {
		text-decoration: underline;
	}
`;

const ErrorText = styled.p`
	color: red;
	font-size: 0.875rem;
	text-align: left;
`;

function LoginSignup() {
	const [isLogin, setIsLogin] = useState(true);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		setLoading(true);

		try {
			if (isLogin) {
				alert(`Logging in with ${email}`);
			} else {
				alert(`Signing up with ${name} and ${email}`);
			}
		} catch (error) {
			setError("An error occurred. Please try again.");
		} finally {
			setLoading(false);
		}
	};

	const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

	return (
		<LoginSignupContainer role="main">
			<FormContainer aria-labelledby="form-title">
				<FormTitle id="form-title">{isLogin ? "Login" : "Sign Up"}</FormTitle>
				<form
					onSubmit={handleSubmit}
					aria-label={isLogin ? "Login form" : "Signup form"}>
					{!isLogin && (
						<div>
							<label htmlFor="name" className="sr-only">
								Name
							</label>
							<StyledInput
								id="name"
								name="name"
								type="text"
								placeholder="Name"
								value={name}
								onChange={(e) => setName(e.target.value)}
								required
								aria-required="true"
								aria-label="Name"
							/>
						</div>
					)}

					<div>
						<label htmlFor="email" className="sr-only">
							Email
						</label>
						<StyledInput
							id="email"
							name="email"
							type="email"
							placeholder="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
							aria-required="true"
							aria-label="Email"
						/>
						{!validateEmail(email) && email && (
							<ErrorText role="alert">Invalid email format</ErrorText>
						)}
					</div>

					<div>
						<label htmlFor="password" className="sr-only">
							Password
						</label>
						<StyledInput
							id="password"
							name="password"
							type="password"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
							aria-required="true"
							aria-label="Password"
						/>
					</div>

					{error && <ErrorText role="alert">{error}</ErrorText>}

					<FullWidthButton
						type="submit"
						disabled={loading}
						aria-disabled={loading}>
						{loading ? "Processing..." : isLogin ? "Login" : "Sign Up"}
					</FullWidthButton>
				</form>

				<ToggleButton
					onClick={() => setIsLogin(!isLogin)}
					aria-label={isLogin ? "Switch to signup" : "Switch to login"}>
					{isLogin
						? "Don't have an account? Sign Up"
						: "Already have an account? Login"}
				</ToggleButton>
			</FormContainer>
		</LoginSignupContainer>
	);
}

export default LoginSignup;
