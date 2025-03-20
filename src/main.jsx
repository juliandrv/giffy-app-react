import './styles.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import GiffyApp from './GiffyApp.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GiffyApp />
  </StrictMode>
);
