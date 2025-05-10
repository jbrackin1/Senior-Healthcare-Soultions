/** @format */

// src/components/Admin/AnalyticsChart.js
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

const AnalyticsChart = () => {
	const [chartData, setChartData] = useState({});

	useEffect(() => {
		const fetchAnalyticsData = async () => {
			const response = await fetch("/api/analytics"); // Django endpoint
			const data = await response.json();

			// Prepare data for chart.js
			setChartData({
				labels: data.labels,
				datasets: [
					{
						label: "User Engagement",
						data: data.values,
						backgroundColor: "rgba(75,192,192,0.6)",
					},
				],
			});
		};

		fetchAnalyticsData();
	}, []);

	return <Bar data={chartData} />;
};

export default AnalyticsChart;
