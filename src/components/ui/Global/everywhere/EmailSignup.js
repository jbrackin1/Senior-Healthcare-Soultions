/** @format */

// src/components/EmailSignup.js

import React, { useState } from "react";
import styled from "styled-components";

// Styled Components
const SignupContainer = styled.div`
	padding: 20px;
	background-color: #f2f2f2;
	border: 1px solid #ddd;
	margin: 20px 0;
	text-align: center;
`;

const Input = styled.input`
	padding: 10px;
	margin-right: 10px;
	border: 1px solid #ccc;
	border-radius: 4px;
`;

const button = styled.button`
	padding: 10px 20px;
	background-color: #333;
	color: white;
	border: none;
	cursor: pointer;
	border-radius: 4px;

	&:hover {
		background-color: #555;
	}
`;

// Email Signup Component
function EmailSignup() {
	const [email, setEmail] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		// Here you would typically handle the form submission,
		// like sending the email to an API or backend server
		alert(`Thank you for subscribing with: ${email}`);
		setEmail(""); // Reset email field after submission
	};

	return (
		<SignupContainer>
			<form onSubmit={handleSubmit}>
				<Input
					type="email"
					placeholder="Enter your email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
				<button type="submit">Subscribe</button>
			</form>
		</SignupContainer>
	);
}

export default EmailSignup;
