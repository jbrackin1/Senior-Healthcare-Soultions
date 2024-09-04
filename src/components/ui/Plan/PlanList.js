/** @format */

// src/components/Plan/PlanList.js
import React from "react";
import PlanCard from "./PlanCard";

const PlanList = ({ plans, onFavoriteToggle, favorites }) => {
	return (
		<div>
			{plans.map((plan) => (
				<PlanCard
					key={plan.id}
					plan={plan}
					onFavoriteToggle={onFavoriteToggle}
					isFavorite={favorites.includes(plan.id)}
				/>
			))}
		</div>
	);
};

export default PlanList;
