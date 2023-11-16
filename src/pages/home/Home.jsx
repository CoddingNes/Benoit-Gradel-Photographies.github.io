import React from 'react';
import { NavLink } from 'react-router-dom';
import './home.scss';
import Gallery from '../../components/gallery/Gallery';

const Home = () => {
    return (
        <main>
            <Gallery />
            <div className='summary'>
                <h2>
                    Bienvenue
                </h2>
                <p>
                    Description
                </p>
                <NavLink to='contact' className='navbar__link'>
                    Contactez-moi maintenant
                </NavLink>
                <p className='signature'>
                    Benoit Gradel
                </p>
            </div>
        </main>
    );
};

export default Home;

