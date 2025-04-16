/** @format */

// src/context/auth.js
import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [isSignedIn, setIsSignedIn] = useState(false);
	const [user, setUser] = useState(null);

	// Check if the user is signed in on load
	useEffect(() => {
		const token = localStorage.getItem("userToken");
		const userInfo = localStorage.getItem("userInfo");

		if (token && userInfo) {
			setIsSignedIn(true);
			setUser(JSON.parse(userInfo)); // Parse and set user info
		} else {
			setIsSignedIn(false);
			setUser(null);
		}
	}, []);

	const login = (token, userInfo) => {
		localStorage.setItem("userToken", token);
		localStorage.setItem("userInfo", JSON.stringify(userInfo));
		setIsSignedIn(true);
		setUser(userInfo);
	};

	const logout = () => {
		localStorage.removeItem("userToken");
		localStorage.removeItem("userInfo");
		setIsSignedIn(false);
		setUser(null);
	};

	return (
		<AuthContext.Provider value={{ isSignedIn, user, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};
