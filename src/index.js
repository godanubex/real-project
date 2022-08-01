import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../src/View/Sell/index.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UsersContextProvider } from "./View/Sell/store/users-context";
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
    <UsersContextProvider>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Sell" element={<Sell /> } />
      <Route path="Buy" element={<Buy />} />
   {/*   <Route path="expenses" element={<Expenses />} />
      <Route path="invoices" element={<Invoices />} />
*/} </Routes>
</UsersContextProvider>
  </BrowserRouter>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
