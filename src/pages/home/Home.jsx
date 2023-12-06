import React from 'react';
import { NavLink } from 'react-router-dom';
import './home.scss';
import Gallery from '../../components/gallery/Gallery';

const Home = () => {
    return (
        <main id='home'>
            <Gallery />
            <h2>Benoit Gradel photographe professionnel</h2>
            <ul className='home__link'>
                <li className='home__link__benefits__list'>
                    <h3 className='home__link__benefits__title'>
                        Prestations
                    </h3>
                    <ul className='home__link__benefits__elements'>
                        <li>
                            <NavLink to='/prestations/portraits' className='home__link__benefits__element1'>
                                Portraits
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/prestations/mariage' className='home__link__benefits__element2'>
                                Mariage
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/prestations/entreprises' className='home__link__benefits__element3'>
                                Entreprises
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <h3>
                        <NavLink to='/gallerie' className='home__link'>
                            Gallerie
                        </NavLink>
                    </h3>
                </li>
                <li>
                    <h3>
                        <NavLink to='/espaceclient' className='home__link__customer'>
                            Espace clients
                        </NavLink>
                    </h3>
                </li>
            </ul>
            <NavLink to='contact' className='home__link__contact'>
                Contactez-moi maintenant
            </NavLink>
        </main>
    );
};

export default Home;
