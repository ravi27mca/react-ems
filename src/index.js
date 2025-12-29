import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import KeycloakService from './services/KeycloakService';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div style={{ textAlign: 'center', marginTop: '50px' }}>
    <h2>Checking Authentication...</h2>
  </div>
);

KeycloakService.initKeycloak(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
