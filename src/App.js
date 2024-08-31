/** @format */
// App.js
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { lightTheme, darkTheme } from "./styles/themes/LightDarkTheme";
import makeAdBanner from "./components/AdBanner";
import topBanner  from "./components/TopBanner"
import  bottomFooter  from "./components/BottomFooter";
import MenuSidebar from "./components/Sidebar";
import HomePage from "./pages/Home";

function App() {
	const [isDarkMode, setIsDarkMode] = useState(false); // Toggle between light and dark mode

	return (
		<ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
			<GlobalStyles />

			<topBanner>
				<h1>Welcome to Insurance Compare</h1>
				<p>Find the best plans tailored to your needs</p>
			</topBanner>

			<MenuSidebar />

			<makeAdBanner />

			<HomePage />

			<bottomFooter />
		</ThemeProvider>
	);
}

export default App;
