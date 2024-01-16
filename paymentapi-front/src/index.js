import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';

const rootNode = document.getElementById('root');
const root = createRoot(rootNode);
root.render(
  <StrictMode>
      <App />  
  </StrictMode>
);
// reportWebVitals();
