import React from 'react';
import Navbar from '../../../components/navbar/Navbar';
import { NavLink } from 'react-router-dom';
import './portraits.scss';
import Package from '../../../components/package/Package';

const Portraits = () => {

    return (
        <main id='portraits'>
            <Navbar />
            <h2>Portait studio & Lifestyle</h2>
            <p>Parce que vos enfants grandissent trop vite, vous souhaitez garder une trace de tous ces moments… <br />

                Parce que vous avez toujours rêvé de jouer les stars de cinéma avec les flashs qui crépitent autour de vous…<br />

                Ou tout simplement, parce que vous avez envie de réaliser un beau portrait, pour vous ou pour offrir…<br /></p>



            <p>Tout cela est désormais possible demain, chez vous. Plus besoin de vous déplacer, grâce à mon studio mobile, c’est un véritable studio photo pro qui vient chez vous !<br />

                Je me déplace dans toute la région Rhône-Alpes et installe en quelques minutes le matériel nécessaire pour réaliser des portraits studio chez vous (ou dans tout autre lieu de votre choix) ou des portraits lifestyle.<br />

                Couleur ou Noir&Blanc… à vous de choisir !</p>

            <NavLink to='contact' className='home__link__contact'>
                Prenez rendez-vous maintenant !
            </NavLink>
            {/* <div className='packages'> */}

            <Package />

            {/* <div className='package__box solo'>
                    <h3 className='package__box__title solo'>{"Forfait SOLO : 90€"}</h3>
                    <ul className='package__box__description solo'>
                        <li>
                            {"20 à 30 minutes² de prise de vues en intérieur ou en extérieur (si le temps le permet)"}
                        </li>
                        <li>
                            {"L’ensemble des photos travaillées sur CD optimisées pour le web (pour un usage privé)"}
                        </li>
                        <li>
                            {"La création d’une galerie privée disponible 3 mois"}
                        </li>
                        <li>
                            {"3 tirages papier au format 15x20cm"}
                        </li>
                    </ul>
                </div>
                <div className='package__box duo'>
                    <h3 className='package__box__title duo'>{"Forfait DUO : 105€¹"}</h3>
                    <ul className='package__box__description duo'>
                        <li>
                            {"30 à 45 minutes² de prise de vues en intérieur ou en extérieur (si le temps le permet)"}
                        </li>
                        <li>
                            {"L’ensemble des photos travaillées sur CD optimisées pour le web (pour un usage privé)"}
                        </li>
                        <li>
                            {"La création d’une galerie privée disponible 3 mois"}
                        </li>
                        <li>
                            {"3 tirages papier au format 15x20cm"}
                        </li>
                    </ul>
                </div>
                <div className='package__box family'>
                    <h3 className='package__box__title family'>{"Forfait FAMILLE : 135€¹"}</h3>
                    <ul className='package__box__description family'>
                        <li>
                            {"Jusqu’à 5 personnes – 10€ par personne supplémentaires."}
                        </li>
                        <li>
                            {"1 heure² de prise de vues en intérieur ou en extérieur (si le temps le permet)"}
                        </li>
                        <li>
                            {"L’ensemble des photos travaillées sur CD optimisées pour le web (pour un usage privé)"}
                        </li>
                        <li>
                            {"La création d’une galerie privée disponible 3 mois"}
                        </li>
                        <li>{"5 tirages papier au format 15x20cm"}
                        </li>
                    </ul>
                </div>
                <div className='package__box pregnancy'>
                    <h3 className='package__box__title pregnancy'>{"Forfait GROSSESSE : 180€¹"}</h3>
                    <ul className='package__box__description pregnancy'>
                        <li>
                            {"2 séances de prise de vue : 1 pendant la grossesse puis 1 dans le mois qui suit la naissance."}
                        </li>
                        <li>
                            {"L’ensemble des photos travaillées sur CD optimisées pour le web (pour un usage privé)"}
                        </li>
                        <li>
                            {"La création d’une galerie privée disponible 3 mois"}
                        </li>
                        <li>
                            {"8 tirages papier au format 15x20cm"}
                        </li>
                    </ul>
                </div> */}
            {/* </div> */}
            <div className='notes__box'>
                <p className='note1'>{"¹ : Des frais de déplacements peuvent être ajoutés selon la distance à parcourir."}</p>
                <p className='note2'>{"² : les durées de session sont données à titre indicatif et peuvent être plus ou moins importantes."}</p>
            </div>
            <p>Pour tous tirages supplémentaires, merci de vous reporter à la <NavLink to='Prices' className='portraits__link__prices'>
                grille de tarifs</NavLink> </p>
        </main >
    );
};

export default Portraits;