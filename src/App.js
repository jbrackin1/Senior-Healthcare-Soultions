/** @format */
// App.js
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import { lightTheme, darkTheme } from "./styles/themes/LightDarkTheme";
import AdBanner from "./components/ui/Global/Ads/AdBanner";
import TopBannerComponent from "./components/ui/Global/TopBanner";
import BottomFooter from "./components/ui/Global/BottomFooter";
// import MenuSidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Login from "./containers/LoginPage";
import Dash from "./pages/Dash";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Testimonials from "./pages/Testimonials";
import Profile from "./pages/UserProfile";
import Resources from "./pages/Resources";
import TestTestimonials from "./pages/TestTestimonials";
import PractitionerPage from "./pages/Practitioner";
import AdminBlog from "./components/ui/Admin/EditBlog";
import Blog from "./pages/Blog";
import ComparePlans from "./pages/Compare";

function App() {
	const [isDarkMode, setIsDarkMode] = useState(false);

	return (
		<ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
			<GlobalStyles />
			<Router>
				<TopBannerComponent />
				{/* <MenuSidebar /> */}
				<AdBanner />

				<Routes>
					<Route path="/admin" element={<Dash />} />
					<Route path="/admin/blog" element={<AdminBlog />} />
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/careers" element={<Careers />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/login-page" element={<Login />} />
					<Route path="/privacy-policy" element={<PrivacyPolicy />} />
					<Route path="/terms-of-service" element={<TermsOfService />} />
					<Route path="/testimonials" element={<Testimonials />} />
					<Route path="/user-profile" element={<Profile />} />
					<Route path="/compare" element={<ComparePlans />} />
					<Route path="/resources" element={<Resources />} />
					<Route path="/practitioner" component={<PractitionerPage/>} />
					<Route path="/testimonials" component={<Testimonials />} />
					<Route path="/test-testimonials" component={<TestTestimonials />} />
				</Routes>
				<BottomFooter />
			</Router>
		</ThemeProvider>
	);
}

export default App;
