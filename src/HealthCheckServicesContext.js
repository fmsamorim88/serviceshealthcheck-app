import React, { createContext, useState, useEffect } from 'react';

const HealthCheckContext = createContext();

const HealthCheckProvider = ({ children }) => {
  const [HealthChecks, setHealthChecks] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/healthcheck`)
      .then(response => response.json())
      .then(data => setHealthChecks(data))
      .catch(error => console.error('Error fetching HealthChecks:', error));
  }, []);

  return (
    <HealthCheckContext.Provider value={HealthChecks}>
      {children}
    </HealthCheckContext.Provider>
  );
};

export { HealthCheckContext, HealthCheckProvider };
