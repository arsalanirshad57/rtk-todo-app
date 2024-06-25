import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RdkProvider } from './redux/redux-provider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RdkProvider>
      <App />
    </RdkProvider>
  </React.StrictMode>
);

