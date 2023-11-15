import React from 'react';
import { NavLink } from 'react-router-dom';
import './home.scss';

const Home = () => {
    return (
        <div>
            <p>try</p>
            <NavLink to='client' className='nav__link'>
                <p className='nav__link-customer'>Client</p>
            </NavLink>
            <i className="fa-brands fa-facebook"></i>
        </div>
    );
};

export default Home;
