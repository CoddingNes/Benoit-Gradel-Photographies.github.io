import React from "react";
import "./header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {

    // const [dark, setDark] = useState(false);

    return (
        <header>
            <NavLink to='/' className='logo__link' title="Benoit Gradel Photographies, portraits, mariages et projets d'entreprise">
                <h1 className='title'>Benoit Gradel Photographies</h1>
            </NavLink>
        </header>
    );
};

export default Header;