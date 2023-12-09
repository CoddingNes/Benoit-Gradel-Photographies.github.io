import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from '../../../components/navbar/Navbar';
import { NavLink } from 'react-router-dom';
import GlobalData from '../../../assets/texts.json';
import './marriage.scss';

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
        <main id='marriage'>
            <Navbar />
            <h2>{marriageData["title"]}</h2>
            {marriageData["text"].map((ligne, index) => (
                <p
                    key={index}>
                    {ligne}
                </p>))}

            <p>
                {marriageData["contact"]["text"]}
                <NavLink
                    to='../../contact'
                    className='link__contact hover__anim'>
                    {marriageData["contact"]["link"]}
                </NavLink>
            </p>

        </main>
    );
};

export default Marriage;