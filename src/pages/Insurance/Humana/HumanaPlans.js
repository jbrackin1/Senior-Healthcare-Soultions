/** @format */

import React from "react";
import BaseInsurancePlansPage from "./BaseInsurancePlansPage";
import { fetchHumanaPlans } from "./services/humanaService";

const HumanaInsurancePlansPage = () => (
	<BaseInsurancePlansPage fetchPlans={fetchHumanaPlans} providerName="Humana" />
);

export default HumanaInsurancePlansPage;
