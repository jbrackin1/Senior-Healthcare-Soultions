/** @format */

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { blogPosts } from "../data/blogData";


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
	cursor: pointer;

	a {
		color: inherit;
		text-decoration: underline;

		&:hover {
			text-decoration: none;
		}
	}
`;

const BlogPostContent = styled.p`
	font-size: 1rem;
	color: ${({ theme }) => theme.colors.text};
`;

// Blog Index Page
const Blog = () => {
	return (
		<BackgroundContainer>
			<BlogContainer>
				<SectionTitle>Our Blog</SectionTitle>
				{blogPosts.length === 0 ? (
					<p>No blog posts are available at the moment.</p>
				) : (
					blogPosts.map((post) => (
						<BlogPostContainer key={post.slug}>
							<BlogPostTitle>
								<Link to={`/blog/${post.slug}`}>{post.title}</Link>
							</BlogPostTitle>
							<BlogPostContent>
								{post.content.replace(/<[^>]+>/g, "").slice(0, 120)}...
							</BlogPostContent>
						</BlogPostContainer>
					))
				)}
			</BlogContainer>
		</BackgroundContainer>
	);
};

export default Blog;
