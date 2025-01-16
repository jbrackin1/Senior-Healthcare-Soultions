/** @format */

const DrugCoverageDetail = ({ selectedPlans }) => {
	const colors = ["blue", "green", "red", "orange"];

	// Utility function to get color based on index
	const getColorByIndex = (index) => colors[index % colors.length];

	return (
		<div>
			{selectedPlans.map((plan, index) => (
				<p key={plan.id} style={{ color: getColorByIndex(index) }}>
					{plan.name}
				</p>
			))}
		</div>
	);
};

export default DrugCoverageDetail;
