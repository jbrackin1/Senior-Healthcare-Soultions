/** @format */

// Sidebar.js

function createSidebar() {
	// Create a sidebar container
	const sidebar = document.createElement("aside");
	sidebar.id = "site-sidebar";
	sidebar.style.cssText = `
    width: 200px;
    padding: 20px;
    background-color: #f8f8f8;
    border-right: 1px solid #ddd;
    position: fixed;
    top: 80px; /* Adjust depending on header height */
    left: 0;
    height: 100%;
  `;

	// Add sidebar content
	sidebar.innerHTML = `
    <h3>Menu</h3>
    <ul>
      <li><a href="#section1">Section 1</a></li>
      <li><a href="#section2">Section 2</a></li>
      <li><a href="#section3">Section 3</a></li>
    </ul>
  `;

	// Add sidebar to the body
	document.body.appendChild(sidebar);
}

export { createSidebar };
