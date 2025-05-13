/** @format */

// src/pages/Generic/BlogPost.js
import React from "react";
import { useParams, Navigate } from "react-router-dom";
import styled from "styled-components";
import { blogPosts } from "../data/blogData";

const BlogContainer = styled.main`
	padding: 2rem;
	background-color: ${({ theme }) => theme.colors.backgroundAlt};
	color: ${({ theme }) => theme.colors.text};
	max-width: 800px;
	margin: auto;
`;

const BlogPostTitle = styled.h2`
	font-size: 2rem;
	color: ${({ theme }) => theme.colors.accent};
	margin-bottom: 1rem;
`;

const BlogPostContent = styled.div`
	font-size: 1rem;
	line-height: 1.7;
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
