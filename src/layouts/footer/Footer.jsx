import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer>
            <a href="https://www.facebook.com/benoit.gradel.photographies/?ref=hl"
                target="_blank"
                rel="noopener noreferrer" >
                <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://twitter.com/BenoitGradelPho"
                target="_blank"
                rel="noopener noreferrer" >
                <FontAwesomeIcon icon={faSquareXTwitter} />
            </a>
            <NavLink to='mentions-legales' className='mentions__link'>
                Mentions légales
            </NavLink>
            <ul>
                <li>Benoit Gradel Photographies</li>
                <li>07130 Toulaud</li>
                <li>tel : 06 78 08 71 68</li>
            </ul>
        </footer>
    );
};

export default Footer;