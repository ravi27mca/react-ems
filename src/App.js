import React, { useEffect } from 'react';
import './App.css';
import Dashboard from './components/dashboard/Dashboard.jsx';
import KeycloakService from './services/KeycloakService';

function App() {
  useEffect(() => {
    // Set up an interval to check the token every minute (60000ms)
    const timer = setInterval(() => {
      KeycloakService.updateToken();
    }, 60000);

    // Clean up the timer when the component unmounts
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <Dashboard />
    </div>
  );
}

export default App;
