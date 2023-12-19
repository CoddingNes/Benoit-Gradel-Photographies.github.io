import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './marriage.scss';

const Marriage = (props) => {
    const [marriageData, setMarriageData] = useState([]);
    const setPackageBox = () => {
        setMarriageData(props.data);
        props.showNav(true);
    }

    useEffect(() => {
        setPackageBox();
    })

    if (marriageData.length === 0) {
        return <>Still loading...</>;
    }

    return (
        <main id='marriage'>
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
                    className='link__contact link-style hover__anim'>
                    {marriageData["contact"]["link"]}
                </NavLink>
            </p>

        </main>
    );
};

export default Marriage;