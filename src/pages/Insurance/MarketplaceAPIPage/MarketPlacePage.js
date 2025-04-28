import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../../../components/ui/Global/button";
import ComparisonTable from "../../../components/ui/compare/ComparisonTable";
import UserPreference from "../../Forms/UserPreference";
import Collapsible from "../../../components/ui/Global/CollapsableButton";


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
	const [isProcessing, setIsProcessing] = useState(false);
	const [searchCompleted, setSearchCompleted] = useState(false);
	const [clickedCheckMedication, setClickedCheckMedication] = useState(false); 
	const [formData, setFormData] = useState({
		income: "",
		age: "",
		gender: "",
		usesTobacco: null,
		countyfips: "",
		state: "",
		zipcode: "",
	});

	const loadFormData = () => {
		const savedData = localStorage.getItem('formData');
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
				year: parsedData.year,
			});
		}
	};

	const filteredPlans = plans.filter((plan) => {
		if (formData?.preferredPremium) {
			return plan.premium <= formData.preferredPremium;
		}
		return true; // If no preferredPremium set, show all
	});

	const [toastMessage, setToastMessage] = useState("");
const handleClearFilters = () => {
	const hasFiltersToClear =
		formData.preferredPremium ||
		formData.metalLevel ||
		formData.planType ||
		formData.issuer ||
		(formData.lifestylePrograms && formData.lifestylePrograms.length > 0) ||
		formData.dentalCoverage ||
		formData.visionCoverage;

	if (hasFiltersToClear) {
		setFormData((prevData) => ({
			...prevData,
			preferredPremium: "",
			metalLevel: "",
			planType: "",
			issuer: "",
			lifestylePrograms: [],
			dentalCoverage: false,
			visionCoverage: false,
		}));

		setToastMessage("Preferences cleared!");
	} else {
		setToastMessage("No preferences to clear.");
	}

	setTimeout(() => setToastMessage(""), 2000);
};
	
	useEffect(() => {
		loadFormData();
	}, []);

	const fetchFipsCode = async () => {
		const apiKey = process.env.REACT_APP_MARKETPLACE_API_KEY;
		console.log("Fetching FIPS code for ZIP:", formData.zipcode);
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
				console.log("FIPS Code:", fipsData.counties[0].fips);
			} else {
				console.error("No counties found for the provided ZIP code.");
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
		// Ensure all required fields are filled before sending the request
		if (!formData.countyfips || !formData.state || !formData.zipcode || !formData.income) {
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
			currentYear,
		};
		localStorage.setItem('formData', JSON.stringify(requestData));
		
		console.log("Request Data: ", requestData);
	
		try {
			// Make the API request
			const response = await fetch(
				`https://marketplace.api.healthcare.gov/api/v1/plans/search?apikey=${process.env.REACT_APP_MARKETPLACE_API_KEY}`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(requestData),
				}
			);
	
			// Check if the response is 200
			if (response.ok) {
				const data = await response.json();
				console.log("API Response Data:", data); // Log the response
	
				// Check if the API returned any plans
				if (data.plans && data.plans.length > 0) {
					setPlans(data.plans); // Set plans in state
				} else {
					// Handle case where no plans are found
					alert("No plans found. Please check your inputs.");
				}
			} else {
				// Log error response if not ok
				const errorData = await response.json();
				console.error("API Error Response:", errorData);
				alert("Failed to fetch plans. Error: " + (errorData.message || "Unknown error"));
			}
		} catch (error) {
			// Catch any errors during the fetch
			console.error("Error fetching marketplace data:", error);
			alert("There was an error while fetching data. Please try again.");
		} finally {
			setLoading(false); // Always turn off the loading state
			setSearchCompleted(true);  // Set searchCompleted to true after fetching
		}
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		setSearchCompleted(false);  // Set searchCompleted to true after fetching
		fetchMarketplaceData();
	};

	const handlePlanToggle = (planId) => {
		if (isProcessing) return;

		setIsProcessing(true);

		setSelectedPlans((prevSelectedPlans) => {
			if (prevSelectedPlans.includes(planId)) {
				return prevSelectedPlans.filter((id) => id !== planId);
			}
			return [...prevSelectedPlans, planId];
		});
		setIsProcessing(false);
	};


	const handleCheckMedicationClick = () => {
		setClickedCheckMedication(true);  // Mark the button as clicked
	};

	return (
		<CompareContainer>
			{toastMessage && (
  <div style={{
    position: "fixed",
    top: "1rem",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#add8e6", // Robin's Egg Blue!
    color: "#13343E",
    padding: "0.75rem 1.25rem",
    borderRadius: "8px",
    fontWeight: "bold",
    boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
    zIndex: 1000,
    animation: "fadeInOut 2s forwards"
  }}>
    {toastMessage}
  </div>
)}

			<Collapsible title="Step 1: Customize Your Preferences">
				<UserPreference
					formData={formData}
					setFormData={setFormData}
					facetGroups={[]} // pass actual data when you're ready
				/>
			</Collapsible>

			<div style={{ textAlign: "center", margin: "1rem 0" }}>
				<Button type="button" onClick={handleClearFilters}>
					Clear All Filters
				</Button>
			</div>

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
				<>
					<ComparisonTable
						plans={filteredPlans}
						onTogglePlan={handlePlanToggle}
						selectedPlans={selectedPlans}
					/>
				</>
			)}

			{/* Show message if no plans were found */}
			{!loading && searchCompleted && plans.length === 0 && (
				<p style={{ textAlign: "center", color: "red" }}>
					No plans found for the provided parameters.
				</p>
			)}
		</CompareContainer>
	);
};

export default MarketPlacePage;