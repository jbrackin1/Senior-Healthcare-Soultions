/** @format */

// src/components/Admin/EditDocs.js
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import button from "../Global/button";
import TextArea from "../Global/TextArea";

const EditDocumentContainer = styled.div`
	padding: 2rem;
	background-color: ${({ theme }) => theme.colors.backgroundAlt};
	color: ${({ theme }) => theme.colors.text};
	border-radius: 8px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	margin-top: 1.5rem;
`;

const EditDocument = ({ documentType }) => {
	const [content, setContent] = useState("");
	const [loading, setLoading] = useState(true);
	const [message, setMessage] = useState("");

	useEffect(() => {
		// Fetch current document content
		const fetchDocument = async () => {
			try {
				const response = await fetch(`/api/documents/${documentType}/`);
				const data = await response.json();
				setContent(data.content);
				setLoading(false);
			} catch (error) {
				console.error("Error fetching document:", error);
			}
		};

		fetchDocument();
	}, [documentType]);

	const handleSave = async () => {
		try {
			const response = await fetch(`/api/documents/${documentType}/`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ content }),
			});

			const result = await response.json();
			setMessage(result.message);
		} catch (error) {
			console.error("Error updating document:", error);
		}
	};

	return (
		<EditDocumentContainer>
			<h2>Edit {documentType.replace(/^\w/, (c) => c.toUpperCase())}</h2>
			{loading ? (
				<p>Loading...</p>
			) : (
				<>
					<TextArea
						value={content}
						onChange={(e) => setContent(e.target.value)}
					/>
					<button onClick={handleSave}>Save Changes</button>
					{message && <p>{message}</p>}
				</>
			)}
		</EditDocumentContainer>
	);
};

export default EditDocument;
