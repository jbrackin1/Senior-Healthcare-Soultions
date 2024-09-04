/** @format */

// src/components/ComparePlans/SearchBar.js
import React from "react";
import styled from "styled-components";
import Input from "../Global/Input";

const StyledSearchBar = styled(Input)`
	padding: 0.5rem;
	margin-bottom: 1.5rem;
	border-radius: 4px;
	border: 1px solid ${({ theme }) => theme.colors.border};
	width: 100%;
	font-size: 1rem;
`;

const SearchBar = ({ value, onChange }) => {
	return (
		<StyledSearchBar
			type="text"
			placeholder="Search for a plan..."
			value={value}
			onChange={onChange}
		/>
	);
};

export default SearchBar;
