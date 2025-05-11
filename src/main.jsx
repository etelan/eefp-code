import React from 'react';
import ReactDOM from 'react-dom/client'; // Update import
import { BrowserRouter } from 'react-router-dom';
import Router from './router/router';

const root = ReactDOM.createRoot(document.getElementById('root')); // Use createRoot
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Router />
    </BrowserRouter>
  </React.StrictMode>
);