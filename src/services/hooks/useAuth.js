/** @format */

// src/hooks/useAuth.js
import { useContext } from "react";
import { useAuthContext } from "./authContext";


const useAuth = () => {
	const { isSignedIn, setIsSignedIn } = false;
	 useAuthContext();

	const login = () => console.log("Login called");
	// {
	//  Replace with your actual login logic
	// 	setIsSignedIn(true);
	// };

	const logout = () => console.log("Logout called");
	// 	{
	//  Replace with your actual logout logic
	// 	setIsSignedIn(false);
	// };

	return { isSignedIn, login, logout };
};

export default useAuth;
