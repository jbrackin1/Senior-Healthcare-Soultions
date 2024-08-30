/** @format */

// Header.js

function createHeader() {
	// Create a header container
	const header = document.createElement("header");
	header.id = "site-header";
	header.style.cssText = `
    width: 100%;
    padding: 20px;
    background-color: #333;
    color: white;
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
  `;

	// Add header content
	header.innerHTML = `
    <h1>Your Website Name</h1>
    <nav>
      <a href="#home" style="color: white; text-decoration: none; margin: 0 15px;">Home</a>
      <a href="#about" style="color: white; text-decoration: none; margin: 0 15px;">About</a>
      <a href="#contact" style="color: white; text-decoration: none; margin: 0 15px;">Contact</a>
    </nav>
  `;

	// Add header to the body
	document.body.appendChild(header);
}

export { createHeader };
