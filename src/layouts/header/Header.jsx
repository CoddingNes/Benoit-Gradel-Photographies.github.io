import React from "react";
import "./header.scss";
import { NavLink } from "react-router-dom";

const Header = (props) => {

    return (
        <header>
            <NavLink
                to='/Benoit-Gradel-Photographies.github.io/'
                className='logo__link'
                title="Benoit Gradel Photographies, portraits, mariages et projets d'entreprise">
                <h1 className='title'>{props.title}</h1>
            </NavLink>
        </header>
    );
};

export default Header;