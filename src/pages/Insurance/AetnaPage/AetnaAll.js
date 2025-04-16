/** @format */

// src/pages/Insurance/Aetna/AetnaPage.js

import React from "react";
import Collapsible from "../../../components/ui/Global/Collapsablebutton";
import Location from "./DataComponents/Location";
import Organization from "./DataComponents/Organization";
import Practitioner from "./DataComponents/Practitioner";
import StateSelector from "../../../components/ui/Global/StateSlector";
import BaseInsurancePlansPage from "../../../containers/BaseInsurancePlan";
import InsurancePlan from "../../../components/path/to/InsurancePlan";

const AetnaPage = () => {
	const [selectedState, setSelectedState] = React.useState("");

	const handleStateSelect = (state) => {
		setSelectedState(state);
	};

	return (
		<div>
			<h2>Aetna Insurance Details</h2>
			<StateSelector onSelectState={handleStateSelect} />

			<Collapsible title="Insurance Plans">
				<InsurancePlan insurer="Aetna" state={selectedState} />
			</Collapsible>

			<Collapsible title="Location">
				<Location insurer="Aetna" state={selectedState} />
			</Collapsible>

			<Collapsible title="Organization">
				<Organization insurer="Aetna" state={selectedState} />
			</Collapsible>

			<Collapsible title="Practitioner">
				<Practitioner insurer="Aetna" state={selectedState} />
			</Collapsible>
		</div>
	);
};

export default AetnaPage;
