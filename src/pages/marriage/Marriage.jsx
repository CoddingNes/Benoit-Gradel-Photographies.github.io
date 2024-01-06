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
            <h2
                id={"mariage title"}
                onClick={() => props.initData()}
            >
                {/* {marriageData["title"]} */}
                {props.findData("mariage", "title")}
            </h2>
            {/* {marriageData["text"].map((ligne, index) => (
                <p
                    key={index}>
                    {ligne}
                </p>))} */}

            {props.findData("mariage", "text")[0].map((ligne, index) => (
                <p
                    id={"mariage text"}
                    onClick={() => props.initData()}
                    key={index}>
                    {ligne}
                </p>
            ))}
            <p
                id={"mariage contactText"}
                onClick={() => props.initData()}
            >
                {/* {marriageData["contact"]["text"]} */}
                {props.findData("mariage", "contactText")}
                <NavLink
                    id={"mariage contactLink"}
                    onClick={() => props.initData()}
                    to='../../contact'
                    className='link__contact link-style hover__anim'>
                    {/* {marriageData["contact"]["link"]} */}
                    {props.findData("mariage", "contactLink")}
                </NavLink>
            </p>

        </main>
    );
};

export default Marriage;