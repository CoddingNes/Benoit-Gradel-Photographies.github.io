import React, { useState, useEffect } from 'react';
import Navbar from '../../../components/navbar/Navbar';
import { NavLink } from 'react-router-dom';
import './portraits.scss';
import Package from '../../../components/package/Package';
import GlobalData from '../../../assets/testtext.json';


const Portraits = () => {
    const [portraitsData, setPortraitsData] = useState([]);
    const setPackageBox = () => {
        setPortraitsData(GlobalData.portraits);
    }

    useEffect(() => {
        setPackageBox();
    })

    if (portraitsData.length === 0) {
        return <>Still loading...</>;
    }

    return (
        <main id='portraits'>
            <Navbar />
            <h2>{portraitsData["title"]}</h2>
            {portraitsData["text"].map((ligne, index) => (
                <p
                    key={index}>
                    {ligne}
                </p>))}

            <NavLink to='../../contact' className='home__link__contact'>
                {portraitsData["link"]}
            </NavLink>

            <Package data={portraitsData} />

            <div className='notes__box'>
                {portraitsData["notes"].map((note, index) => (
                    <p key={index} >
                        {note}
                    </p>
                ))
                }
            </div>
            <p>
                {portraitsData["price-grid"]["text"] + " "}
                <NavLink
                    to='../../grille-de-tarifs'
                    className='portraits__link__prices'>
                    {portraitsData["price-grid"]["link"]}
                </NavLink>
            </p>
        </main >
    );
};

export default Portraits;