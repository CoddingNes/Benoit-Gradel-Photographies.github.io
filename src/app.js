import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@csstools/normalize.css';
import './index.scss';
import Header from './layouts/header/Header';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Portraits from './pages/portraits/Portraits';
import Marriage from './pages/marriage/Marriage';
import Corporate from './pages/corporate/Corporate';
import Showroom from './pages/showroom/Showroom';
import Contact from './pages/contact/Contact';
import Footer from './layouts/footer/Footer';
import Error from './pages/error/Error';
import Prices from './pages/prices/Prices';
// import Data from './assets/texts.json';
import DarkBright from './components/darkBright/DarkBright';
import Dashboard from "./components/dashboard/Dashboard";
import useToken from "./components/dashboard/useToken";
import Logout from "./components/logout/Logout";
import DataForm from "./components/dataForm/DataForm";

function App() {

    const darkModePreference = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [theme, setTheme] = useState(darkModePreference === false ? "light" : "dark");
    const [showNav, setShowNav] = useState(true);
    const [showNavDetails, setShowNavDetails] = useState(false);
    const { token, setToken } = useToken();
    const [layer, setLayer] = useState();
    const [element, setElement] = useState();
    const [dataType, setDataType] = useState();

    useEffect(() => {
        document.body.setAttribute("data-theme", theme);
    },
        [theme]
    );

    const [changeData, setChangeData] = useState(false);

    const initData = () => {
        if (token) {
            onclick = (event) => {
                if (event.ctrlKey) {
                    event.preventDefault();
                    const id = event.target.id.split(' ')
                    setLayer(id[0])
                    setElement(id[1])
                    if (id[2]) { setDataType(id[2]) }
                    setChangeData(true);
                }
            };
        }
    }

    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    async function getData() {
        const url = "http://localhost:8080/admin"
        await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(response => {
                return response.json();
            })
            .then((data) => {
                setData(data);
            })
            .catch(err => {
                setError(true);
                console.log(err)
            })
            .finally(() => {
                setLoading(false);
            });
    }

    useEffect(() => {
        getData();
        findData();
        // eslint-disable-next-line
    }, [])

    const findData = (layer, element) => {
        if (data) {
            for (let i = 0; i < data.length; i++) {
                if (data[i].layer === layer && data[i].element === element) {
                    if (data[i].content) {
                        let data1 = []
                        let data2 = []
                        let data3 = []
                        const content = []
                        if (data[i].content1) {
                            if (data[i].content2) {
                                for (let j = 0; j < data[i].content2.length; j++) {
                                    data3.push(data[i].content2[j]);
                                }
                                content.push(data3)
                            }
                            for (let j = 0; j < data[i].content1.length; j++) {
                                data2.push(data[i].content1[j]);
                            }
                            content.unshift(data2)
                        }
                        for (let j = 0; j < data[i].content.length; j++) {
                            data1.push(data[i].content[j]);
                        }
                        content.unshift(data1)
                        return content
                    } else {
                        return false
                    }
                }
            }
            return (['no data'])
        }
    }

    if (loading) { return "loading..." }
    if (error) { return "error..." }

    return (
        <BrowserRouter>
            <Header
                initData={(initData)}
                // data={data}
                findData={findData}
                // title={Data.titre}
                token={token} />
            <DarkBright
                theme={theme}
                setTheme={setTheme} />
            <DataForm
                changeData={changeData}
                setChangeData={setChangeData}
                token={token}
                element={element}
                layer={layer}
                dataType={dataType}
                findData={findData}
            />
            <Logout token={token}
            />
            <Navbar
                // data={Data.navigation}
                showNav={showNav}
                showNavDetails={showNavDetails}
                setShowNavDetails={setShowNavDetails}
                initData={initData}
                findData={findData} />
            <Routes>
                <Route path="/Benoit-Gradel-Photographies.github.io/Admin"
                    element={
                        <Dashboard
                            token={token}
                            setToken={setToken}
                        />} />
                {/* <Route path="/Benoit-Gradel-Photographies.github.io/Admin/login"
                    element={
                        <Login
                            setToken={setToken}
                        />} /> */}
                <Route path="/Benoit-Gradel-Photographies.github.io/"
                    element={
                        <Home
                            // data={Data}
                            showNav={setShowNav}
                            initData={initData}
                            findData={findData}
                            token={token}
                        />} />
                <Route path="/Benoit-Gradel-Photographies.github.io/prestations/portraits" element={
                    <Portraits
                        // data={Data.portraits}
                        initData={initData}
                        findData={findData}
                        showNav={setShowNav}
                        setShowNavDetails={setShowNavDetails}
                    />} />
                <Route path="/Benoit-Gradel-Photographies.github.io/prestations/mariage" element={
                    <Marriage
                        // data={Data.mariages}
                        initData={initData}
                        findData={findData}
                        showNav={setShowNav}
                        setShowNavDetails={setShowNavDetails}
                    />} />
                <Route path="/Benoit-Gradel-Photographies.github.io/prestations/entreprises" element={
                    <Corporate
                        // data={Data.entreprises}
                        initData={initData}
                        findData={findData}
                        showNav={setShowNav}
                        setShowNavDetails={setShowNavDetails}
                    />} />
                <Route path="/Benoit-Gradel-Photographies.github.io/gallerie" element={
                    <Showroom
                        // data={Data.showroom}
                        initData={initData}
                        findData={findData}
                        showNav={setShowNav}
                        setShowNavDetails={setShowNavDetails}
                    />} />
                <Route path="/Benoit-Gradel-Photographies.github.io/contact" element={
                    <Contact
                        // data={Data.contact}
                        initData={initData}
                        findData={findData}
                        showNav={setShowNav}
                        setShowNavDetails={setShowNavDetails}
                    />} />
                {/* <Route path="/Benoit-Gradel-Photographies.github.io/mentions-legales" element={<LegalNotices showNav={setShowNav} />} /> */}
                <Route path="/Benoit-Gradel-Photographies.github.io/grille-de-tarifs" element={
                    <Prices
                        // data={Data.tarifs}
                        initData={initData}
                        findData={findData}
                        showNav={setShowNav}
                        setShowNavDetails={setShowNavDetails}
                        token={token}
                    />} />
                <Route path="/Benoit-Gradel-Photographies.github.io/*" element={
                    <Error
                        initData={initData}
                        findData={findData}
                        showNav={setShowNav}
                        setShowNavDetails={setShowNavDetails}
                    />} />
            </Routes>
            <Footer
                initData={initData}
                findData={findData}
            />
        </BrowserRouter>
    );
}

export default App;