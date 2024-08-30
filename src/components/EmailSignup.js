/** @format */

// EmailSignup.js

function createEmailSignup() {
	// Create a container for the signup form
	const signupContainer = document.createElement("div");
	signupContainer.id = "email-signup";
	signupContainer.style.cssText = `
    padding: 20px;
    background-color: #f2f2f2;
    border: 1px solid #ddd;
    margin: 20px 0;
    text-align: center;
  `;

	// Create the form elements
	const form = document.createElement("form");
	const input = document.createElement("input");
	input.type = "email";
	input.placeholder = "Enter your email";
	input.required = true;
	input.style.cssText = `
    padding: 10px;
    margin-right: 10px;
  `;

	const button = document.createElement("button");
	button.innerText = "Subscribe";
	button.type = "submit";
	button.style.cssText = `
    padding: 10px 20px;
    background-color: #333;
    color: white;
    border: none;
    cursor: pointer;
  `;

	form.appendChild(input);
	form.appendChild(button);
	signupContainer.appendChild(form);

	// Add form to the body or a specific element
	document.body.appendChild(signupContainer);
}

export { createEmailSignup };
