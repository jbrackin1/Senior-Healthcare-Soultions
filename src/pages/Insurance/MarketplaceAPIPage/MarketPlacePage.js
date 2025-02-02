/** @format */

import React, { useState } from "react";
import styled from "styled-components";
import { Link, useParams, useNavigate } from "react-router-dom";
import Button from "../../../components/ui/Global/button";
import ComparisonTable from "../../../components/ui/compare/ComparisonTable";

//Later add toast or warnings saying to pick more than 1 you need to sign up
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
	cursor: pointer; // Add pointer cursor to show it's clickable

	a {
		text-decoration: underline; // Make the link visually distinct
		color: inherit;
	}

	span {
		margin-left: 0.5rem;
		font-size: 0.9rem;
		color: gray;
	}
`;

const MarketPlacePage = () => {
	const [plans, setPlans] = useState([]);
	const [sortKey, setSortKey] = useState("premium");
	const [sortOrder, setSortOrder] = useState("asc");
	const isSignedIn = false; // Temporary placeholder, useAuth();
	console.log("MarketPlacePage Render: isSignedIn =", isSignedIn);
	const [selectedPlans, setSelectedPlans] = useState([]);
	const { planId } = useParams();
	const maxPlans = isSignedIn ? 4 : 1;
	const [state, setState] = useState("");
	const [zipCode, setZipCode] = useState("");
	const [formData, setFormData] = useState({
		income: 52000,
		age: 27,
		gender: "Female",
		usesTobacco: false,
		countyfips: "37057", // Default value
		state: "",
		zipcode: "27360", // Default value
	});
	const [loading, setLoading] = useState(false);

	const handlePlanToggle = (plan) => {
		const isAlreadySelected = selectedPlans.find((p) => p.id === plan.id);

		if (isAlreadySelected) {
			setSelectedPlans(selectedPlans.filter((p) => p.id !== plan.id));
		} else if (selectedPlans.length < maxPlans) {
			setSelectedPlans([...selectedPlans, plan]);
		} else {
			alert(`You can only select up to ${maxPlans} plan(s).`);
		}
	};

	const handleSort = (key) => {
		if (sortKey === key) {
			setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
		} else {
			setSortKey(key);
			setSortOrder("asc");
		}
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	const getState = async (zipcode) => {
		const apiKey = process.env.REACT_APP_MARKETPLACE_API_KEY;
		try {
			const response = await fetch(
				`https://marketplace.api.healthcare.gov/api/v1/counties/by/zip/${zipcode}?apikey=${apiKey}`
			);
			const fipsData = await response.json();
			setState(fipsData.counties[0].state);
			console.log(state);

			//   const fipsFromZips = fipsData.counties.filter((fipsInstance) => {
			//     return fipsInstance[0].fips[0];
			//   })
			//   console.log(fipsFromZips);

			console.log(fipsData); // Log to check the response
			if (response.ok && fipsData.counties && fipsData.counties.length > 0) {
				return fipsData.counties[0].state;
			} else {
				console.error("Error fetching FIPS code:", fipsData);
				return null;
			}
		} catch (error) {
			console.error("Error fetching FIPS code:", error);
			return null;
		}
	};

	const getFipsCode = async (zipcode) => {
		const apiKey = process.env.REACT_APP_MARKETPLACE_API_KEY;
		try {
			const response = await fetch(
				`https://marketplace.api.healthcare.gov/api/v1/counties/by/zip/${zipcode}?apikey=${apiKey}`
			);
			const fipsData = await response.json();
			const zipArray = fipsData.counties[0].zipcode;
			console.log(zipArray);
			//   const fipsFromZips = fipsData.counties.filter((fipsInstance) => {
			//     return fipsInstance[0].fips[0];
			//   })
			//   console.log(fipsFromZips);
			console.log(fipsData); // Log to check the response
			if (response.ok && fipsData.counties && fipsData.counties.length > 0) {
				return fipsData.counties[0].fips;
			} else {
				console.error("Error fetching FIPS code:", fipsData);
				return null;
			}
		} catch (error) {
			console.error("Error fetching FIPS code:", error);
			return null;
		}
	};

	const getZipsFromFips = async (zipcode) => {
		const apiKey = process.env.REACT_APP_MARKETPLACE_API_KEY;
		try {
			const response = await fetch(
				`https://marketplace.api.healthcare.gov/api/v1/counties/by/zip/${zipcode}?apikey=${apiKey}`
			);
			const fipsData = await response.json();
			const ZipCode = fipsData.counties[0].zipcode;
			setZipCode(ZipCode);

			//   const fipsFromZips = fipsData.counties.filter((fipsInstance) => {
			//     return fipsInstance[0].fips[0];
			//   })
			//   console.log(fipsFromZips);
			console.log(fipsData); // Log to check the response
			if (response.ok && fipsData.counties && fipsData.counties.length > 0) {
				return fipsData.counties.zipcode;
			} else {
				console.error("Error fetching FIPS code:", fipsData);
				return null;
			}
		} catch (error) {
			console.error("Error fetching FIPS code:", error);
			return null;
		}
	};

	const getStateFromZip = async () => {
		const data = fetchMarketplaceData();
		console.log(data);
	};

	//   useEffect(() => {
	//     getStateFromZip();
	//   }, []);

	const fetchMarketplaceData = async () => {
		setLoading(true); // Set loading to true
		const fipsCode = await getFipsCode(formData.zipcode);
		const users_state = await getState(formData.zipcode);

		console.log(users_state);
		// const zipCodes = await getZipsFromFips(formData.zipCode);

		if (!fipsCode) {
			alert("Could not retrieve FIPS code for the provided ZIP code.");
			setLoading(false); // Set loading to false after handling error
			return;
		}

		const requestData = {
			household: {
				income: parseFloat(formData.income),
				people: [
					{
						age: formData.age,
						aptc_eligible: true,
						gender: formData.gender,
						uses_tobacco: formData.usesTobacco,
					},
				],
			},
			market: "Individual",
			place: {
				countyfips: fipsCode,
				state: state,
				zipcode: formData.zipcode,
			},
			year: 2019,
		};

		try {
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
			const data = await response.json();
			console.log(data);
			setPlans(data.plans || []);
		} catch (error) {
			console.error("Error fetching marketplace data:", error);
		} finally {
			setLoading(false); // Set loading to false after API call is complete
		}
	};

	const formattedPlanId = planId ? planId.toUpperCase() : "";

	//   const sortPlansByPremium = () => {
	//   const sorted = [...filteredPlans].sort((a, b) => a.premium - b.premium);
	//   setFilteredPlans(sorted);
	// };

	// const filterByHSAEligible = () => {
	//   const filtered = plans.filter((plan) => plan.hsa_eligible);
	//   setFilteredPlans(filtered);
	// };

	return (
		<CompareContainer>
			<SectionTitle>Compare Insurance Plans</SectionTitle>

			<form
				onSubmit={(e) => {
					e.preventDefault();
					fetchMarketplaceData();
				}}>
				<FormField>
					<label htmlFor="income">Household Income</label>
					<input
						type="number"
						id="income"
						name="income"
						value={formData.income}
						onChange={handleInputChange}
					/>
				</FormField>

				<FormField>
					<label htmlFor="age">Age</label>
					<input
						type="number"
						id="age"
						name="age"
						value={formData.age}
						onChange={handleInputChange}
					/>
				</FormField>

				<FormField>
					<label htmlFor="gender">Gender</label>
					<select
						id="gender"
						name="gender"
						value={formData.gender}
						onChange={handleInputChange}>
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
						onChange={handleInputChange}
					/>
				</FormField>

				<Button type="submit">Search Plans</Button>
			</form>

			{loading ? (
				<p>Loading...</p>
			) : plans.length > 0 ? (
				<ComparisonTable
					plans={plans}
					onTogglePlan={handlePlanToggle}
					selectedPlans={selectedPlans}
				/>
			) : (
				<div>
					{plans.length > 0 ? (
						plans.map((plan) => (
							<PlanCard key={plan.id}>
								<PlanInfo>
									<PlanTitle>
										<Link
											to={`/plan/${plan.id}`}
											style={{ textDecoration: "underline", color: "blue" }}>
											{plan.name}
										</Link>
										<span
											style={{
												marginLeft: "0.5rem",
												color: "gray",
												fontSize: "0.9rem",
											}}>
											(Click to view details)
										</span>
										<b>
											<Link
												to={`/plan/${plan.id}`}
												onClick={() =>
													console.log("Navigating to:", `/plan/${plan.id}`)
												}>
												{plan.name}
											</Link>
											console.log("Navigating to plan ID:", planId);
											console.log("Plan ID:", plan.id);
										</b>
									</PlanTitle>
									<p>{plan.description}</p>
								</PlanInfo>
							</PlanCard>
						))
					) : (
						<p>No plans available.</p>
					)}
				</div>
			)}
			{/* button for Medications */}
			<div style={{ marginTop: "2rem", textAlign: "center" }}>
				<Button
					as={Link}
					to="/drug-coverage"
					state={{ selectedPlans }}
					disabled={selectedPlans.length === 0}
					style={{
						backgroundColor: selectedPlans.length === 0 ? "navy" : "",
						pointerEvents: selectedPlans.length === 0 ? "none" : "auto",
						marginTop: "2rem",
					}}>Check if your medication is covered</Button>
				{selectedPlans.length === 0 && (
					<p style={{ color: "red", textAlign: "center", marginTop: "1rem" }}>
						<b>Please select at least one plan to continue.</b>
					</p>
				)}
			</div>
		</CompareContainer>
	);
};

export default MarketPlacePage;
