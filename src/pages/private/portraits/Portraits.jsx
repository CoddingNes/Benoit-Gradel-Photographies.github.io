import React, { useEffect, useState } from 'react';
import Navbar from '../../../components/navbar/Navbar';
import { NavLink } from 'react-router-dom';
import './portraits.scss';
import Package from '../../../components/package/Package';
import GlobalData from '../../../text.json';

const Portraits = () => {

    const [data, setData] = useState([]);
    const [text, setText] = useState([]);
    const [notes, setNotes] = useState([]);
    const [link, setLink] = useState([]);

    useEffect(() => {
        const getData = () => {
            setData(GlobalData['portraits']);
            setText(data['text']);
            setNotes(data['notes']);
            setLink(data['link']);
        };

        getData()
    }, [data]);

    return (
        <main id='portraits'>
            <Navbar />
            <h2>{data["title"]}</h2>
            <div className='text__box'>
                {text.map((text, index) => (
                    <p key={index}>
                        {text}
                    </p>
                ))}
            </div>

            {/* <p>Parce que vos enfants grandissent trop vite, vous souhaitez garder une trace de tous ces moments… <br />

                Parce que vous avez toujours rêvé de jouer les stars de cinéma avec les flashs qui crépitent autour de vous…<br />

                Ou tout simplement, parce que vous avez envie de réaliser un beau portrait, pour vous ou pour offrir…<br /></p>



            <p>Tout cela est désormais possible demain, chez vous. Plus besoin de vous déplacer, grâce à mon studio mobile, c’est un véritable studio photo pro qui vient chez vous !<br />

                Je me déplace dans toute la région Rhône-Alpes et installe en quelques minutes le matériel nécessaire pour réaliser des portraits studio chez vous (ou dans tout autre lieu de votre choix) ou des portraits lifestyle.<br />

                Couleur ou Noir&Blanc… à vous de choisir !</p> */}

            <NavLink to='../../contact' className='home__link__contact'>
                {/* Prenez rendez-vous maintenant ! */}
                {link}
            </NavLink>
            <Package />
            <div className='notes__box'>
                {notes.map((note, index) => (
                    <p key={index}>
                        {note}
                    </p>
                ))}
                {/* <p className='note1'>{"¹ : Des frais de déplacements peuvent être ajoutés selon la distance à parcourir."}</p>
                <p className='note2'>{"² : les durées de session sont données à titre indicatif et peuvent être plus ou moins importantes."}</p> */}
            </div>
            <p>
                {data['price-grid']['text']}
                {/* Pour tous tirages supplémentaires, merci de vous reporter à la */}
                <NavLink
                    to='../../Prices'
                    className='portraits__link__prices'>
                    {data['price-grid']['link']}
                    {/* grille de tarifs */}
                </NavLink>
            </p>
        </main >
    );
};

export default Portraits;