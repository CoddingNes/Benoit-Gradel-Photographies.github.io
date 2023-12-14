import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import CustomerSpace from '../customerSpace/CustomerSpace';


const Navbar = (props) => {

    const [customerSpace, setCustomerSpace] = useState(false);
    const [navData, setNavData] = useState([]);
    const setData = () => {
        setNavData(props.data);
    }

    useEffect(() => {
        setData();
    })

    if (navData.length === 0) {
        return <>Still loading...</>;
    }

    return (
        <nav id='nav' className={props.showNav ? 'show' : 'hide'}>
            <FontAwesomeIcon
                icon={faBars}
                className='bars-icon' />
            <ul className='navbar__list'>
                <li className='navbar__link services-list'>
                    <p className='navbar__link services-title'>
                        {navData.prestations[0]}
                    </p>
                    <ul className='navbar__link dropdown-elements'>
                        <li>
                            <NavLink
                                to='/Benoit-Gradel-Photographies.github.io/prestations/portraits'
                                className='navbar__link dropdown-element1 hover__anim'>
                                {navData.prestations[1]}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/Benoit-Gradel-Photographies.github.io/prestations/mariage'
                                className='navbar__link dropdown-element2 hover__anim'>
                                {navData.prestations[2]}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/Benoit-Gradel-Photographies.github.io/prestations/entreprises'
                                className='navbar__link dropdown-element3 hover__anim'>
                                {navData.prestations[3]}
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <NavLink
                        to='/Benoit-Gradel-Photographies.github.io/gallerie'
                        className='navbar__link hover__anim'>
                        {navData.galerie}
                    </NavLink>
                </li>
                <li>
                    <p
                        className='navbar__link customerSpace hover__anim'
                        onClick={() => { setCustomerSpace(true) }}>
                        {navData.espace_clients}
                    </p>
                    <CustomerSpace
                        className={customerSpace ? 'customerSpace__box navbar ' : 'customerSpace__box-Off'}
                        setCustomerSpace={setCustomerSpace}
                    />
                </li>
                <li>
                    <NavLink
                        to='/Benoit-Gradel-Photographies.github.io/contact'
                        className='navbar__link hover__anim'>
                        {navData.formulaire_de_contact}
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;