/** @format */

import React, { createContext, useContext } from "react";

const AuthContext = createContext({
	isSignedIn: false, // Temp value
	setIsSignedIn: () => {},
});

export const AuthProvider = ({ children }) => {
	console.log("AuthProvider Rendered");
	return (
		<AuthContext.Provider value={{ isSignedIn: false }}>
			{children}
		</AuthContext.Provider>
	);
};
// export const AuthProvider = ({ children }) => {
// 	return (
// 		<AuthContext.Provider value={{ isSignedIn: false }}>
// 			{children}
// 		</AuthContext.Provider>
// 	);
// };

// export const AuthProvider = ({ children }) => {
// 	const [isSignedIn, setIsSignedIn] = useState(false); // Replace with actual auth logic

// 	return (
// 		<AuthContext.Provider value={{ isSignedIn, setIsSignedIn }}>
// 			{children}
// 		</AuthContext.Provider>
// 	);
// };
export const useAuthContext = () => {
	const context = useContext(AuthContext);
	console.log("useAuthContext Hook: ", context); // Log to see context values are accessible
	return context;
};
// export const useAuthContext = () => useContext(AuthContext);
