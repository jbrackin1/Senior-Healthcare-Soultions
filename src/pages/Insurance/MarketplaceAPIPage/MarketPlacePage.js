/** @format */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../../../components/ui/Global/everywhere/button";
import ComparisonTable from "../../../components/ui/compare/ComparisonTable";
import UserPreference from "../../Forms/UserPreference";
import Collapsible from "../../../components/ui/Global/layout/CollapsableButton";
import MomMode from "../../../components/ui/Feedback/MomMode";
import { fetchPlanDetails } from "../../../utils/api/fetchPlanDetails";
import { formatDetailedInsInfo } from "../../../utils/formatters/formatDetailedInsInfo";

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

const FormField = styled.div`
	margin-bottom: 1rem;
	display: flex;
	flex-direction: column;

	label {
		margin-bottom: 0.5rem;
		font-weight: bold;
	}
	input,
	select {
		padding: 0.5rem;
		border: 1px solid #ccc;
		border-radius: 4px;
		font-size: 1rem;
	}
`;

const MarketPlacePage = () => {
	const [plans, setPlans] = useState([]);
	const [selectedPlans, setSelectedPlans] = useState([]);
	const [loading, setLoading] = useState(false);
	const [searchCompleted, setSearchCompleted] = useState(false);
	const [formData, setFormData] = useState({
		income: "",
		age: "",
		gender: "",
		usesTobacco: null,
		countyfips: "",
		state: "",
		zipcode: "",
	});

	const { useMomMode } = MomMode;

	useEffect(() => {
		const savedData = localStorage.getItem("formData");
		if (savedData) {
			const parsedData = JSON.parse(savedData);
			setFormData({
				income: parsedData.household.income.toString(),
				age: parsedData.household.people[0].age.toString(),
				gender: parsedData.household.people[0].gender,
				usesTobacco: parsedData.household.people[0].uses_tobacco,
				countyfips: parsedData.place.countyfips,
				state: parsedData.place.state,
				zipcode: parsedData.place.zipcode,
			});
		}
	}, []);

	const fetchFipsCode = async () => {
		const apiKey = process.env.REACT_APP_MARKETPLACE_API_KEY;
		try {
			const response = await fetch(
				`https://marketplace.api.healthcare.gov/api/v1/counties/by/zip/${formData.zipcode}?apikey=${apiKey}`
			);
			const fipsData = await response.json();
			if (fipsData && fipsData.counties.length > 0) {
				setFormData((prevData) => ({
					...prevData,
					countyfips: fipsData.counties[0].fips,
					state: fipsData.counties[0].state,
				}));
			}
		} catch (error) {
			console.error("Error fetching FIPS code:", error);
		}
	};

	useEffect(() => {
		if (formData.zipcode) {
			fetchFipsCode();
		}
	}, [formData.zipcode]);

	const fetchMarketplaceData = async () => {
		if (
			!formData.countyfips ||
			!formData.state ||
			!formData.zipcode ||
			!formData.income
		) {
			alert("Please fill in all required fields before submitting.");
			return;
		}

		setLoading(true);
		const currentYear = new Date().getFullYear();

		const requestData = {
			household: {
				income: parseFloat(formData.income),
				people: [
					{
						age: parseFloat(formData.age),
						aptc_eligible: true,
						gender: formData.gender,
						uses_tobacco: formData.usesTobacco,
					},
				],
			},
			market: "Individual",
			place: {
				countyfips: formData.countyfips,
				state: formData.state,
				zipcode: formData.zipcode,
			},
			year: currentYear,
		};
		localStorage.setItem("formData", JSON.stringify(requestData));

		try {
			const response = await fetch(
				`https://marketplace.api.healthcare.gov/api/v1/plans/search?apikey=${process.env.REACT_APP_MARKETPLACE_API_KEY}`,
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(requestData),
				}
			);

			if (response.ok) {
				const data = await response.json();
				const enrichedPlans = await Promise.all(
					(data.plans || []).map(async (plan) => {
						try {
							const details = await fetchPlanDetails(plan.id);
							return formatDetailedInsInfo({ ...plan, ...details });
						} catch (err) {
							console.error(
								`Failed to fetch details for plan ${plan.id}:`,
								err
							);
							return formatDetailedInsInfo(plan);
						}
					})
				);
				setPlans(enrichedPlans);
			} else {
				const errorData = await response.json();
				alert(
					"Failed to fetch plans. " + (errorData.message || "Unknown error")
				);
			}
		} catch (error) {
			console.error("Error fetching marketplace data:", error);
			alert("There was an error while fetching data.");
		} finally {
			setLoading(false);
			setSearchCompleted(true);
		}
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		setSearchCompleted(false);
		fetchMarketplaceData();
	};

	const handlePlanToggle = (planId) => {
		setSelectedPlans((prev) =>
			prev.includes(planId)
				? prev.filter((id) => id !== planId)
				: [...prev, planId]
		);
	};

	return (
		<CompareContainer>
			<Collapsible title="Customize Your Preferences">
				<UserPreference
					formData={formData}
					setFormData={setFormData}
					facetGroups={[]}
				/>
			</Collapsible>

			<SectionTitle>Compare Insurance Plans</SectionTitle>

			<form onSubmit={handleFormSubmit}>
				<FormField>
					<label htmlFor="income">Household Income</label>
					<input
						type="number"
						id="income"
						name="income"
						value={formData.income}
						onChange={(e) =>
							setFormData({ ...formData, income: e.target.value })
						}
					/>
				</FormField>
				<FormField>
					<label htmlFor="age">Age</label>
					<input
						type="number"
						id="age"
						name="age"
						value={formData.age}
						onChange={(e) => setFormData({ ...formData, age: e.target.value })}
					/>
				</FormField>
				<FormField>
					<label htmlFor="gender">Gender</label>
					<select
						id="gender"
						name="gender"
						value={formData.gender}
						onChange={(e) =>
							setFormData({ ...formData, gender: e.target.value })
						}>
						<option value="Female">Female</option>
						<option value="Male">Male</option>
					</select>
				</FormField>
				<FormField>
					<label htmlFor="zipcode">Zip Code</label>
					<input
						type="text"
						id="zipcode"
						name="zipcode"
						value={formData.zipcode}
						onChange={(e) =>
							setFormData({ ...formData, zipcode: e.target.value })
						}
					/>
				</FormField>
				<Button type="submit">{loading ? "Loading..." : "Search Plans"}</Button>
			</form>

			{!loading && plans.length > 0 && (
				<ComparisonTable
					plans={plans}
					onTogglePlan={handlePlanToggle}
					selectedPlans={selectedPlans}
					userPrefs={formData}
				/>
			)}

			{!loading && searchCompleted && plans.length === 0 && (
				<p style={{ textAlign: "center", color: "red" }}>
					No matching plans found based on your preferences.
					<br />
					Try adjusting your filters.
				</p>
			)}
		</CompareContainer>
	);
};

export default MarketPlacePage;
