import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@csstools/normalize.css';
import './index.scss';
import Header from './layouts/header/Header';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Portraits from './pages/private/portraits/Portraits';
import Marriage from './pages/private/marriage/Marriage';
import Corporate from './pages/corporate/Corporate';
import Showroom from './pages/showroom/Showroom';
import Contact from './pages/contact/Contact';
// import LegalNotices from './pages/legalNotices/LegalNotices';
import Footer from './layouts/footer/Footer';
import Error from './pages/error/Error';
import Prices from './pages/prices/Prices';
import Data from './assets/texts.json';
import DarkBright from './components/darkBright/DarkBright';

function App() {

    const darkModePreference = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [theme, setTheme] = useState(darkModePreference === false ? "light" : "dark");
    const [showNav, setShowNav] = useState(true);

    useEffect(() => {
        document.body.setAttribute("data-theme", theme);
    },
        [theme]
    );
    console.log(showNav);


    return (
        <BrowserRouter>
            <Header />
            <DarkBright theme={theme} setTheme={setTheme} />
            <Navbar data={Data.navigation} showNav={showNav} />
            <Routes>
                <Route path="/Benoit-Gradel-Photographies.github.io/" element={<Home data={Data} showNav={setShowNav} />} />
                <Route path="/Benoit-Gradel-Photographies.github.io/prestations/portraits" element={<Portraits data={Data.portraits} showNav={setShowNav} />} />
                <Route path="/Benoit-Gradel-Photographies.github.io/prestations/mariage" element={<Marriage data={Data.mariages} showNav={setShowNav} />} />
                <Route path="/Benoit-Gradel-Photographies.github.io/prestations/entreprises" element={<Corporate data={Data.entreprises} showNav={setShowNav} />} />
                <Route path="/Benoit-Gradel-Photographies.github.io/gallerie" element={<Showroom data={Data.showRoom} showNav={setShowNav} />} />
                <Route path="/Benoit-Gradel-Photographies.github.io/contact" element={<Contact data={Data.contact} showNav={setShowNav} />} />
                {/* <Route path="/Benoit-Gradel-Photographies.github.io/mentions-legales" element={<LegalNotices showNav={setShowNav} />} /> */}
                <Route path="/Benoit-Gradel-Photographies.github.io/grille-de-tarifs" element={<Prices data={Data.tarifs} showNav={setShowNav} />} />
                <Route path="/Benoit-Gradel-Photographies.github.io/*" element={<Error showNav={setShowNav} />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;