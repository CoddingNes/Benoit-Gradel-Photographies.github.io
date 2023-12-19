import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = (props) => {

    props.showNav(true);

    return (
        <main>
            {"Erreur 404, veuillez cliquer "}
            <NavLink to='/Benoit-Gradel-Photographies.github.io/' className='error__link'>
                ICI
            </NavLink>
            {" pour être redirigé."}
        </main>
    );
};

export default Error;