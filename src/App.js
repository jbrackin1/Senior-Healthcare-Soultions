/** @format */
//App.js
import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { lightTheme, darkTheme } from "./styles/themes";

function App() {
	const isDarkMode = false; // Toggle based on user preference or state

	return (
		<ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
			<GlobalStyles />
			{/* Your app components go here */}
			<Header />
			<MainContent />
			<Footer />
		</ThemeProvider>
	);
}

export default App;
