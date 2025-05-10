/** @format */

// src/components/Feedback/Toast.js
import React, { useEffect } from "react";
import styled from "styled-components";

const ToastContainer = styled.div`
	position: fixed;
	top: 20px;
	right: 20px;
	background-color: ${({ theme, type }) =>
		type === "success" ? theme.colors.success : theme.colors.error};
	color: white;
	padding: 1rem;
	border-radius: 5px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	z-index: 1000;
	opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
	transition: opacity 0.5s ease;
`;

const Toast = ({ message, type, isVisible, onClose }) => {
	useEffect(() => {
		if (isVisible) {
			const timer = setTimeout(onClose, 3000); // Auto hide after 3 seconds
			return () => clearTimeout(timer);
		}
	}, [isVisible, onClose]);

	return (
		isVisible && (
			<ToastContainer type={type} isVisible={isVisible}>
				{message}
			</ToastContainer>
		)
	);
};

export default Toast;
