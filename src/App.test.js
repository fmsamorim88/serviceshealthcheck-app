import React from 'react';
import { render,waitFor } from '@testing-library/react';
import HealthCheckList from './HealthCheckList';
import { HealthCheckProvider } from './HealthCheckServicesContext';

test('renders services list correctly', () => {
  const services = [
    { Id: 1, Service: 'service 1', Status:'UP' },
    { Id: 2, Service: 'service 2', Status:'WARNING' },
    { Id: 3, Service: 'service 3', Status:'ERROR' },
  ];

  const { getByText } = render(
    <HealthCheckProvider value={services}>
      <HealthCheckList />
    </HealthCheckProvider>
  );

  services.forEach(async service => {
    await waitFor(() => expect(queryByText(service.Service)).toBe(service.Service));

  });
});
