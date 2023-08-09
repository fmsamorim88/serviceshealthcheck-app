import React, { useContext } from 'react';
import { HealthCheckContext } from './HealthCheckServicesContext';

const HealthCheckList = () => {
  const HealthChecks = useContext(HealthCheckContext);

  return (
    <div>
      <h2>Lista de Services e status</h2>
      <ul>
        {HealthChecks.map(HealthCheck => (
          <li key={HealthCheck.Id}>{HealthCheck.Service} -  {HealthCheck.Status}</li>
        ))}
      </ul>
    </div>
  );
};

export default HealthCheckList;
