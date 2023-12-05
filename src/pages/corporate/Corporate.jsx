import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import { NavLink } from 'react-router-dom';
import GlobalData from '../../assets/testtext.json';

const Corporate = () => {
    const [entreprisesData, setEntreprisesData] = useState([]);
    const setPackageBox = () => {
        setEntreprisesData(GlobalData.entreprises);
    }

    useEffect(() => {
        setPackageBox();
    })

    if (entreprisesData.length === 0) {
        return <>Still loading...</>;
    }

    return (
        <main>
            <Navbar />
            <h2>{entreprisesData["title"]}</h2>
            {entreprisesData["text"].map((ligne, index) => (
                <p
                    key={index}>
                    {ligne}
                </p>))}

            <NavLink to='../contact' className='home__link__contact'>
                {entreprisesData["link"]}
            </NavLink>
        </main>
    );
};

export default Corporate;