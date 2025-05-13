/** @format */

// src/pages/Generic/BlogPost.js
import React from "react";
import { useParams, Navigate } from "react-router-dom";
import styled from "styled-components";
import { blogPosts } from "../data/blogData";

// Styled components
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

const BlogPostTitle = styled.h2`
	font-family: "Libre Baskerville", serif;
	font-size: 2rem;
	color: ${({ theme }) => theme.colors.accent};
	margin-bottom: 1rem;
	text-align: center;
	max-width: 800px;
	margin: auto;
`;

	h4 {
		margin-top: 1.5rem;
		font-weight: bold;
	}

	ul {
		list-style: disc;
		margin-left: 1.5rem;
	}

	p {
		margin-bottom: 1rem;
	}

	table {
		width: 100%;
		border-collapse: collapse;
		margin-top: 1rem;
	}
	th,
	td {
		border: 1px solid #ccc;
		padding: 0.5rem;
		text-align: left;
	}
	th {
		background-color: ${({ theme }) => theme.colors.background};
	}
`;

const BlogPost = () => {
	const { slug } = useParams();
	const post = blogPosts.find((p) => p.slug === slug);

	if (!post) return <Navigate to="/blog" />;

	return (
		<BlogContainer>
			<BlogPostTitle>{post.title}</BlogPostTitle>
			<BlogPostContent dangerouslySetInnerHTML={{ __html: post.content }} />
		</BlogContainer>
	);
};

export default BlogPost;

