import React, { useState, useEffect } from 'react';
// import Sunset_sea from '../../assets/sunset_sea.jpg';
import './gallery.scss';

const Gallery = (props) => {

    const [galleryData, setGalleryData] = useState([]);
    const setData = () => {
        const urlList = [];
        setGalleryData(props.data);
        for (let i = 0; i < galleryData.length; i++) {
            urlList.push(galleryData[i].url);
        }
    }

    // let img = require('../../assets/sunset_sea.jpg')

    useEffect(() => {
        setData();
    })

    if (galleryData.length === 0) {
        return <>Still loading...</>;
    }

    return (
        <div id='gallery'>
            <div className='gallery'>
                {/* <img src={galleryData[0].url} alt="Sunset" crossOrigin="anonymous" />
                <img src={'./' + galleryData[1].url} alt="Sunset" crossOrigin="anonymous" />
                <img src={img} alt="Sunset" />
 */}
                {/* <img src={galleryData.image[2].url} alt="Sunset" crossOrigin="anonymous" /> */}
                {galleryData.map((image, index) => (
                    <img
                        key={index}
                        src={image.url}
                        alt={image.alt}
                    />
                ))}

            </div>
        </div>
    );
};

export default Gallery;