import React, { useState, useEffect } from 'react';
import Image from './sunset.jpg';
import './gallery.scss';

const Gallery = (props) => {

    const [galleryData, setGalleryData] = useState([]);
    const [imageList, setImageList] = useState();
    const [animGlobalDuration, setAnimGlobalDuration] = useState();
    const [button, setButton] = useState(true);
    const setData = () => {
        if (button === true) {
            let setAnimDelayList = [];
            let setRotationList = [];
            let createImageList = [];
            setGalleryData(props.data);
            setAnimGlobalDuration(galleryData.length * 2);
            for (let i = 0; i < galleryData.length; i++) {
                setAnimDelayList.push(galleryData.length * 2 - i * 2 - 2);
                setRotationList.push((-20 + Math.floor(Math.random() * 40)));
                createImageList.push({ "image": galleryData[i], "delay": setAnimDelayList[i], "rotation": setRotationList[i], "zIndex": i + 1 });
                if (imageList === undefined) {
                    setImageList(createImageList);
                }
            }
        }
    }

    const switchButton = () => {
        setTimeout(() => {
            setButton(false);
        }, (animGlobalDuration * 1000));
        if (button === false) {
            setTimeout(() => {
                setButton(true);
            }, (10));
        }
    }
    switchButton();

    useEffect(() => {
        setData();
    });

    if (imageList === undefined) {
        return <>Still loading...</>;
    }

    return (
        <div id='gallery'>
            <div className='gallery'>
                {imageList.map((image, index) => (
                    <img
                        style={
                            button === true ?
                                {
                                    animationName: 'slide',
                                    animationDelay: image.delay + 's',
                                    animationFillMode: 'both',
                                    '--r': image.rotation + 'deg',
                                    animationDuration: '2s',
                                    '--td': animGlobalDuration + image.delay + 's',
                                    '--n': galleryData.length,
                                    '--z': image.zIndex + 60,
                                    '--z2': image.zIndex + 30,
                                    translate: image.zIndex * (-20) + 30 + 'px'
                                }
                                :
                                {
                                    translate: image.zIndex * (-20) + 30 + 'px',
                                    rotate: image.rotation + 'deg'
                                }
                        }
                        className={image.image.sens === 'paysage' ? 'landscape' : 'portrait'}
                        key={index}
                        src={Image}
                        // src={image.image.url}
                        alt={image.image.alt}
                        crossOrigin="anonymous"
                    />
                ))}

            </div>
        </div>
    );
};

export default Gallery;