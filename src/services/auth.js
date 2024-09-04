/** @format */

// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from "react";

// Create Auth Context
export const AuthContext = createContext();

// Auth Provider Component
export const AuthProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		// Check if the user is logged in (use local storage, cookies, or API call)
		const userToken = localStorage.getItem("userToken");
		setIsLoggedIn(!!userToken);
	}, []);

	const login = (token) => {
		localStorage.setItem("userToken", token);
		setIsLoggedIn(true);
	};

	const logout = () => {
		localStorage.removeItem("userToken");
		setIsLoggedIn(false);
	};

	return (
		<AuthContext.Provider value={{ isLoggedIn, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};
