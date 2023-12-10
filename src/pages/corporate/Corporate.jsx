import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import { NavLink } from 'react-router-dom';
import './corporate.scss';

const Corporate = (props) => {
    const [entreprisesData, setEntreprisesData] = useState([]);
    const setPackageBox = () => {
        setEntreprisesData(props.data);
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
            {entreprisesData["text"].map((line, index) => (
                <p
                    key={index}>
                    {line}
                </p>))}

            <p>
                {entreprisesData["contact"]["text"][0]}
                <NavLink
                    to='../../contact'
                    className='link__contact link-style hover__anim'>
                    {entreprisesData["contact"]["link"]}
                </NavLink>
                {entreprisesData["contact"]["text"][1]}
            </p>
        </main>
    );
};

export default Corporate;