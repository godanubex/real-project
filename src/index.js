import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Buy from "./View/Buy/Buy"
import Sell from "./View/Sell/Sell"
import Header from './Component/Header';
import Content from './Component/Content';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Sell" element={<Sell /> } />
      <Route path="Buy" element={<Buy />} />
   {/*   <Route path="expenses" element={<Expenses />} />
      <Route path="invoices" element={<Invoices />} />
*/} </Routes>
  </BrowserRouter>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
