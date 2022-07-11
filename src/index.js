import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShipList from './a-pages/ShipList';
import ShipInfo from './components/ShipInfo';
import Welcome from './a-pages/Welcome'
import ErrorPage from './components/ErrorPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
      <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/ShipList' element={<ShipList />} />
          <Route path='/shipinfo/:id' element={<ShipInfo />} />
          <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
