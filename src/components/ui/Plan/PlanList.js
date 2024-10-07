/** @format */

import React from "react";
import PlanCard from "./PlanCard";
import { formatInsuranceList } from "../../../utils/formatData";

const PlanList = ({ plans, onFavoriteToggle, favorites }) => {
	// Format each plan in the list
	const formattedPlans = formatInsuranceList(plans);

	return (
		<div>
			{formattedPlans.map((plan) => (
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

