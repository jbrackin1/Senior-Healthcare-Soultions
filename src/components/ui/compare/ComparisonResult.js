/** @format */

import React from "react";

const ComparisonResults = ({ resultsData }) => {
	// Function to handle printing
	const handlePrint = () => {
		window.print();
	};

	// Function to handle emailing the results
	const handleEmail = () => {
		const email = prompt("Enter your email address:");
		if (email) {
			// Send email via backend API
			fetch("/api/send-email", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email, results: resultsData }),
			})
				.then((response) => alert("Email sent successfully!"))
				.catch((error) => alert("Failed to send email."));
		}
	};

	return (
		<div>
			{/* Render the insurance comparison results here */}
			<h2>Insurance Comparison Results</h2>
			<div>
				{resultsData.map((result, index) => (
					<div key={index}>
						{/* Display each result */}
						<p>
							{result.name}: {result.details}
						</p>
					</div>
				))}
			</div>

			{/* buttons to print or email results */}
			<button onClick={handlePrint}>Print Results</button>
			<button onClick={handleEmail}>Email Results</button>
		</div>
	);
};

export default ComparisonResults;
