import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './portraits.scss';
import Package from '../../../components/package/Package';


const Portraits = (props) => {
    const [portraitsData, setPortraitsData] = useState([]);
    const setPackageBox = () => {
        setPortraitsData(props.data);
        props.showNav(true);
    }

    useEffect(() => {
        setPackageBox();
    })

    if (portraitsData.length === 0) {
        return <>Still loading...</>;
    }

    return (
        <main onClick={() => { props.setShowNavDetails(false) }}>
            <div id='portraits'>
                {props.findData("portraits", "title").map((ligne, index) => (
                    <h2
                        id="portraits title"
                        onClick={() => props.initData()}
                        key={index}>
                        {ligne}
                    </h2>))}
                {/* <h2
                >{props.findData("portraits", "title")}</h2> */}
                {/* {portraitsData["text"].map((ligne, index) => (
                    <p
                        key={index}>
                        {ligne}
                    </p>))} */}
                {/* <div
                    id="portraits text"
                    onClick={() => props.initData()}
                > */}
                {props.findData("portraits", "text").map((ligne, index) => (
                    <p
                        id="portraits text"
                        onClick={() => props.initData()}
                        key={index}>
                        {ligne}
                    </p>))}
                {/* </div> */}

                <p
                    id="portraits contactText"
                    onClick={() => props.initData()}>
                    {props.findData("portraits", "contactText")}
                    {/* {portraitsData["contact"]["text"]} */}
                    <NavLink
                        id="portraits contactLink"
                        onClick={() => props.initData()}
                        to='../../contact'
                        className='link__contact link-style hover__anim'>
                        {/* {portraitsData["contact"]["link"]} */}
                        {props.findData("portraits", "contactLink")}

                    </NavLink>
                </p>

                <Package
                    data={portraitsData.forfaits}
                    initData={props.initData}
                    findData={props.findData} />

                <div className='notes__box'>
                    {/* {portraitsData["notes"].map((note, index) => (
                        <p id="portraits notes"
                            onClick={() => props.initData()}
                            key={index} >
                            {note}
                        </p>
                    ))
                    } */}
                    {props.findData("portraits", "notes").map((ligne, index) => (
                        <p key={index}
                            id="portraits notes"
                            onClick={() => props.initData()}
                        >
                            {ligne}
                        </p>
                    ))}
                </div>
                <p
                    id="portraits priceText"
                    onClick={() => props.initData()}
                >
                    {/* {portraitsData["price-grid"]["text"] + " "} */}
                    {props.findData("portraits", "priceText")}
                    <NavLink
                        to='/Benoit-Gradel-Photographies.github.io/grille-de-tarifs'
                        className='link__prices link-style hover__anim'
                        id="portraits priceLink"
                        onClick={() => props.initData()}
                    >
                        {/* {portraitsData["price-grid"]["link"]} */}
                        {props.findData("portraits", "priceLink")}
                    </NavLink>
                </p>
            </div>
        </main >
    );
};

export default Portraits;