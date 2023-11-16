import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <NavLink to='/' className='navbar__link'>
                Prestations
            </NavLink>
            <NavLink to='/particuliers/portraits' className='navbar__link'>
                Portraits
            </NavLink>
            <NavLink to='/particuliers/mariage' className='navbar__link'>
                Mariage
            </NavLink>
            <NavLink to='/entreprises' className='navbar__link'>
                Entreprises
            </NavLink>
            <NavLink to='/gallerie' className='navbar__link'>
                Gallerie
            </NavLink>
            <NavLink to='/espaceclient' className='navbar__link'>
                Espace clients
            </NavLink>
            <NavLink to='/contact' className='navbar__link'>
                Contact
            </NavLink>
        </nav>
    );
};

export default Navbar;