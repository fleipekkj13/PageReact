import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './pageMainFiles/header/Header';
import Banner from './pageMainFiles/bannerInsert/Banner';
import Body from './pageMainFiles/body/Body';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

