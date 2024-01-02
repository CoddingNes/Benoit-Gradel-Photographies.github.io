import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './home.scss';
import Banner from '../../components/banner/Banner';
import CustomerSpace from '../../components/customerSpace/CustomerSpace';

const Home = (props) => {

    const [customerSpace, setCustomerSpace] = useState(false);
    const [homeData, setHomeData] = useState([]);
    const [navData, setNavData] = useState([]);
    const setData = () => {
        setHomeData(props.data.accueil);
        setNavData(props.data.navigation);
        props.showNav(false);
    }

    useEffect(() => {
        setData();
    })

    if (homeData.length === 0) {
        return <>Still loading...</>;
    }

    return (
        <main id='home'>
            <Banner data={homeData.images} />
            <h2>{homeData.title}</h2>
            <ul className='home__link'>
                <li className='home__link__benefits__list'>
                    <h3 className='home__link__benefits__title'>
                        {navData.prestations[0]}
                    </h3>
                    <ul className='home__link__benefits__elements'>
                        <li>
                            <NavLink
                                to='/Benoit-Gradel-Photographies.github.io/prestations/portraits'
                                className='home__link__benefits__element1 hover__anim'>
                                {navData.prestations[1]}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/Benoit-Gradel-Photographies.github.io/prestations/mariage'
                                className='home__link__benefits__element2 hover__anim'>
                                {navData.prestations[2]}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/Benoit-Gradel-Photographies.github.io/prestations/entreprises'
                                className='home__link__benefits__element3 hover__anim'>
                                {navData.prestations[3]}
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <h3>
                        <NavLink
                            to='/Benoit-Gradel-Photographies.github.io/gallerie' className='home__link hover__anim'>
                            {navData.galerie}
                        </NavLink>
                    </h3>
                </li>
                <li>
                    <h3>
                        <CustomerSpace
                            className={customerSpace ? 'customerSpace__box  home' : 'customerSpace__box-Off'}
                            setCustomerSpace={setCustomerSpace}
                        />

                        <NavLink
                            className='home__link__customer hover__anim'
                            onClick={() => { setCustomerSpace(true) }}>
                            {navData.espace_clients}
                        </NavLink>
                    </h3>
                </li>
            </ul>
            <NavLink
                to='/Benoit-Gradel-Photographies.github.io/contact' className='home__link__contact link-style hover__anim'>
                {homeData.formulaire_de_contact}
            </NavLink>
        </main>
    );
};

export default Home;
