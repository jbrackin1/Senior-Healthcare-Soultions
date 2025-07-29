function createDropdown(id, label, options, onChange) {
    const dropdownWrapper = document.createElement("div");
    dropdownWrapper.className = "dropdown-wrapper";

    const dropdownLabel = document.createElement("label");
    dropdownLabel.setAttribute("for", id);
    dropdownLabel.textContent = label;

    const dropdownSelect = document.createElement("select");
    dropdownSelect.id = id;
    dropdownSelect.name = id;

    const placeholderOption = document.createElement("option");
    placeholderOption.value = "";
    placeholderOption.textContent = "Select an option";
    placeholderOption.disabled = true;
    placeholderOption.selected = true;
    dropdownSelect.appendChild(placeholderOption);

    options.forEach((option) => {
        const dropdownOption = document.createElement("option");
        dropdownOption.value = option.value;
        dropdownOption.textContent = option.text;
        dropdownSelect.appendChild(dropdownOption);
    });

    dropdownSelect.addEventListener("change", (e) => {
        if (onChange) onChange(e.target.value);
    });

    dropdownWrapper.appendChild(dropdownLabel);
    dropdownWrapper.appendChild(dropdownSelect);

    document.getElementById("dropdown-container").appendChild(dropdownWrapper);
}
dropdownSelect.addEventListener("change", (e) => {
	if (onChange) onChange(e.target.value);
	localStorage.setItem(id, e.target.value); // Save to localStorage
});

fetch("https://api.example.com/states")
	.then((response) => response.json())
	.then((data) => {
		createDropdown("states", "Select State:", data.states, (value) => {
			console.log("Selected state:", value);
		});
	});

// Usage
createDropdown(
	"income",
	"Select Household Income:",
	[
		{ value: "under-20000", text: "Under $20,000" },
		{ value: "20000-34999", text: "$20,000–$34,999" },
		{ value: "35000-49999", text: "$35,000–$49,999" },
		{ value: "50000-74999", text: "$50,000–$74,999" },
		{ value: "75000-99999", text: "$75,000–$99,999" },
		{ value: "100000-149999", text: "$100,000–$149,999" },
		{ value: "150000-199999", text: "$150,000–$199,999" },
		{ value: "200000-plus", text: "$200,000 and above" },
	],
	(value) => {
		console.log("Selected income:", value);
	}
);

// Example: Add another dropdown for states
createDropdown(
	"states",
	"Select State:",
	[
		{ value: "AL", text: "Alabama" },
		{ value: "AK", text: "Alaska" },
		{ value: "AZ", text: "Arizona" },
		{ value: "AR", text: "Arkansas" },
		{ value: "CA", text: "California" },
		{ value: "CO", text: "Colorado" },
		{ value: "CT", text: "Connecticut" },
		{ value: "DE", text: "Delaware" },
		{ value: "FL", text: "Florida" },
		{ value: "GA", text: "Georgia" },
		{ value: "HI", text: "Hawaii" },
		{ value: "ID", text: "Idaho" },
		{ value: "IL", text: "Illinois" },
		{ value: "IN", text: "Indiana" },
		{ value: "IA", text: "Iowa" },
		{ value: "KS", text: "Kansas" },
		{ value: "KY", text: "Kentucky" },
		{ value: "LA", text: "Louisiana" },
		{ value: "ME", text: "Maine" },
		{ value: "MD", text: "Maryland" },
		{ value: "MA", text: "Massachusetts" },
		{ value: "MI", text: "Michigan" },
		{ value: "MN", text: "Minnesota" },
		{ value: "MS", text: "Mississippi" },
		{ value: "MO", text: "Missouri" },
		{ value: "MT", text: "Montana" },
		{ value: "NE", text: "Nebraska" },
		{ value: "NV", text: "Nevada" },
		{ value: "NH", text: "New Hampshire" },
		{ value: "NJ", text: "New Jersey" },
		{ value: "NM", text: "New Mexico" },
		{ value: "NY", text: "New York" },
		{ value: "NC", text: "North Carolina" },
		{ value: "ND", text: "North Dakota" },
		{ value: "OH", text: "Ohio" },
		{ value: "OK", text: "Oklahoma" },
		{ value: "OR", text: "Oregon" },
		{ value: "PA", text: "Pennsylvania" },
		{ value: "RI", text: "Rhode Island" },
		{ value: "SC", text: "South Carolina" },
		{ value: "SD", text: "South Dakota" },
		{ value: "TN", text: "Tennessee" },
		{ value: "TX", text: "Texas" },
		{ value: "UT", text: "Utah" },
		{ value: "VT", text: "Vermont" },
		{ value: "VA", text: "Virginia" },
		{ value: "WA", text: "Washington" },
		{ value: "WV", text: "West Virginia" },
		{ value: "WI", text: "Wisconsin" },
		{ value: "WY", text: "Wyoming" },
	],
	(value) => {
		console.log("Selected state:", value);
	}
);
createDropdown(
    "age-range",
    "Select Age Range:",
    [
        { value: "0-17", text: "0-17 years" },
        { value: "18-25", text: "18-25 years" },
        { value: "26-35", text: "26-35 years" },
        { value: "36-45", text: "36-45 years" },
        { value: "46-55", text: "46-55 years" },
        { value: "56-65", text: "56-65 years" },
        { value: "65+", text: "65+ years" }
    ],
    (value) => {
        console.log("Selected age range:", value);
    }
);

createDropdown(
    "household-size",
    "Select Household Size:",
    [
        { value: "1", text: "1 Person" },
        { value: "2", text: "2 People" },
        { value: "3", text: "3 People" },
        { value: "4", text: "4 People" },
        { value: "5", text: "5 People" },
        { value: "6", text: "6 People" },
        { value: "7+", text: "7 or more People" }
    ],
    (value) => {
        console.log("Selected household size:", value);
    }
);
createDropdown(
    "plan-types",
    "Select Plan Type:",
    [
        { value: "bronze", text: "Bronze" },
        { value: "silver", text: "Silver" },
        { value: "gold", text: "Gold" },
        { value: "platinum", text: "Platinum" },
        { value: "catastrophic", text: "Catastrophic" }
    ],
    (value) => {
        console.log("Selected plan type:", value);
    }
);

// For each page:

// Include the dropdown.js file.
// Call createDropdown with the desired options, label, and id.
// Advantages of This Setup
// Centralized Logic: The function is defined in one place (dropdown.js), so any updates will automatically apply to all pages.
// Reusable: You can call createDropdown with different data for each page.
// Modular: The dropdown function is self-contained, making it easy to use and debug.

