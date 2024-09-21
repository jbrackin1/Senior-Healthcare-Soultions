/** @format */

// src/components/common/Collapsible.js

import React, { useState } from "react";

const Collapsible = ({ title, children }) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div>
			<button onClick={handleToggle} aria-expanded={isOpen}>
				{isOpen ? "-" : "+"} {title}
			</button>
			{isOpen && <div>{children}</div>}
		</div>
	);
};

export default Collapsible;
