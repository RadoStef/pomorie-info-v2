import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CategoriesProvider } from './contexts/CategoriesContext';
import { GeolocationProvider } from './contexts/GeolocationContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CategoriesProvider>
      <GeolocationProvider>
        <App />
      </GeolocationProvider>
    </CategoriesProvider>
  </React.StrictMode>
);
