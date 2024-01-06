import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './corporate.scss';

const Corporate = (props) => {
    const [entreprisesData, setEntreprisesData] = useState([]);
    const getData = () => {
        setEntreprisesData(props.data);
        props.showNav(true);
    }

    useEffect(() => {
        getData();
    })

    if (entreprisesData.length === 0) {
        return <>Still loading...</>;
    }

    return (
        <main id='corporate'>
            <h2
                id={"corporate title"}
                onClick={() => props.initData()}
            >
                {/* {entreprisesData["title"]} */}
                {props.findData("corporate", "title")}
            </h2>
            {/* {entreprisesData["text"].map((line, index) => (
                <p
                    key={index}>
                    {line}
                </p>))} */}
            {props.findData("corporate", "text")[0].map((ligne, index) => (
                <p
                    id={"corporate text"}
                    onClick={() => props.initData()}
                    key={index}>
                    {ligne}
                </p>
            ))}

            <p
                id={"corporate contactText"}
                onClick={() => props.initData()}
            >
                {/* {entreprisesData["contact"]["text"][0]} */}
                {props.findData("corporate", "contactText")}
                <NavLink
                    id={"corporate contactLink"}
                    onClick={() => props.initData()}
                    to='../../contact'
                    className='link__contact link-style hover__anim'>
                    {/* {entreprisesData["contact"]["link"]} */}
                    {props.findData("corporate", "contactLink")}
                </NavLink>
                {/* {entreprisesData["contact"]["text"][1]}
                {props.findData("corporate", "contactText")} */}
            </p>
            <p
                id={"corporate contactText2"}
                onClick={() => props.initData()}
            >
                {props.findData("corporate", "contactText2")}
            </p>
        </main>
    );
};

export default Corporate;