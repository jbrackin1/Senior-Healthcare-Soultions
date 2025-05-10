
// Testimonials.js
/** @format */

// src/pages/Testimonials.js
import React from "react";
import styled from "styled-components";

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

const TestimonialsContainer = styled.main`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  color: ${({ theme }) => theme.colors.text};
  font-family: 'Open Sans', sans-serif;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-family: 'Libre Baskerville', serif;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.accent};
`;

const TestimonialCard = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 1.5rem;
  margin-bottom: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const TestimonialText = styled.p`
  font-size: 1rem;
  font-style: italic;
  margin-bottom: 1rem;
`;

const TestimonialAuthor = styled.p`
	font-size: 1.1rem;
	font-weight: bold;
	color: ${({ theme }) => theme.colors.text || "#333"};
`;

const TestimonialSource = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

// Testimonials Component
const Testimonials = () => {
  // Mock Data for Testimonials
  const testimonialsData = [
    {
      text: "This service made it incredibly easy to find the best insurance for my family. Highly recommend!",
      author: "Jane Doe",
      source: "Customer",
    },
    {
      text: "I saved so much time and money by comparing insurance plans here. Excellent platform!",
      author: "John Smith",
      source: "User",
    },
    {
      text: "The process was smooth, and the customer service was top-notch. I'll be telling all my friends!",
      author: "Emily Johnson",
      source: "Satisfied Customer",
    },
  ];

  return (
		<BackgroundContainer>
			<TestimonialsContainer>
				<SectionTitle>User Testimonials</SectionTitle>
				{testimonialsData.map((testimonial, index) => (
					<TestimonialCard key={index}>
						<TestimonialText>"{testimonial.text}"</TestimonialText>
						<TestimonialAuthor>- {testimonial.author}</TestimonialAuthor>
						<TestimonialSource>{testimonial.source}</TestimonialSource>
					</TestimonialCard>
				))}
			</TestimonialsContainer>
		</BackgroundContainer>
	);
};

export default Testimonials;


//Optional - Dedicated page for user testimonials,
// case studies, or success stories.
// In the future: Replace the mock data with actual data fetched from a backend or CMS.

