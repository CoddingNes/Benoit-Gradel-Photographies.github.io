import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import { NavLink } from 'react-router-dom';
import GlobalData from '../../assets/testtext.json';

const Prices = () => {
    const [priceData, setPriceData] = useState([]);
    const setPackageBox = () => {
        setPriceData(GlobalData.tarifs);
    }

    useEffect(() => {
        setPackageBox();
    })

    if (priceData.length === 0) {
        return <>Still loading...</>;
    }

    return (
        <div>
            <Navbar />
            <h2>{priceData["title"]}</h2>
            {priceData["text"].map((ligne, index) => (
                <p
                    key={index}>
                    {ligne}
                </p>))}
            <p>
                {priceData["link"]["text"] + " "}
                <NavLink
                    to='../../contact'
                    className='home__link__contact'>
                    {priceData["link"]["link"]}
                </NavLink>
            </p>
        </div>
    );
};

export default Prices;