/** @format */

// AdBanner.js

// Function to create an ad banner
function createAdBanner() {
	// Create a banner container
	const bannerContainer = document.createElement("div");
	bannerContainer.id = "ad-banner";
	bannerContainer.style.cssText = `
    width: 100%;
    height: 100px;
    background-color: #f8f8f8;
    color: #333;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #ddd;
    margin-top: 20px;
    font-family: Arial, sans-serif;
    font-size: 18px;
  `;

	// Add the ad content
	const bannerContent = document.createElement("div");
	bannerContent.innerText = "Your Ad Here! Click to know more!";
	bannerContainer.appendChild(bannerContent);

	// Add the banner to the body
	document.body.appendChild(bannerContainer);
}

// Export the function to be used in other files
export { createAdBanner };
