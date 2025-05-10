
/** @format */

// src/pages/Blog.js
import React, { useState, useEffect } from "react";
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

const BlogContainer = styled.main`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  color: ${({ theme }) => theme.colors.text};
  font-family: "Open Sans", sans-serif;
  line-height: 1.6;
  max-width: 800px;
  margin: 2rem auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-family: "Libre Baskerville", serif;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.accent};
  text-align: center;
`;

const BlogPostContainer = styled.div`
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const BlogPostTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.accent};
`;

const BlogPostContent = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

// Blog Component
const Blog = () => {
  const [posts, setPosts] = useState([]);

  // Simulated fetch from an API or backend
  useEffect(() => {
    // This is a placeholder for fetching posts from a backend or database
    const fetchPosts = () => {
      const mockPosts = [
        {
          title: "Understanding Health Insurance Basics",
          content:
            "Learn about the fundamentals of health insurance, including types, coverage, and choosing the right plan.",
        },
        {
          title: "5 Tips for Finding the Best Insurance Plan",
          content:
            "Discover the top tips to help you compare and choose the best insurance plan for you and your family.",
        },
        {
          title: "Wellness Tips for a Healthy Lifestyle",
          content:
            "Explore effective wellness tips to maintain a healthy lifestyle and prevent common health issues.",
        },
      ];
      setPosts(mockPosts);
    };

    fetchPosts();
  }, []);

  return (
		<BackgroundContainer>
			<BlogContainer>
				<SectionTitle>Our Blog</SectionTitle>

				{/* Display blog posts */}
				{posts.length === 0 ? (
					<p>
						No blog posts are available at the moment. Please check back later!
					</p>
				) : (
					posts.map((post, index) => (
						<BlogPostContainer key={index}>
							<BlogPostTitle>{post.title}</BlogPostTitle>
							<BlogPostContent>{post.content}</BlogPostContent>
						</BlogPostContainer>
					))
				)}
			</BlogContainer>
		</BackgroundContainer>
	);
};

export default Blog;

//Optional - Regularly updated content, articles, 
//news, or updates related to healthcare, insurance, and wellness.
//For future use if desired