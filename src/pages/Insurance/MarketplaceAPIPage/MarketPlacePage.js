/** @format */

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../../../components/ui/Global/button";
import SearchBar from "../../../components/ui/compare/Searchbar";
import FilterSelect from "../../../components/ui/compare/FilterSlelect";
import { fetchAllAetnaData } from "../../../services/Api/Aetna/Aetna";

// Styled components
const CompareContainer = styled.main`
	padding: 2rem;
	background-color: ${({ theme }) => theme.colors.backgroundAlt};
	color: ${({ theme }) => theme.colors.text};
	font-family: "Open Sans", sans-serif;
	line-height: 1.6;
	max-width: 1200px;
	margin: 2rem auto;
	border-radius: 8px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
	font-family: "Libre Baskerville", serif;
	font-size: 2rem;
	margin-bottom: 1.5rem;
	color: ${({ theme }) => theme.colors.accent};
	text-align: center;
`;

const PlanCard = styled.div`
	padding: 1.5rem;
	margin-bottom: 1.5rem;
	border-radius: 8px;
	background-color: ${({ theme }) => theme.colors.background};
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const PlanInfo = styled.div`
	flex-grow: 1;
`;

const PlanTitle = styled.h3`
	font-size: 1.5rem;
	margin-bottom: 0.5rem;
	color: ${({ theme }) => theme.colors.primary};
`;

const HeartButton = styled(Button)`
	background-color: transparent;
	color: ${({ isFavorite }) => (isFavorite ? "red" : "grey")};
	border: none;
	font-size: 1.5rem;
	cursor: pointer;
`;

// Main Component
const MarketPlacePage = () => {
	const [plans, setPlans] = useState([]);
	const [favorites, setFavorites] = useState(() => {
		const savedFavorites = localStorage.getItem("favorites");
		return savedFavorites ? JSON.parse(savedFavorites) : [];
	});
	const [searchQuery, setSearchQuery] = useState("");
	const [filters, setFilters] = useState({
		age: "",
		location: "",
		planType: "",
	});

    useEffect(() => {
      const fetchMarketplaceData = async () => {
        const apiKey = "d687412e7b53146b2631dc01974ad0a4"; // Your API Key
        const requestData = {
          household: {
            income: 52000,
            people: [
              {
                age: 27,
                aptc_eligible: true,
                gender: "Female",
                uses_tobacco: false,
              },
            ],
          },
          market: "Individual",
          place: {
            countyfips: "37057", // FIPS code for the county
            state: "NC",
            zipcode: "27360", // User's zip code
          },
          year: 2019,
        };
  
        try {
          const response = await fetch(
            `https://marketplace.api.healthcare.gov/api/v1/plans/search?apikey=${apiKey}`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(requestData),
            }
          );
          const data = await response.json();
  
          if (response.ok) {
            setPlans(data.plans || []); // Assuming 'plans' is the key in the returned JSON
          } else {
            console.error("Error fetching marketplace data:", data);
          }
        } catch (error) {
          console.error("Error fetching marketplace data:", error);
        }
      };
  
      fetchMarketplaceData();
    }, []); // Empty dependency array ensures this runs only once when component mounts
  
    // Log the plans after they have been updated
    useEffect(() => {
      if (plans.length > 0) {
        console.log(plans); // Logs the updated plans state after the fetch is complete
      }
    }, [plans]); // This will run each time plans change
	// useEffect(() => {
	// 	localStorage.setItem("favorites", JSON.stringify(favorites));
	// }, [favorites]);

	// Toggle favorite plan
	const toggleFavorite = (planId) => {
		if (favorites.includes(planId)) {
			setFavorites(favorites.filter((id) => id !== planId));
		} else {
			setFavorites([...favorites, planId]);
		}
	};

	// Filter plans based on search query and filters
	const filteredPlans = plans.filter((plan) => {
		return (
			(plan.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
				plan.description.toLowerCase().includes(searchQuery.toLowerCase())) &&
			(filters.age === "" || plan.age === filters.age) &&
			(filters.location === "" || plan.location === filters.location) &&
			(filters.planType === "" || plan.planType === filters.planType)
		);
	});

	return (
		<CompareContainer>
			<SectionTitle>Compare Insurance Plans</SectionTitle>

			{/* Search Bar */}
			<SearchBar
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
			/>

			{/* Filters */}
			<FilterSelect
				options={[
					{ label: "Select Age", value: "" },
					{ label: "18-25", value: "18-25" },
					{ label: "26-35", value: "26-35" },
				]}
				onChange={(e) => setFilters({ ...filters, age: e.target.value })}
			/>
			<FilterSelect
				options={[
					{ label: "Select Location", value: "" },
					{ label: "New York", value: "New York" },
					{ label: "California", value: "California" },
				]}
				onChange={(e) => setFilters({ ...filters, location: e.target.value })}
			/>
			<FilterSelect
				options={[
					{ label: "Select Plan Type", value: "" },
					{ label: "Basic", value: "Basic" },
					{ label: "Premium", value: "Premium" },
				]}
				onChange={(e) => setFilters({ ...filters, planType: e.target.value })}
			/>

			{/* Display Insurance Plans */}
			{filteredPlans.map((plan) => (
				<PlanCard key={plan.id}>
					<PlanInfo>
						<PlanTitle>{plan.name}</PlanTitle>
						<p>{plan.description}</p>
					</PlanInfo>
					<HeartButton
						isFavorite={favorites.includes(plan.id)}
						onClick={() => toggleFavorite(plan.id)}>
						❤️
					</HeartButton>
				</PlanCard>
			))}
		</CompareContainer>
	);
};

export default MarketPlacePage;
