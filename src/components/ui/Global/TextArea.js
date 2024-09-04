/** @format */

// src/components/ui/TextArea.js
import React from "react";
import styled from "styled-components";

const StyledTextArea = styled.textarea`
	padding: 0.5rem;
	margin-bottom: 1rem;
	border-radius: 4px;
	border: 1px solid ${({ theme }) => theme.colors.border};
	font-family: "Open Sans", sans-serif;
	font-size: 1rem;
	resize: vertical;
`;

const TextArea = (props) => {
	return <StyledTextArea {...props} />;
};

export default TextArea;
