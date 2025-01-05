/** @format */

import React from "react";

const FinalStep = ({ onSubmit, onSignup }) => {
	return (
		<div>
			<h3>Review and Submit</h3>
			<p>Please review your information before submitting.</p>
			{/* Add a summary of form data here if needed */}

			<div className="action-buttons">
				<button onClick={onSubmit}>Continue as Guest</button>
				<button onClick={onSignup}>Sign Up to Save</button>
			</div>
		</div>
	);
};

export default FinalStep;
