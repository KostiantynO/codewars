import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App';
import { reportWebVitals } from './reportWebVitals';

const root = document.getElementById('root');
if (!root) throw new Error('Please add <div id="root"> to index.html');

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// https://bit.ly/CRA-vitals
reportWebVitals(console.log);
