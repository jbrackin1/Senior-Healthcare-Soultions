/** @format */

// src/components/ui/modal.js
import React from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ModalContent = styled.div`
	background-color: ${({ theme }) => theme.colors.white};
	padding: ${({ theme }) => theme.spacing.large};
	border-radius: 8px;
	width: 500px;
	max-width: 90%;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Modal = ({ children, onClose }) => {
	return (
		<ModalOverlay onClick={onClose}>
			<ModalContent onClick={(e) => e.stopPropagation()}>
				{children}
			</ModalContent>
		</ModalOverlay>
	);
};

export default Modal;
