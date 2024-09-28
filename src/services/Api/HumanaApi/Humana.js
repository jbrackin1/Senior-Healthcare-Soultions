/** @format */

// https://developers.humana.com/medication-api/doc
// Shit ton of endpoints need to sort and see what all we need
// Test Sandbox APIs
// OAuth
// Register Your Application
// API Reference
// AllergyIntolerance
// CarePlan
// CareTeam
// Condition
// Coverage
// DocumentReference
// Drug Formulary 
// Overview
// ENDPOINTS
// List
// Medication
// MedicationKnowledge
// Explanation of Benefits
// Goal
// Immunization
// MedicationRequest
// Observation
// Patient
// Procedure
// Provider Directory 
// Overview
// ENDPOINTS
// InsurancePlan
// Location
// Organization
// Practitioner
// PractitionerRole
// Capability Statement
// Conformance

// https://developers.humana.com/account/signup
// https://developers.humana.com/syntheticdata/healthplan-price-transparency


import React from "react";
import BaseInsurancePlansPage from "./BaseInsurancePlansPage";
import { fetchHumanaPlans } from "./services/humanaService";

const HumanaInsurancePlansPage = () => (
	<BaseInsurancePlansPage fetchPlans={fetchHumanaPlans} providerName="Humana" />
);

export default HumanaInsurancePlansPage;
