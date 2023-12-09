import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import { NavLink } from 'react-router-dom';
import GlobalData from '../../assets/texts.json';
import './corporate.scss';

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
        <main id='corporate'>
            <Navbar />
            <h2>{entreprisesData["title"]}</h2>
            {entreprisesData["text"].map((ligne, index) => (
                <p
                    key={index}>
                    {ligne}
                </p>))}

            <p>
                {entreprisesData["contact"]["text"][0]}
                <NavLink
                    to='../../contact'
                    className='link__contact hover__anim'>
                    {entreprisesData["contact"]["link"]}
                </NavLink>
                {entreprisesData["contact"]["text"][1]}
            </p>
        </main>
    );
};

export default Corporate;