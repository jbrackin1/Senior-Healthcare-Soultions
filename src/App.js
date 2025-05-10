/** @format */

import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { darkTheme, lightTheme } from "./styles/themes/LightDarkTheme";

// Components
import AdBanner from "./components/ui/Feedback/Ads/AdBanner";
import BottomFooter from "./components/ui/Global/layout/BottomFooter";
import TopBannerComponent from "./components/ui/Global/layout/TopBanner";

// Pages and Components
import DrugCoverage from "./components/ui/Global/data-display/DrugCoverage";
import VADrugCoverage from "./components/ui/Global/data-display/VADrugCoverage";
import About from "./pages/Generic/About";
import Blog from "./pages/Generic/Blog";
import Careers from "./pages/Generic/Careers";
import Contact from "./pages/Generic/Contact";
import HomePage from "./pages/Generic/HomePage";
import Resources from "./pages/Generic/Resources";
import SignUp from "./pages/Generic/SignUp";
import Testimonials from "./pages/Generic/Testimonials";
import MarketPlacePage from "./pages/Insurance/MarketplaceAPIPage/MarketPlacePage";
import PrivacyPolicy from "./pages/Legal/PrivacyPolicy";
import TermsOfService from "./pages/Legal/TermsOfService";
import LoginSignup from "./pages/Users/Signup";
import Profile from "./pages/Users/UserProfile";
import Resources from "./pages/Generic/Resources";
import PractitionerPage from "./pages/Users/Practitioner";
import Blog from "./pages/Generic/Blog";
import DrugCoverage from "./components/ui/Global/data-display/DrugCoverage";
import VADrugCoverage from "./components/ui/Global/data-display/VADrugCoverage";
import FAQ from "./pages/Generic/faq"
// import ComparePlans from "./pages/Insurance/Compare";
import PlanDetail from "./components/ui/Plan/PlanDetail";

// Context and Services
import PageWrapper from "./components/ui/Global/layout/PageWrapper";
import { AuthProvider } from "./services/hooks/AuthProvider";

function App() {
	const [isDarkMode, setIsDarkMode] = useState(false);

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
								<Route path="/faq" element={<FAQ />} />
								<Route path="/testimonials" element={<Testimonials />} />
								<Route path="/drug-coverage" element={<DrugCoverage />} />
								<Route path="/va-drug-coverage" element={<VADrugCoverage />} />

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
