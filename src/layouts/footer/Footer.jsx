import React from 'react';
import { NavLink } from 'react-router-dom';
import '../footer/footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer>
            <ul>
                <li>Benoit Gradel Photographies</li>
                <li>07130 Toulaud</li>
                <li>tel : 06 78 08 71 68</li>
            </ul>
            <div className="social__links">
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
            </div>
            <div className='legal__data'>
                <NavLink to='mentions-legales' className='mentions__link'>
                    Mentions légales
                </NavLink>
                <p>
                    <a href='https://coddingnes-dev.fr/'
                        target='_blank'
                        rel="noopener noreferrer" >©2023 Alexandra NICOLAS aka CoddingNes
                    </a>
                    <br />Tous droits réservés
                </p>
            </div>
        </footer >
    );
};

export default Footer;