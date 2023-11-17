import React from 'react';
import Sunset_sea from '../../assets/sunset_sea.jpg';
import './gallery.scss';

const Gallery = () => {
    return (
        <div id='gallery'>
            <div className='gallery'>
                <img src={Sunset_sea} alt="Sunset" />
                <img src={Sunset_sea} alt="Sunset" />
                <img src={Sunset_sea} alt="Sunset" />
                <img src={Sunset_sea} alt="Sunset" />
                <img src={Sunset_sea} alt="Sunset" />
            </div>
        </div>
    );
};

export default Gallery;