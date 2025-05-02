/** @format */

import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import { lightTheme, darkTheme } from "./styles/themes/LightDarkTheme";

// Components
import AdBanner from "./components/ui/Feedback/Ads/AdBanner";
import TopBannerComponent from "./components/ui/Global/layout/TopBanner";
import BottomFooter from "./components/ui/Global/layout/BottomFooter";

// Pages and Components
import SignUp from "./pages/Generic/SignUp";
import MarketPlacePage from "./pages/Insurance/MarketplaceAPIPage/MarketPlacePage";
import HomePage from "./pages/Generic/HomePage";
import About from "./pages/Generic/About";
import Careers from "./pages/Generic/Careers";
import Contact from "./pages/Generic/Contact";
import LoginSignup from "./pages/Users/Signup";
import Dash from "./pages/Dash/Dash";
import PrivacyPolicy from "./pages/Legal/PrivacyPolicy";
import TermsOfService from "./pages/Legal/TermsOfService";
import Testimonials from "./pages/Generic/Testimonials";
import Profile from "./pages/Users/UserProfile";
import Resources from "./pages/Generic/Resources";
import PractitionerPage from "./pages/Users/Practitioner";
import Blog from "./pages/Generic/Blog";
import DrugCoverage from "./components/ui/Global/data-display/DrugCoverage";
// import ComparePlans from "./pages/Insurance/Compare";
import PlanDetail from "./components/ui/Plan/PlanDetail";

// Context and Services
import { AuthProvider } from "./services/hooks/AuthProvider";
import { PlanProvider } from "./services/hooks/PlanContext";
import { getCignaToken } from "./services/Api/Cigna/getCignaToken";
import PageWrapper from "./components/ui/Global/layout/PageWrapper";

function App() {
	const [isDarkMode, setIsDarkMode] = useState(false);

	// useEffect(() => {
	// 	const fetchToken = async () => {
	// 		try {
	// 			const token = await getCignaToken();
	// 			console.log("Cigna Token:", token);
	// 		} catch (error) {
	// 			console.error("Failed to fetch token:", error);
	// 		}
	// 	};
	// 	fetchToken();
	// }, []);

	return (
		<AuthProvider>
			<ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
				<GlobalStyles />
					<Router>
						<TopBannerComponent />
						<AdBanner />
						<PageWrapper>
							<Routes>
								<Route path="/" element={<HomePage />} />
								<Route path="/marketplace" element={<MarketPlacePage />} />
								<Route path="/plan/:planId" element={<PlanDetail />} />
								{/* <Route path="/compare" element={<ComparePlans />} /> */}
								<Route path="/drug-coverage" element={<DrugCoverage />} />
								<Route path="/signup" element={<SignUp />} />
								<Route path="/login-signup" element={<LoginSignup />} />
								<Route path="/user-profile" element={<Profile />} />
								{/* <Route path="/practitioner" element={<PractitionerPage />} /> */}
								<Route path="/about" element={<About />} />
								<Route path="/blog" element={<Blog />} />
								<Route path="/careers" element={<Careers />} />
								<Route path="/contact" element={<Contact />} />
								<Route path="/privacy-policy" element={<PrivacyPolicy />} />
								<Route path="/terms-of-service" element={<TermsOfService />} />
								<Route path="/resources" element={<Resources />} />
								<Route path="/testimonials" element={<Testimonials />} />
								<Route path="/drug-coverage" element={<DrugCoverage />} />

								{/* Add any additional routes here */}
							</Routes>
						</PageWrapper>
						<BottomFooter />
					</Router>
			</ThemeProvider>
		</AuthProvider>
	);
}

export default App;
