import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; 
import { init } from '@shadecdn/core';

// Initialize ShadeCDN 
init({
  projectId: 'YOUR_PROJECT_ID', 
  });

  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
    );
    root.render(
      <React.StrictMode>
          <App />
            </React.StrictMode>
            );
            