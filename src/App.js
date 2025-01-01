/** @format */
// App.js
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import { lightTheme, darkTheme } from "./styles/themes/LightDarkTheme";
import AdBanner from "./components/ui/Global/Ads/AdBanner";
import TopBannerComponent from "./components/ui/Global/TopBanner";
import BottomFooter from "./components/ui/Global/BottomFooter";
// import MenuSidebar from "./components/Sidebar";
import SignUp from "./pages/Generic/SignUp";
import MarketPlacePage from "./pages/Insurance/MarketplaceAPIPage/MarketPlacePage"
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
// import TestTestimonials from "./pages/Generic/TestTestimonials";
import PractitionerPage from "./pages/Users/Practitioner";
import Blog from "./pages/Generic/Blog";
import ComparePlans from "./pages/Insurance/Compare";
import PlanDetail from "./components/ui/Plan/PlanDetail";
import { PlanProvider } from "./services/hooks/PlanContext";
import { getCignaToken } from "./services/Api/Cigna/getCignaToken";


function App() {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [plans, setPlans] = useState([]);

	 useEffect(() => {
			const fetchToken = async () => {
				try {
					const token = await getCignaToken();
					console.log("Cigna Token:", token);
				} catch (error) {
					console.error("Failed to fetch token:", error);
				}
			};
			fetchToken();
		}, []);

	return (
		<ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
			<PlanProvider>
				<GlobalStyles />
				<Router>
					<TopBannerComponent />
					{/* <MenuSidebar /> Maybe retool for ads? */}
					<AdBanner />
					<Routes>
						<Route path="/admin" element={<Dash />} />
						<Route path="/signup" element={<SignUp />} />
						<Route path="/about" element={<About />} />
						<Route path="/blog" element={<Blog />} />
						<Route path="/" element={<HomePage />} />
						<Route path="/marketplace" element={<MarketPlacePage />} />
						<Route path="/careers" element={<Careers />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/login-signup" element={<LoginSignup />} />
						<Route path="/privacy-policy" element={<PrivacyPolicy />} />
						<Route path="/terms-of-service" element={<TermsOfService />} />
						<Route path="/user-profile" element={<Profile />} />
						<Route path="/compare" element={<ComparePlans />} />
						<Route path="/plan/:planId" element={<PlanDetail />} />
						<Route path="/resources" element={<Resources />} />
						<Route path="/practitioner" element={<PractitionerPage />} />
						<Route path="/testimonials" element={<Testimonials />} />
						{/* <Route path="/test-testimonials" component={<TestTestimonials />} /> */}
					</Routes>
					<BottomFooter />
				</Router>
			</PlanProvider>
		</ThemeProvider>
	);
}

export default App;
