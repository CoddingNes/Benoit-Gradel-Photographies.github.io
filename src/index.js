import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@csstools/normalize.css';
import './index.scss';
import Header from './layouts/header/Header';
import Home from './pages/home/Home';
// import Test from './pages/test/Test';
// import Private from './pages/private/Private';
import Portraits from './pages/private/portraits/Portraits';
import Marriage from './pages/private/marriage/Marriage';
import Corporate from './pages/corporate/Corporate';
// import Author from './pages/author/Author';
import Gallery from './pages/gallery/Gallery';
import Customer from './pages/customer/Customer';
import Contact from './pages/contact/Contact';
import LegalNotices from './pages/legalNotices/LegalNotices';
import Footer from './layouts/footer/Footer';
import Error from './pages/error/Error';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/particuliers" element={<Private />} /> */}
        <Route path="/particuliers/portraits" element={<Portraits />} />
        <Route path="/particuliers/mariage" element={<Marriage />} />
        <Route path="/entreprises" element={<Corporate />} />
        {/* <Route path="/travaildauteur" element={<Author />} /> */}
        <Route path="/gallerie" element={<Gallery />} />
        <Route path="/espaceclient" element={<Customer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions-legales" element={<LegalNotices />} />
        <Route path="/error" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
