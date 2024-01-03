import React, { useState, useEffect } from 'react';
// import Image from '../../components/banner/sunset.jpg';
import './showroom.scss';

const Showroom = (props) => {

    const [showRoomData, setShowRoomData] = useState(props.data);
    const [imageList, setImageList] = useState();
    const max = 18;
    const getData = () => {
        setShowRoomData(props.data);
        let createImageList = [];
        for (let i = 0; i < max; i++) {
            createImageList.push({
                "image": showRoomData[i],
                "i": (i + 1)
            });
            if (imageList === undefined) {
                setImageList(createImageList);
            }
        }
        props.showNav(true);
    }

    useEffect(() => {
        getData();
    })

    if (imageList === undefined) {
        return <>Still loading...</>;
    }


    return (
        <main id='showroom'>
            <div id="gallery">
                {imageList.map((image, index) => (
                    <div key={index}>
                        <img src=
                            // {Image}
                            {'./' + image.image.url}
                            alt={image.image.alt}
                        />
                        <a href={"#lightbox-" + image.i} aria-label="afficher l'image en grand">
                            {image.image.alt}</a>
                    </div>
                ))}
            </div>
            {imageList.map((image, index) => (
                <div className='lightbox' id={"lightbox-" + image.i} key={index}>
                    <div className='content'>
                        <img src=
                            // {Image}
                            {'./' + image.image.url}
                            alt={image.image.alt}
                        />
                        <div className='title'>{image.image.alt}</div>
                        <a className='close' href="#gallery" aria-label="fermer l'image"></a>
                    </div>
                </div>
            ))}
        </main>
    );
};

export default Showroom;