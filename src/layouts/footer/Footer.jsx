import React from 'react';
// import { NavLink } from 'react-router-dom';
import '../footer/footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = (props) => {
    return (
        <footer>
            <ul
                id="footer contactDetails"
                onClick={() => props.initData()}
                className='contact__details__block'>
                {props.findData("footer", "contactDetails").map((ligne, index) => (
                    <li
                        key={index}>
                        {ligne}
                    </li>))}
            </ul>
            <div className='social__links__block'>
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
                {/* <NavLink to='mentions-legales' className='mentions__link'>
                    Mentions légales
                </NavLink> */}
            </div>
            <div className='author__block'>
                <a href='https://coddingnes-dev.fr/'
                    id="footer coddingnesLink"
                    onClick={() => props.initData()}
                    target='_blank'
                    rel="noopener noreferrer" className="coddingnes__link">
                    {props.findData("footer", "coddingnesLink")}
                </a>
                <p
                    id="footer copyRights"
                    onClick={() => props.initData()}
                >
                    {props.findData("footer", "copyRights")}
                </p>
            </div>
        </footer >
    );
};

export default Footer;