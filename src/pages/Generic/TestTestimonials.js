/** @format */

// src/pages/TestTestimonials.js
import React from "react";
import styled from "styled-components";
import Testimonials from "./Testimonials"; 

// Styled Components (Optional)
const TestPageContainer = styled.div`
	padding: 2rem;
	background-color: ${({ theme }) => theme.colors.background};
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const TestPageTitle = styled.h1`
	font-family: "Libre Baskerville", serif;
	font-size: 2.5rem;
	color: ${({ theme }) => theme.colors.primary};
	margin-bottom: 2rem;
`;

// Test Page Component
const TestTestimonials = () => {
	return (
		<TestPageContainer>
			<TestPageTitle>Test Page for User Testimonials</TestPageTitle>
			<Testimonials />
		</TestPageContainer>
	);
};

export default TestTestimonials;
