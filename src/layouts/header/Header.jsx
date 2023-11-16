import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./header.scss";
import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="header">
            <NavLink to='acceuil' className='logo__link'>
                <h1 className='title'>Benoit Gradel Photographies</h1>
            </NavLink>
            <Navbar />
        </div>
    );
};

export default Header;