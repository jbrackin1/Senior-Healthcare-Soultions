/** @format */

// Footer.js

function createFooter() {
	// Create a footer container
	const footer = document.createElement("footer");
	footer.id = "site-footer";
	footer.style.cssText = `
    width: 100%;
    padding: 20px;
    background-color: #333;
    color: white;
    text-align: center;
    position: fixed;
    bottom: 0;
    left: 0;
  `;

	// Add footer content
	footer.innerHTML = `
    <p>&copy; 2024 Your Company Name. All rights reserved.</p>
  `;

	// Add footer to the body
	document.body.appendChild(footer);
}

export { createFooter };
