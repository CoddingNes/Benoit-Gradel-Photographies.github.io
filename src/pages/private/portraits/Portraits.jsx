import React, { useState, useEffect } from 'react';
import Navbar from '../../../components/navbar/Navbar';
import { NavLink } from 'react-router-dom';
import './portraits.scss';
import Package from '../../../components/package/Package';


const Portraits = (props) => {
    const [portraitsData, setPortraitsData] = useState([]);
    const setPackageBox = () => {
        setPortraitsData(props.data);
    }

    useEffect(() => {
        setPackageBox();
    })

    if (portraitsData.length === 0) {
        return <>Still loading...</>;
    }

    return (
        <main>
            <Navbar />
            <div id='portraits'>
                <h2>{portraitsData["title"]}</h2>
                {portraitsData["text"].map((ligne, index) => (
                    <p
                        key={index}>
                        {ligne}
                    </p>))}
                <p>
                    {portraitsData["contact"]["text"]}
                    <NavLink
                        to='../../contact'
                        className='link__contact link-style hover__anim'>
                        {portraitsData["contact"]["link"]}
                    </NavLink>
                </p>

                <Package data={portraitsData.forfaits} />

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
                        to='/Benoit-Gradel-Photographies.github.io/grille-de-tarifs'
                        className='link__prices link-style hover__anim'>
                        {portraitsData["price-grid"]["link"]}
                    </NavLink>
                </p>
            </div>
        </main >
    );
};

export default Portraits;