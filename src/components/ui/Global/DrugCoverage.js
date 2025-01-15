// Jerod you need to add this npm install react-select
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { fetchDrugSuggestions} from "../../../utils/api/fetchDrugSuggestions";
import { fetchDrugCoverage } from "../../../utils/api/fetchDrugSuggestions";
import AsyncSelect from "react-select/async";
import Button from "../Global/button";

const CoverageContainer = styled.div`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.background || "#f8f9fa"};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: auto;
`;

const ResultsTable = styled.table`
  width: 100%;
  margin-top: 1rem;
  border-collapse: collapse;
  border: 1px solid #ccc;

  th, td {
    padding: 0.5rem;
    text-align: left;
    border: 1px solid #ddd;
  }

  th {
    background-color: #f4f4f4;
  }
`;

const DrugCoverage = ({ isAuthenticated }) => {
  const location = useLocation();
  const selectedPlan = location.state?.selectedPlan || null;

  const [drugRxCuis, setDrugRxCuis] = useState("");
  const [planIds, setPlanIds] = useState(selectedPlan ? [selectedPlan] : []);
  const [coverageData, setCoverageData] = useState([]);
  const [error, setError] = useState("");

  // Limit Plan IDs based on user authentication state
  useEffect(() => {
    if (!isAuthenticated && planIds.length > 1) {
      setPlanIds(planIds.slice(0, 1));
    }
  }, [isAuthenticated, planIds]);

  const handleFetchCoverage = async () => {
    if (planIds.length === 0 || !drugRxCuis) {
      setError("Please select at least one plan and provide a drug identifier.");
      return;
    }

    try {
      const data = await fetchDrugCoverage({ planIds, drugRxCuis });
      setCoverageData(data);
      setError("");
    } catch (err) {
      setError("Failed to fetch drug coverage data. Please try again.");
    }
  };

  return (
    <CoverageContainer>
      <h2>Drug Coverage</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <AsyncSelect
        cacheOptions
        loadOptions={fetchDrugSuggestions}
        onChange={(option) => setDrugRxCuis(option.value)}
        placeholder="Search for a drug..."
      />

      <Button onClick={handleFetchCoverage}>Fetch Coverage</Button>

      {coverageData.length > 0 && (
        <ResultsTable>
          <thead>
            <tr>
              <th>Plan</th>
              <th>Drug Name</th>
              <th>Coverage</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {coverageData.map((entry, index) => (
              <tr key={index}>
                <td>{entry.planName}</td>
                <td>{entry.drugName}</td>
                <td>{entry.coverage}</td>
                <td>{entry.details}</td>
              </tr>
            ))}
          </tbody>
        </ResultsTable>
      )}
    </CoverageContainer>
  );
};

export default DrugCoverage;
