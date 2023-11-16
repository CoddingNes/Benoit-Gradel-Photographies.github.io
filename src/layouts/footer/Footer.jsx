import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div>
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
    );
};

export default Footer;