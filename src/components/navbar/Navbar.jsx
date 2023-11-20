import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss';

const Navbar = () => {
    return (
        <nav>
            <ul className='navbar__list'>
                <li>
                    <NavLink to='/' className='navbar__link'>
                        Prestations
                    </NavLink>
                </li>
                <li className='navbar__link private-list'>
                    <p className='navbar__link private-title'>
                        Particuliers
                    </p>

                    <ul className='navbar__link dropdown-elements'>
                        <li>
                            <NavLink to='/particuliers/portraits' className='navbar__link dropdown-element1'>
                                Portraits
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/particuliers/mariage' className='navbar__link dropdown-element2'>
                                Mariage
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li><NavLink to='/entreprises' className='navbar__link'>
                    Entreprises
                </NavLink>
                </li>
                <li><NavLink to='/gallerie' className='navbar__link'>
                    Gallerie
                </NavLink>
                </li>
                <li><NavLink to='/espaceclient' className='navbar__link'>
                    Espace clients
                </NavLink>
                </li>
                <li><NavLink to='/contact' className='navbar__link'>
                    Contact
                </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;