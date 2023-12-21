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
import Dashboard from "./components/dashboard/Dashboard";
import useToken from "./components/dashboard/useToken";

// function setToken(userToken) {
//     sessionStorage.setItem('token', JSON.stringify(userToken));
// }

// function getToken() {
//     const tokenString = sessionStorage.getItem('token');
//     const userToken = JSON.parse(tokenString);
//     return userToken?.token
// }

function App() {

    const darkModePreference = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [theme, setTheme] = useState(darkModePreference === false ? "light" : "dark");
    const [showNav, setShowNav] = useState(true);
    const [showNavDetails, setShowNavDetails] = useState(false);
    const { token, setToken } = useToken();
    // const [token, setToken] = useState();

    useEffect(() => {
        document.body.setAttribute("data-theme", theme);
    },
        [theme]
    );

    // const token = getToken();

    return (
        <BrowserRouter>
            <Header title={Data.titre} />
            <DarkBright
                theme={theme}
                setTheme={setTheme} />
            <Navbar
                data={Data.navigation}
                showNav={showNav}
                showNavDetails={showNavDetails}
                setShowNavDetails={setShowNavDetails} />
            <Routes>
                <Route path="/Benoit-Gradel-Photographies.github.io/Admin"
                    element={
                        <Dashboard
                            token={token}
                            setToken={setToken}
                        />} />
                <Route path="/Benoit-Gradel-Photographies.github.io/" element={
                    <Home
                        data={Data}
                        showNav={setShowNav}
                    />} />
                <Route path="/Benoit-Gradel-Photographies.github.io/prestations/portraits" element={
                    <Portraits
                        data={Data.portraits}
                        showNav={setShowNav}
                        setShowNavDetails={setShowNavDetails}
                    />} />
                <Route path="/Benoit-Gradel-Photographies.github.io/prestations/mariage" element={
                    <Marriage
                        data={Data.mariages}
                        showNav={setShowNav}
                        setShowNavDetails={setShowNavDetails}
                    />} />
                <Route path="/Benoit-Gradel-Photographies.github.io/prestations/entreprises" element={
                    <Corporate
                        data={Data.entreprises}
                        showNav={setShowNav}
                        setShowNavDetails={setShowNavDetails}
                    />} />
                <Route path="/Benoit-Gradel-Photographies.github.io/gallerie" element={
                    <Showroom
                        data={Data.showroom}
                        showNav={setShowNav}
                        setShowNavDetails={setShowNavDetails}
                    />} />
                <Route path="/Benoit-Gradel-Photographies.github.io/contact" element={
                    <Contact
                        data={Data.contact}
                        showNav={setShowNav}
                        setShowNavDetails={setShowNavDetails}
                    />} />
                {/* <Route path="/Benoit-Gradel-Photographies.github.io/mentions-legales" element={<LegalNotices showNav={setShowNav} />} /> */}
                <Route path="/Benoit-Gradel-Photographies.github.io/grille-de-tarifs" element={
                    <Prices
                        data={Data.tarifs}
                        showNav={setShowNav}
                        setShowNavDetails={setShowNavDetails}
                    />} />
                <Route path="/Benoit-Gradel-Photographies.github.io/*" element={
                    <Error
                        showNav={setShowNav}
                        setShowNavDetails={setShowNavDetails}
                    />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;