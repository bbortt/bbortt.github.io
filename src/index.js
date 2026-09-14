import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './app';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if (process.env.NODE_ENV === 'development') {
  reportWebVitals(console.log);
}
