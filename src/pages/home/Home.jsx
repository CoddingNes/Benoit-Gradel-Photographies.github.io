import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './home.scss';
import Gallery from '../../components/gallery/Gallery';
import CustomerSpace from '../../components/customerSpace/CustomerSpace';

const Home = () => {

    const [customerSpace, setCustomerSpace] = useState(false);

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
                            <NavLink to='/prestations/portraits' className='home__link__benefits__element1 hover__anim'>
                                Portraits
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/prestations/mariage' className='home__link__benefits__element2 hover__anim'>
                                Mariage
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/prestations/entreprises' className='home__link__benefits__element3 hover__anim'>
                                Entreprises
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <h3>
                        <NavLink to='/gallerie' className='home__link hover__anim'>
                            Gallerie
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
                            // to='/espaceclient'
                            className='home__link__customer hover__anim'
                            onClick={() => { setCustomerSpace(true) }}>
                            Espace clients
                        </NavLink>
                    </h3>
                </li>
            </ul>
            <NavLink to='contact' className='home__link__contact link-style hover__anim'>
                Contactez-moi maintenant
            </NavLink>
        </main>
    );
};

export default Home;
