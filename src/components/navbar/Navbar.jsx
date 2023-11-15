import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <NavLink to='' className='navbar__link'>
                Accueil
            </NavLink>
            <NavLink to='particuliers' className='navbar__link'>
                Particuliers
            </NavLink>
            <NavLink to='professionels' className='navbar__link'>
                Professionnels
            </NavLink>
            <NavLink to='travail-d-auteur' className='navbar__link'>
                Travail d'auteur
            </NavLink>
            <NavLink to='espace-client' className='navbar__link'>
                Espace clients
            </NavLink>
            <NavLink to='contact' className='navbar__link'>
                Contact
            </NavLink>
        </div>
    );
};

export default Navbar;