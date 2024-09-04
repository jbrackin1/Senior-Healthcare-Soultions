/** @format */
// App.js
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import { lightTheme, darkTheme } from "./styles/themes/LightDarkTheme";
import AdBanner from "./components/AdBanner";
import TopBannerComponent from "./components/TopBanner"; 
import BottomFooter from "./components/BottomFooter"; 
// import MenuSidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import LoginSignup from "./pages/LoginSignup";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Testimonials from "./pages/Testimonials";
import UserProfile from "./pages/UserProfile";

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
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/careers" element={<Careers />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/login-signup" element={<LoginSignup />} />
					<Route path="/privacy-policy" element={<PrivacyPolicy />} />
					<Route path="/terms-of-service" element={<TermsOfService />} />
					<Route path="/testimonials" element={<Testimonials />} />
					<Route path="/user-profile" element={<UserProfile />} />
					
				</Routes>
				<BottomFooter /> 
			</Router>
		</ThemeProvider>
	);
}

export default App;
