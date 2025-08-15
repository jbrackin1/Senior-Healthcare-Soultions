/** @format */

import React from "react";
import Button from "../../../components/ui/Global/everywhere/button";

const FinalStep = ({ onSubmit, onSignup }) => {
	return (
		<section aria-labelledby="review-submit-heading">
			<h2 id="review-submit-heading">Review and Submit</h2>
			<p>Please review your information before submitting.</p>

			{/* Replace this comment with actual form data summary using <dl> if needed */}
			{/* Example:
			<dl>
				<dt>Email</dt>
				<dd>{userEmail}</dd>
				<dt>Selected Plan</dt>
				<dd>{selectedPlan}</dd>
			</dl>
			*/}

			<div className="action-buttons">
				<Button
					onClick={onSubmit}
					aria-label="Continue as guest without creating an account">
					Continue as Guest
				</Button>

				<Button
					onClick={onSignup}
					aria-label="Sign up to save your information and preferences">
					Sign Up to Save
				</Button>
			</div>
		</section>
	);
};

export default FinalStep;
