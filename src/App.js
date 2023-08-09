import './App.css';
import { HealthCheckProvider } from './HealthCheckServicesContext';
import HealthCheckList from './HealthCheckList.js';


function App() {
  return (
    <div className="App">
      <HealthCheckProvider>
        <HealthCheckList />
      </HealthCheckProvider>
    </div>
  );
}

export default App;
