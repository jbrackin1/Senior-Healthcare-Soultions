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
	background-color: rgba(0, 0, 0, 0.2);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000;
`;

const ModalContent = styled.div`
	background-color: rgba(
		255,
		255,
		255,
		0.8
	);
	padding: ${({ theme }) => theme.spacing.large || "2rem"};
	border-radius: 20px;
	width: 500px;
	max-width: 90%;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
	backdrop-filter: blur(8px);
	z-index: 1001;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
`;

const ModalHeading = styled.h2`
	margin: 0;
	line-height: 1;
	padding 0:
`;

const ModalParagraph = styled.p`
	margin: 0; 
	line-height: 1;
	padding 0:
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
