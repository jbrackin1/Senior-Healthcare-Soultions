/** @format */

import React from "react";
import styled from "styled-components";

const RangeWrapper = styled.div`
	margin: 1rem 0;
`;

const Label = styled.label`
	font-size: 0.9rem;
	font-weight: 600;
	color: ${({ theme }) => theme.colors.text};
	display: block;
	margin-bottom: 0.5rem;
`;

const SliderContainer = styled.div`
	position: relative;
	height: 2rem;
`;

const Slider = styled.input`
	-webkit-appearance: none;
	appearance: none;
	width: 100%;
	height: 6px;
	background: ${({ theme }) => theme.colors.grayLight || "#ccc"};
	border-radius: 999px;
	outline: none;
	position: absolute;
	pointer-events: none;

	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 16px;
		height: 16px;
		background: ${({ theme }) => theme.colors.primary || "#61dafb"};
		border-radius: 50%;
		cursor: pointer;
		box-shadow: 0 0 0 3px rgba(97, 218, 251, 0.4);
		pointer-events: auto;
	}

	&::-moz-range-thumb {
		width: 16px;
		height: 16px;
		background: ${({ theme }) => theme.colors.primary || "#61dafb"};
		border-radius: 50%;
		cursor: pointer;
		box-shadow: 0 0 0 3px rgba(97, 218, 251, 0.4);
		pointer-events: auto;
	}
`;

const RangeValues = styled.div`
	display: flex;
	justify-content: space-between;
	font-size: 0.85rem;
	color: ${({ theme }) => theme.colors.textSecondary || "#555"};
	margin-top: 0.25rem;
`;

const RangeSlider = ({ minPremium, maxPremium, setPremiumRange }) => {
	const handleMinChange = (e) => {
		const newMin = Math.min(+e.target.value, maxPremium - 100);
		setPremiumRange([newMin, maxPremium]);
	};

	const handleMaxChange = (e) => {
		const newMax = Math.max(+e.target.value, minPremium + 100);
		setPremiumRange([minPremium, newMax]);
	};

	return (
		<RangeWrapper>
			<Label>Premium Ranges</Label>
			<SliderContainer>
				<Slider
					type="range"
					min="200"
					max="1300"
					step="100"
					value={minPremium}
					onChange={handleMinChange}
				/>
				<Slider
					type="range"
					min="200"
					max="1300"
					step="100"
					value={maxPremium}
					onChange={handleMaxChange}
				/>
			</SliderContainer>
			<RangeValues>
				<span>${minPremium}</span>
				<span>${maxPremium}</span>
			</RangeValues>
		</RangeWrapper>
	);
};

export default RangeSlider;
