import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@csstools/normalize.css';
import './index.scss';
import Header from './layouts/header/Header';
import Home from './pages/home/Home';
import Portraits from './pages/private/portraits/Portraits';
import Marriage from './pages/private/marriage/Marriage';
import Corporate from './pages/corporate/Corporate';
import Showroom from './pages/showroom/Showroom';
import Contact from './pages/contact/Contact';
import LegalNotices from './pages/legalNotices/LegalNotices';
import Footer from './layouts/footer/Footer';
import Error from './pages/error/Error';
import Prices from './pages/prices/Prices';
import Data from './assets/texts.json';
import DarkBright from './components/darkBright/DarkBright';

function App() {

    const darkModePreference = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [theme, setTheme] = useState(darkModePreference === false ? "light" : "dark");

    useEffect(() => {
        document.body.setAttribute("data-theme", theme);
    },
        [theme]
    );

    return (
        <BrowserRouter>
            <p>{darkModePreference}</p>
            <Header />
            <DarkBright theme={theme} setTheme={setTheme} />
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
        </BrowserRouter>
    );
}

export default App;