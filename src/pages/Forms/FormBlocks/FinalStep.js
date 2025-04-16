/** @format */

import React from "react";
import Button from "../../../components/ui/Global/button";

const FinalStep = ({ onSubmit, onSignup }) => {
	return (
		<div>
			<h3>Review and Submit</h3>
			<p>Please review your information before submitting.</p>
			{/* Add a summary of form data here if needed */}

			<div className="action-buttons">
				<Button onClick={onSubmit}>Continue as Guest</Button>
				<Button onClick={onSignup}>Sign Up to Save</Button>
			</div>
		</div>
	);
};

export default FinalStep;
