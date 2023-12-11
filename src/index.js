import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@csstools/normalize.css';
import './index.scss';
import App from './app';
// import Header from './layouts/header/Header';
// import Home from './pages/home/Home';
// // import Test from './pages/test/Test';
// import Portraits from './pages/private/portraits/Portraits';
// import Marriage from './pages/private/marriage/Marriage';
// import Corporate from './pages/corporate/Corporate';
// import Showroom from './pages/showroom/Showroom';
// import Contact from './pages/contact/Contact';
// import LegalNotices from './pages/legalNotices/LegalNotices';
// import Footer from './layouts/footer/Footer';
// import Error from './pages/error/Error';
// import Prices from './pages/prices/Prices';
// import Data from './assets/texts.json';
// import DarkBright from './components/darkBright/DarkBright';
// // import useLocalStorage from 'use-local-storage';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />

    {/* <BrowserRouter>
      <Header />
      <DarkBright />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prestations/portraits" element={<Portraits data={Data.portraits} />} />
        <Route path="/prestations/mariage" element={<Marriage data={Data.mariages} />} />
        <Route path="/prestations/entreprises" element={<Corporate data={Data.entreprises} />} />
        <Route path="/gallerie" element={<Showroom />} />
        <Route path="/contact" element={<Contact data={Data.contact} />} />
        <Route path="/mentions-legales" element={<LegalNotices />} />
        <Route path="/grille-de-tarifs" element={<Prices data={Data.tarifs} />} />
        <Route path="/error" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter> */}
  </React.StrictMode>
);
