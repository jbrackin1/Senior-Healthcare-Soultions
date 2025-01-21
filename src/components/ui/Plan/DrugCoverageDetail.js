/** @format */

const DrugCoverageDetail = ({ selectedPlans }) => {
	const colors = ["#1E90FF", "#800080", "#FF7F50", "#008080"];

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
