/** @format */

// src/components/common/Collapsible.js

/** @format */

import React, { useState } from "react";
import styled from "styled-components";
import { ChevronDown, ChevronRight } from "lucide-react"; // optional icons

const CollapsibleWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border || "#ccc"};
  border-radius: 8px;
  margin: 1.5rem 0;
  background: ${({ theme }) => theme.colors.backgroundAlt || "#f9f9f9"};
`;

const ToggleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.25rem;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.background || "#fff"};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border || "#ddd"};
  border-radius: 8px 8px 0 0;
`;

const Content = styled.div`
  padding: 1.25rem;
  animation: fadeIn 0.3s ease;

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
				{title}
				{isOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
			</ToggleHeader>
			{isOpen && <Content>{children}</Content>}
		</CollapsibleWrapper>
	);
};

export default Collapsible;
