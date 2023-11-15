import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@csstools/normalize.css';
//import './style/index.scss';
import Home from './pages/home/Home';
import Customer from './pages/customer/Customer';
import Header from './layouts/header/Header';
import Footer from './layouts/footer/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path=/*"/benoit-gradel-photographies.fr/"*/"/" element={<Home />} />
        <Route path="/client" element={<Customer />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
