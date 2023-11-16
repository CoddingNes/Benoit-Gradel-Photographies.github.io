import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
    return (
        <main>
            {"Erreur 404, veuillez cliquer "}
            <NavLink to='/' className='error__link'>
                ICI
            </NavLink>
            {" pour être redirigé."}
        </main>
    );
};

export default Error;