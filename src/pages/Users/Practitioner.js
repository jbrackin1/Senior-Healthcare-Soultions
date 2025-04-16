// /** @format */

// // src/pages/Insurance/PractitionerPage.js

// import React, { useState } from "react";
// import PractitionerComponent from "../components/ui/Global/PractitionerComponent";

// const PractitionerPage = () => {
// 	const [selectedInsurer, setSelectedInsurer] = useState("");
// 	const [baseUrl, setBaseUrl] = useState("");
// 	const [token, setToken] = useState(""); // Manages tokens
// }

// 	const handleInsurerSelect = (insurer) => {
// 		setSelectedInsurer(insurer);

// const handleInsurerSelect = (insurer) => {
//   setSelectedInsurer(insurer);

//   // Fill in correct URL and token for each insurer
//   switch (insurer) {
//     case 'Aetna':
//       setBaseUrl('https://developerportal.aetna.com');
//       setToken('YOUR_AETNA_ACCESS_TOKEN');
//       break;
//     case 'Humana':
//       setBaseUrl('https://api.humana.com');
//       setToken('YOUR_HUMANA_ACCESS_TOKEN');
//       break;
//     case 'Anthem':
//       setBaseUrl('https://api.anthem.com');
//       setToken('YOUR_ANTHEM_ACCESS_TOKEN');
//       break;
//     case 'Bcbs':
//       setBaseUrl('https://api.bcbs.com');
//       setToken('YOUR_BCBS_ACCESS_TOKEN');
//       break;
//     case 'CarePlus':
//       setBaseUrl('https://api.careplus.com');
//       setToken('YOUR_CAREPLUS_ACCESS_TOKEN');
//       break;
//     case 'Cigna':
//       setBaseUrl('https://api.cigna.com');
//       setToken('YOUR_CIGNA_ACCESS_TOKEN');
//       break;
//     case 'KaiserPermanente':
//       setBaseUrl('https://api.kaiserpermanente.com');
//       setToken('YOUR_KAISER_ACCESS_TOKEN');
//       break;
//     case 'UnitedHealthCare':
//       setBaseUrl('https://api.unitedhealthcare.com');
//       setToken('YOUR_UNITEDHEALTHCARE_ACCESS_TOKEN');
//       break;
//     case 'WellCare':
//       setBaseUrl('https://api.wellcare.com');
//       setToken('YOUR_WELLCARE_ACCESS_TOKEN');
//       break;
//     case 'AarpMedicareAdv':
//       setBaseUrl('https://api.aarpmedicareadv.com');
//       setToken('YOUR_AARP_MEDICARE_ACCESS_TOKEN');
//       break;
//     default:
//       setBaseUrl('');
//       setToken('');
//   }
// };


// 	return (
// 		<div>
// 			<h2>Select Insurer</h2>
// 		<select onChange={(e) => handleInsurerSelect(e.target.value)}>
//   <option value="">-- Select Insurer --</option>
//   <option value="Aetna">Aetna</option>
//   <option value="Humana">Humana</option>
//   <option value="Anthem">Anthem</option>
//   <option value="Bcbs">BCBS (Blue Cross Blue Shield)</option>
//   <option value="CarePlus">CarePlus</option>
//   <option value="Cigna">Cigna</option>
//   <option value="KaiserPermanente">Kaiser Permanente</option>
//   <option value="UnitedHealthCare">United Healthcare</option>
//   <option value="WellCare">WellCare</option>
//   <option value="AarpMedicareAdv">AARP Medicare Advantage</option>
// </select>


// 			{selectedInsurer && (
// 				<PractitionerComponent baseUrl={baseUrl} token={token} />
// 			)}
// 		</div>
// 	);
// };

// export default PractitionerPage;
//FUTURE PlAN AFTER THEY SIGNUP AND 
// PICK A PLAN SO THEY CAN SEE IF THEIR DR
// IS ON THAT INSC...Hopefully
