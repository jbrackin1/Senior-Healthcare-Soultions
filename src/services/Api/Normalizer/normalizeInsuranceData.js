/** @format */

// Define mappings: Each provider will have its own mapping,
//  e.g., for "Aetna" and other providers.

// src/services/Normalizer/normalizeInsuranceData.js

// Template for the normalized insurance data structure
const normalizedDataTemplate = {
  basicInfo: {
    age: null,
    sex: null,
    veteranStatus: null,
  },
  healthConditions: {
    preExistingConditions: [],
    medications: [],
  },
  lifestyle: {
    fitnessPrograms: [],
    telehealthServices: false,
  },
  coverageDetails: {
    planType: null,
    network: {
      inNetwork: [],
      outNetwork: [],
    },
    hospitalCoverage: [],
  },
  costAndBenefits: {
    premiums: null,
    deductibles: null,
    copays: null,
    coinsurance: null,
    outOfPocketMax: null,
    specificTreatmentsCoverage: [],
  },
  additionalBenefits: {
    dental: false,
    vision: false,
    hearing: false,
    alternativeMedicine: false,
  },
  enrollmentDetails: {
    medicareEligibility: false,
    medicaidEligibility: false,
    enrollmentPeriods: [],
  },
  ratingsAndFlexibility: {
    planRatings: null,
    planFlexibility: false,
  },
};

// Mappings for different providers
const mappings = {
  Aetna: {
    age: 'client_age',
    sex: 'gender',
    veteranStatus: 'is_veteran',
    preExistingConditions: 'medical_conditions',
    medications: 'prescribed_drugs',
    fitnessPrograms: 'fitness_programs',
    telehealthServices: 'telehealth',
    planType: 'type_of_plan',
    inNetwork: 'providers_in_network',
    outNetwork: 'providers_out_network',
    hospitalCoverage: 'hospitals_covered',
    premiums: 'monthly_premium',
    deductibles: 'yearly_deductible',
    copays: 'copay_amount',
    coinsurance: 'coinsurance_percentage',
    outOfPocketMax: 'out_of_pocket_max',
    specificTreatmentsCoverage: 'covered_treatments',
    dental: 'dental_coverage',
    vision: 'vision_coverage',
    hearing: 'hearing_coverage',
    alternativeMedicine: 'alternative_medicine_coverage',
    medicareEligibility: 'medicare_eligible',
    medicaidEligibility: 'medicaid_eligible',
    enrollmentPeriods: 'enrollment_dates',
    planRatings: 'customer_ratings',
    planFlexibility: 'flexibility_of_plan',
  },
  BlueCross: {
    age: 'applicant_age',
    sex: 'applicant_sex',
    veteranStatus: 'veteran',
    preExistingConditions: 'conditions',
    medications: 'medications_list',
    fitnessPrograms: 'fitness_programs_offered',
    telehealthServices: 'virtual_health',
    planType: 'plan_category',
    inNetwork: 'in_network_providers',
    outNetwork: 'out_of_network_providers',
    hospitalCoverage: 'hospital_list',
    premiums: 'premium',
    deductibles: 'deductible',
    copays: 'copay',
    coinsurance: 'coinsurance_rate',
    outOfPocketMax: 'max_out_of_pocket',
    specificTreatmentsCoverage: 'treatment_coverage',
    dental: 'dental_included',
    vision: 'vision_included',
    hearing: 'hearing_included',
    alternativeMedicine: 'alt_medicine_coverage',
    medicareEligibility: 'medicare_eligibility',
    medicaidEligibility: 'medicaid_eligibility',
    enrollmentPeriods: 'enrollment_window',
    planRatings: 'ratings',
    planFlexibility: 'flexibility',
  },
  Cigna: {
    // Add mappings for Cigna here...
  },
};

// Normalization function
function normalizeInsuranceData(provider, data) {
  const mapping = mappings[provider];
  if (!mapping) {
    throw new Error(`No mapping found for provider: ${provider}`);
  }

  const normalizedData = JSON.parse(JSON.stringify(normalizedDataTemplate)); // Deep copy template
  
  for (const [key, mappedField] of Object.entries(mapping)) {
    if (data[mappedField] !== undefined) {
      if (Array.isArray(normalizedData[key])) {
        normalizedData[key] = [...data[mappedField]];
      } else {
        normalizedData[key] = data[mappedField];
      }
    }
  }

  return normalizedData;
}

module.exports = { normalizeInsuranceData };
