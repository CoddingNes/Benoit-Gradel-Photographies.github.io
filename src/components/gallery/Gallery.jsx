import React, { useState, useEffect } from 'react';
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

    useEffect(() => {
        setData();
    })

    if (galleryData.length === 0) {
        return <>Still loading...</>;
    }

    return (
        <div id='gallery'>
            <div className='gallery'>
                {galleryData.map((image, index) => (
                    <img
                        key={index}
                        src={image.url}
                        alt={image.alt}
                        crossOrigin="anonymous"
                    />
                ))}

            </div>
        </div>
    );
};

export default Gallery;