/** @format */

import React, { useState } from "react";
import styled from "styled-components";
import { ChevronDown, ChevronRight } from "lucide-react";

const CollapsibleWrapper = styled.div`
	border: 2px solid ${({ theme }) => theme.colors.darkGray};
	border-radius: 12px;
	margin: 2rem auto;
	background: linear-gradient(
		to bottom right,
		${({ theme }) => theme.colors.backgroundAlt || "#f9f9f9"} 30%,
		transparent 70%
	);
	box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);
	max-width: 900px;
	overflow: hidden;
`;

const ToggleHeader = styled.button`
	width: 100%;
	font-family: "Open Sans", sans-serif;
	font-size: 1.5rem;
	font-weight: bold;
	color: ${({ theme }) => theme.colors.text};
	background: none;
	border: none;
	cursor: pointer;
	padding: 1rem 1.25rem;
	text-align: left;
	display: flex;
	align-items: center;
	justify-content: space-between;
	transition: background 0.3s ease;

	&:hover {
		background: ${({ theme }) => theme.colors.lightGray || "#eee"};
		color: ${({ theme }) => theme.colors.lightBlue || "#51BFE4"};
	}

	svg {
		transition: transform 0.3s ease;
		stroke: ${({ theme }) => theme.colors.text};
	}

	&[aria-expanded="true"] svg {
		transform: rotate(180deg);
	}
`;

const Content = styled.div`
	padding: 1.25rem 1.5rem;
	animation: fadeIn 0.25s ease;
	background-color: ${({ theme }) => theme.colors.background || "#fff"};

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(-5px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
`;

const Collapsible = ({ title, children }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<CollapsibleWrapper>
			<ToggleHeader onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen}>
				<span>{title}</span>
				{isOpen ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
			</ToggleHeader>
			{isOpen && <Content>{children}</Content>}
		</CollapsibleWrapper>
	);
};

export default Collapsible;
