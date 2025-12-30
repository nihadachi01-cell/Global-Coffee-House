import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error("Critical Error: Could not find root element to mount the application.");
} else {
  try {
    const root = createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("Global Coffee House application successfully initialized.");
  } catch (err) {
    console.error("Critical Error during React initialization:", err);
    rootElement.innerHTML = `
      <div style="background: #1f1614; color: #f59e0b; height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; font-family: serif; text-align: center; padding: 20px;">
        <h1 style="font-size: 2rem; margin-bottom: 10px;">Application Error</h1>
        <p style="color: #f7f5f4;">Failed to start the application. Please check the browser console for details.</p>
      </div>
    `;
  }
}