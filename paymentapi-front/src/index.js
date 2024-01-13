import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
// import AuthProvider from './context/AuthProvider'
// import reportWebVitals from './reportWebVitals';

const rootNode = document.getElementById('root');
const root = createRoot(rootNode);
root.render(
  <StrictMode>
    {/* <AuthProvider> */}
      <App />  
    {/* </AuthProvider> */}
  </StrictMode>
);
// reportWebVitals();
