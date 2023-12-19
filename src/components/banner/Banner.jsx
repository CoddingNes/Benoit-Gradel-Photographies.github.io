import React, { useState, useEffect } from 'react';
import Image from './sunset.jpg';
import './banner.scss';

const Banner = (props) => {

    const [bannerData, setBannerData] = useState([]);
    const [imageList, setImageList] = useState();
    // const [animGlobalDuration, setAnimGlobalDuration] = useState();
    const animationDuration = 3;
    const setData = () => {
        let setAnimDelayList = [];
        let setRotationList = [];
        let createImageList = [];
        setBannerData(props.data);
        // setAnimGlobalDuration(bannerData.length * animationDuration);
        for (let i = 0; i < bannerData.length; i++) {
            setAnimDelayList.push(bannerData.length * animationDuration - i * animationDuration - animationDuration);
            setRotationList.push((-20 + Math.floor(Math.random() * 40)));
            createImageList.push({ "image": bannerData[i], "delay": setAnimDelayList[i], "rotation": setRotationList[i], "zIndex": i + 1 });
            if (imageList === undefined) {
                setImageList(createImageList);
            }
        }
    }

    useEffect(() => {
        setData();
    });

    if (imageList === undefined) {
        return <>Still loading...</>;
    }

    return (
        <div id='banner'>
            <div className='banner'>
                {imageList.map((image, index) => (
                    <img
                        style={
                            {
                                animationName: 'slide',
                                animationDelay: image.delay + 's',
                                animationFillMode: 'both',
                                '--r': image.rotation + 'deg',
                                animationDuration: animationDuration + 's',
                                // animationIterationCount: 12,
                                // '--td': animGlobalDuration + image.delay + 's',
                                '--n': bannerData.length,
                                '--z': image.zIndex + 60,
                                '--z2': image.zIndex + 30,
                                translate: image.zIndex * (-2) + 5 + 'vw'
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

export default Banner;