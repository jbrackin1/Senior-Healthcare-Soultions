/** @format */
import React from "react";

const Tooltip = ({ title }) => (
	<span
		style={{
			color: "#888",
			cursor: "help",
			fontSize: "0.85rem",
			marginLeft: "0.25rem",
		}}
		title={title}>
		ℹ️
	</span>
);

export default Tooltip;
