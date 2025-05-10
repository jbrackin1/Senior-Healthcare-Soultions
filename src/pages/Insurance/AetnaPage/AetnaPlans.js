/** @format */

import React from "react";
import BaseInsurancePlansPage from "../../../containers/BaseInsurancePlan";
import { fetchAetnaPlans } from "./AetnaAll"
import InsurancePlan from "../../../components/path/to/InsurancePlan";


const AetnaInsurancePlansPage = () => (
	<BaseInsurancePlansPage fetchPlans={fetchAetnaPlans} providerName="Aetna" />
);

export default AetnaInsurancePlansPage;
