import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import CustomerSpace from '../customerSpace/CustomerSpace';


const Navbar = (props) => {

    const [customerSpace, setCustomerSpace] = useState(false);
    // const [navData, setNavData] = useState([]);
    // const setData = () => {
    //     setNavData(props.data);
    // }

    // useEffect(() => {
    //     setData();
    // })

    // if (navData.length === 0) {
    //     return <>Still loading...</>;
    // }

    return (
        <nav id='nav' className={props.showNav ? 'show' : 'hide'}>
            <FontAwesomeIcon
                icon={faBars}
                className={props.showNavDetails ? 'bars-icon showdetails' : 'bars-icon hideDetails'}
                onClick={() => { props.setShowNavDetails(true) }}
            />
            <ul className={props.showNavDetails ? 'navbar__list showdetails' : 'navbar__list hideDetails'}>
                <li className='navbar__link services-list'>
                    <p
                        className='navbar__link services-title'
                        id={"home benefits__Title"}
                        onClick={() => props.initData()}
                    >
                        {/* {navData.prestations[0]} */}
                        {props.findData("home", "benefits__Title")}
                    </p>
                    <ul className='navbar__link dropdown-elements'>
                        <li>
                            <NavLink
                                to='/Benoit-Gradel-Photographies.github.io/prestations/portraits'
                                className='navbar__link dropdown-element1 hover__anim'
                                id={"home benefits1__Title"}
                                onClick={() => {
                                    props.initData()
                                    props.setShowNavDetails(false)
                                }}>
                                {/* {navData.prestations[1]} */}
                                {props.findData("home", "benefits1__Title")}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/Benoit-Gradel-Photographies.github.io/prestations/mariage'
                                className='navbar__link dropdown-element2 hover__anim'
                                id={"home benefits2__Title"}
                                onClick={() => {
                                    props.initData()
                                    props.setShowNavDetails(false)
                                }}>
                                {/* {navData.prestations[2]} */}
                                {props.findData("home", "benefits2__Title")}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/Benoit-Gradel-Photographies.github.io/prestations/entreprises'
                                className='navbar__link dropdown-element3 hover__anim'
                                id={"home benefits3__Title"}
                                onClick={() => {
                                    props.initData()
                                    props.setShowNavDetails(false)
                                }}>
                                {/* {navData.prestations[3]} */}
                                {props.findData("home", "benefits3__Title")}
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <NavLink
                        to='/Benoit-Gradel-Photographies.github.io/gallerie'
                        className='navbar__link hover__anim'
                        id={"home Showroom__Title"}
                        onClick={() => {
                            props.initData()
                            props.setShowNavDetails(false)
                        }}>
                        {/* {navData.galerie} */}
                        {props.findData("home", "Showroom__Title")}
                    </NavLink>
                </li>
                <li>
                    <p
                        className='navbar__link customerSpace hover__anim'
                        id={"home customerSpace__Title"}
                        onClick={() => {
                            props.initData()
                            props.setShowNavDetails(false)
                            setCustomerSpace(true)
                        }}>
                        {/* {navData.espace_clients} */}
                        {props.findData("home", "customerSpace__Title")}
                    </p>
                    <CustomerSpace
                        className={customerSpace ? 'customerSpace__box navbar ' : 'customerSpace__box-Off'}
                        setCustomerSpace={setCustomerSpace}
                        initData={props.initData}
                        findData={props.findData} />
                </li>
                <li>
                    <NavLink
                        to='/Benoit-Gradel-Photographies.github.io/contact'
                        className='navbar__link hover__anim'
                        id={"nav contact"}
                        onClick={() => {
                            props.initData()
                            props.setShowNavDetails(false)
                        }}>
                        {/* {navData.formulaire_de_contact} */}
                        {props.findData("nav", "contact")}
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;