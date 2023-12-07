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
            <FontAwesomeIcon icon={faBars} className='bars-icon' />
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
                            <NavLink to='/prestations/portraits' className='navbar__link dropdown-element1'>
                                Portraits
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/prestations/mariage' className='navbar__link dropdown-element2'>
                                Mariage
                            </NavLink>
                        </li>
                        <li><NavLink to='/prestations/entreprises' className='navbar__link dropdown-element3'>
                            Entreprises
                        </NavLink>
                        </li>
                    </ul>
                </li>
                <li><NavLink to='/gallerie' className='navbar__link'>
                    Gallerie
                </NavLink>
                </li>
                <li>
                    <p
                        className='navbar__link'
                        onClick={() => { setCustomerSpace(true) }}>
                        Espace clients
                    </p>
                    {/* <NavLink  
                to='/espaceclient' 
                className='navbar__link'
                onClick={setCustomerSpace(true)} >
                Espace clients
                </NavLink> */}
                    <CustomerSpace
                        className={customerSpace ? 'customerSpace__box' : 'customerSpace__box-Off'}
                        setCustomerSpace={setCustomerSpace}
                    />
                </li>
                <li><NavLink to='/contact' className='navbar__link'>
                    Contact
                </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;