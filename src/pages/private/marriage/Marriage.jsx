import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from '../../../components/navbar/Navbar';
import { NavLink } from 'react-router-dom';
import GlobalData from '../../../assets/testtext.json';

const Marriage = () => {
    const [marriageData, setMarriageData] = useState([]);
    const setPackageBox = () => {
        setMarriageData(GlobalData.mariages);
    }

    useEffect(() => {
        setPackageBox();
    })

    if (marriageData.length === 0) {
        return <>Still loading...</>;
    }

    return (
        <main>
            <Navbar />
            <h2>{marriageData["title"]}</h2>
            {marriageData["text"].map((ligne, index) => (
                <p
                    key={index}>
                    {ligne}
                </p>))}

            <NavLink to='../../contact' className='home__link__contact'>
                {marriageData["link"]}
            </NavLink>
        </main>
    );
};

export default Marriage;