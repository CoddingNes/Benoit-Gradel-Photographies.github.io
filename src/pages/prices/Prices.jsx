import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import { NavLink } from 'react-router-dom';
import PriceTable from '../../components/priceTable/PriceTable';
import './prices.scss';

const Prices = (props) => {
    const [priceData, setPriceData] = useState([]);
    const setPackageBox = () => {
        setPriceData(props.data);
    }

    useEffect(() => {
        setPackageBox();
    })

    if (priceData.length === 0) {
        return <>Still loading...</>;
    }

    return (
        <main>
            <Navbar />
            <h2>{priceData["title"]}</h2>
            {priceData["text"].map((ligne, index) => (
                <p
                    key={index}>
                    {ligne}
                </p>))}
            {priceData["tableau"].map((table, index) => (
                <PriceTable
                    titles={table["titres"]}
                    colspan={table["largeurTitre"]}
                    lines={table["lignes"]}
                    key={index}
                />
            ))}
            <p>
                {priceData["link"]["text"] + " "}
                <NavLink
                    to='../../contact'
                    className='home__link__contact link-style hover__anim'>
                    {priceData["link"]["link"]}
                </NavLink>
            </p>
            <div className='notes__box'>
                {priceData["notes"]["text"].map((note, index) => (
                    <p key={index} >
                        {note}
                    </p>
                ))
                }
            </div>
        </main>
    );
};

export default Prices;