import React from "react";
// import Navbar from "../../components/navbar/Navbar";
import "./header.scss";
import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <header className="header">
            <NavLink to='/' className='logo__link'>
                <h1 className='title'>Benoit Gradel Photographies</h1>
            </NavLink>
        </header>
    );
};

export default Header;