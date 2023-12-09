import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import CustomerSpace from '../customerSpace/CustomerSpace';


const Navbar = () => {

    const [customerSpace, setCustomerSpace] = useState(false);

    return (
        <nav>
            <FontAwesomeIcon
                icon={faBars}
                className='bars-icon' />
            <ul className='navbar__list'>
                {/* <li>
                    <NavLink to='/' className='navbar__link'>
                        Prestations
                    </NavLink>
                </li> */}
                <li className='navbar__link services-list'>
                    <p className='navbar__link services-title'>
                        Prestations
                    </p>
                    <ul className='navbar__link dropdown-elements'>
                        <li>
                            <NavLink
                                to='/prestations/portraits'
                                className='navbar__link dropdown-element1 hover__anim'>
                                Portraits
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/prestations/mariage'
                                className='navbar__link dropdown-element2 hover__anim'>
                                Mariage
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/prestations/entreprises'
                                className='navbar__link dropdown-element3 hover__anim'>
                                Entreprises
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <NavLink
                        to='/gallerie'
                        className='navbar__link hover__anim'>
                        Gallerie
                    </NavLink>
                </li>
                <li>
                    <p
                        className='navbar__link customerSpace hover__anim'
                        onClick={() => { setCustomerSpace(true) }}>
                        Espace clients
                    </p>
                    <CustomerSpace
                        className={customerSpace ? 'customerSpace__box navbar ' : 'customerSpace__box-Off'}
                        setCustomerSpace={setCustomerSpace}
                    />
                </li>
                <li>
                    <NavLink
                        to='/contact'
                        className='navbar__link hover__anim'>
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;