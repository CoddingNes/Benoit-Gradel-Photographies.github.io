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
            <div>
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
                <NavLink to='mentions-legales' className='mentions__link'>
                    Mentions légales
                </NavLink>
            </div>
            <div>
                <a href='https://coddingnes-dev.fr/'
                    target='_blank'
                    rel="noopener noreferrer" classNames="coddingnes__link">©2023 CoddingNes
                </a>
                <p>
                    Tous droits réservés
                </p>
            </div>
        </footer >
    );
};

export default Footer;