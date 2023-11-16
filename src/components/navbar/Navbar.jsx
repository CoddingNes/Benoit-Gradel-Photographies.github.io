import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <NavLink to='/accueil' className='navbar__link'>
                Accueil
            </NavLink>
            <NavLink to='/particuliers' className='navbar__link'>
                Particuliers
            </NavLink>
            <NavLink to='/entreprises' className='navbar__link'>
                Entreprises
            </NavLink>
            <NavLink to='/travaildauteur' className='navbar__link'>
                Travail d'auteur
            </NavLink>
            <NavLink to='/espaceclient' className='navbar__link'>
                Espace clients
            </NavLink>
            <NavLink to='/contact' className='navbar__link'>
                Contact
            </NavLink>
        </div>
    );
};

export default Navbar;