// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // You can add your global styles here
import App from './App'; // This is the main React component

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // This is where the app will be injected in index.html
);
