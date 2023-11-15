import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./header.scss";


const Header = () => {
    return (
        <div className="header">
            <h1 className="title">Benoit Gradel Photographies</h1>
            <Navbar />
        </div>
    );
};

export default Header;