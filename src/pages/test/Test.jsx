import React from 'react';
import { NavLink } from 'react-router-dom';
// import Gallery from "../../components/gallery/Gallery";


const Test = () => {
    return (
        <main>
            <h1>Test</h1>
            <p>Petit test pour voir si ça fonctionne</p>
            {/* <Gallery /> */}

            <div className='summary'>
                <h2>Benoit Gradel photographe professionnel</h2>
                <ul>
                    <li>
                        <h3>
                            <NavLink to='/gallerie' className='navbar__link'>
                                Gallerie
                            </NavLink>
                        </h3>
                    </li>
                    <li>
                        <h3>
                            Prestations
                        </h3>
                        <ul>
                            <li>
                                <NavLink to='/particuliers/portraits' className='navbar__link'>
                                    Portraits
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/particuliers/mariage' className='navbar__link'>
                                    Mariage
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/entreprises' className='navbar__link'>
                                    Entreprises
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h3>
                            <NavLink to='/espaceclient' className='navbar__link'>
                                Espace clients
                            </NavLink>
                        </h3>
                    </li>
                </ul>
                <NavLink to='contact' className='navbar__link'>
                    Contactez-moi maintenant
                </NavLink>
            </div>
        </main>

    );
};

export default Test;