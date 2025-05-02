/** @format */

// Users/ash/Desktop/NicolesProject/nicoles-app/src/components/ui/Admin/AdminBlog.js
import React, { useState } from "react";
import styled from "styled-components";
import button from "../Global/everywhere/button";
import Input from "../Global/forms/Input";

// Styled Components
const AdminBlogContainer = styled.main`
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
	font-size: 1.8rem;
	margin-bottom: 1.5rem;
	color: ${({ theme }) => theme.colors.accent};
	text-align: center;
`;

const BlogForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-bottom: 2rem;
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
	color: ${({ theme }) => theme.colors.primary};
`;

const BlogPostContent = styled.p`
	font-size: 1rem;
	color: ${({ theme }) => theme.colors.text};
`;

const BlogInput = styled(Input)`
	padding: 0.5rem;
	margin-bottom: 1rem;
`;

const BlogTextarea = styled.textarea`
	padding: 0.5rem;
	margin-bottom: 1rem;
	border-radius: 4px;
	border: 1px solid ${({ theme }) => theme.colors.border};
	font-family: "Open Sans", sans-serif;
	font-size: 1rem;
	resize: vertical;
`;

const Styledbutton = styled(button)`
	background-color: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.backgroundAlt};
	&:hover {
		background-color: ${({ theme }) => theme.colors.accent};
	}
`;

// Admin Blog Component
const AdminBlog = () => {
	const [posts, setPosts] = useState([]);
	const [formData, setFormData] = useState({
		title: "",
		content: "",
	});

	// Handle input change
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	// Handle form submission
	const handleFormSubmit = (e) => {
		e.preventDefault();
		if (formData.title.trim() === "" || formData.content.trim() === "") {
			alert("Please fill in both the title and content fields.");
			return;
		}
		setPosts((prevPosts) => [formData, ...prevPosts]); // Add new post to the beginning
		setFormData({ title: "", content: "" }); // Clear the form
	};

	// Handle delete post
	const handleDeletePost = (index) => {
		const updatedPosts = posts.filter((_, i) => i !== index);
		setPosts(updatedPosts);
	};

	const [previewMode, setPreviewMode] = useState(false);

	const togglePreviewMode = () => {
		setPreviewMode(!previewMode);
	};

	return (
		<AdminBlogContainer>
			<SectionTitle>Admin Blog Management</SectionTitle>
			{/* Form to add new blog post */}
			<BlogForm onSubmit={handleFormSubmit}>
				<BlogInput
					type="text"
					name="title"
					placeholder="Title"
					value={formData.title}
					onChange={handleInputChange}
					required
				/>
				<BlogTextarea
					name="content"
					placeholder="Write your content here..."
					rows="5"
					value={formData.content}
					onChange={handleInputChange}
					required
				/>
				<Styledbutton type="submit">Add Blog Post</Styledbutton>
			</BlogForm>

			{/* Display blog posts with admin controls */}
			{posts.length === 0 ? (
				<p>No blog posts yet. Start by adding one above!</p>
			) : (
				posts.map((post, index) => (
					<BlogPostContainer key={index}>
						<BlogPostTitle>{post.title}</BlogPostTitle>
						<BlogPostContent>{post.content}</BlogPostContent>
						<Styledbutton onClick={() => handleDeletePost(index)}>
							Delete Post
						</Styledbutton>
					</BlogPostContainer>
				))
			)}
		</AdminBlogContainer>
	);
};

export default AdminBlog;
