/** @format */

// Toggle.js
import React from "react";
import styled from "styled-components";

const StyledToggle = styled.div``;

const Switch = styled.div`
	width: 50px;
	height: 24px;
	background-color: ${({ $isOn }) => ($isOn ? "#333" : "#ccc")};
	border-radius: 24px;
	position: relative;
	cursor: pointer;

	&::before {
		content: "";
		position: absolute;
		left: ${({ $isOn }) => ($isOn ? "26px" : "2px")};
		top: 2px;
		width: 20px;
		height: 20px;
		background-color: white;
		border-radius: 50%;
		transition: left 0.25s;
	}
`;

const Toggle = ({ isOn, onToggle }) => {
	return <Switch $isOn={isOn} onClick={onToggle} />;
};

export default Toggle;
