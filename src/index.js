import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App,Navbar } from './App';
import reportWebVitals from './reportWebVitals';

//  use {} to import a named export
//  use * to import all exports

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    <Navbar />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
