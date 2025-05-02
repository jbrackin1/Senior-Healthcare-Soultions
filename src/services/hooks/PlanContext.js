/** @format */
// hooks/PlanContext.js

import React, { createContext, useState } from "react";

export const PlanContext = createContext();

export const PlanProvider = ({ children }) => {
	const [plans, setPlans] = useState([]);

	return (
		<PlanContext.Provider value={{ plans, setPlans }}>
			{children}
		</PlanContext.Provider>
	);
};
