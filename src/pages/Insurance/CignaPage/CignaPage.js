/** @format */

// src/pages/Insurance/CignaProviderPage.js

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { fetchAllCignaData } from "../../../services/Api/Cigna";

const PageContainer = styled.div`
	padding: 2rem;
	background-color: #f5f5f5;
	color: #333;
	font-family: "Open Sans", sans-serif;
	min-height: 100vh;
`;

const Header = styled.h1`
	text-align: center;
	color: #0074b7;
`;

const ProviderList = styled.ul`
	list-style: none;
	padding: 0;
`;

const ProviderItem = styled.li`
	background: #fff;
	padding: 1rem;
	margin-bottom: 1rem;
	border-radius: 8px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CignaProviderPage = () => {
	const [providers, setProviders] = useState([]);

	useEffect(() => {
		const loadProviders = async () => {
			try {
				const results = await fetchAllCignaData();
				const allProviders = results.flatMap((result) => result.data || []);
				setProviders(allProviders);
			} catch (error) {
				console.error("Error loading Cigna data:", error);
			}
		};

		loadProviders();
	}, []);

	return (
		<PageContainer>
			<Header>Cigna Provider Directory</Header>
			<ProviderList>
				{providers.length > 0 ? (
					providers.map((provider, index) => (
						<ProviderItem key={index}>
							<h2>{provider.name || "No Name Available"}</h2>
							<p>{provider.description || "No Description Available"}</p>
						</ProviderItem>
					))
				) : (
					<p>No providers found.</p>
				)}
			</ProviderList>
		</PageContainer>
	);
};

export default CignaProviderPage;
