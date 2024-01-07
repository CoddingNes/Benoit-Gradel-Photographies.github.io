import React, { useEffect } from 'react';
// import Image from '../../components/banner/sunset.jpg';
import './showroom.scss';

const Showroom = (props) => {

    // const [showRoomData, setShowRoomData] = useState(props.data);
    // const [imageList, setImageList] = useState();
    // const max = 18;
    // const getData = () => {
    //     setShowRoomData(props.data);
    //     let createImageList = [];
    //     for (let i = 0; i < max; i++) {
    //         createImageList.push({
    //             "image": showRoomData[i],
    //             "i": (i + 1)
    //         });
    //         if (imageList === undefined) {
    //             setImageList(createImageList);
    //         }
    //     }
    //     props.showNav(true);
    // }

    useEffect(() => {
        // getData();
        props.showNav(true)
    })

    // if (imageList === undefined) {
    //     return <>Still loading...</>;
    // }

    const display = (i) => {
        const image = props.findData("showroom", "showroomImg" + [i]);
        return (
            image[0] !== 'no data' ?
                (<div
                    key={i}>
                    <img
                        id={"showroom showroomImg" + [i] + " img"}
                        onClick={() => props.initData()}
                        src=
                        {'./' + image[0]}
                        alt={image[1]}
                    />
                    <a
                        id={"showroom showroomImg" + [i] + " img"}
                        onClick={() => props.initData()}
                        href={"#lightbox-" + [i]}
                        aria-label="afficher l'image en grand">
                        {image[1]}</a>
                </div>)
                :
                (<div
                    key={i}
                    id={"showroom showroomImg" + [i] + " img"}
                    onClick={() => props.initData()}
                >
                    entrer des données correctes
                </div>)
        )
    }

    const displayLinks = (i) => {
        const image = props.findData("showroom", "showroomImg" + [i]);
        return (
            <div className='lightbox' id={"lightbox-" + [i]} key={i}>
                <div className='content'>
                    <img src=
                        // {Image}
                        {'./' + image[0]}
                        alt={image[1]}
                    />
                    <div className='title'>{image[1]}</div>
                    <a className='close' href="#gallery" aria-label="fermer l'image"></a>
                </div>
            </div>)
    }


    return (
        <main id='showroom'>
            <div id="gallery">
                {/*     {imageList.map((image, index) => (
                    <div key={index}>
                        <img src=
                            // {Image}
                            {'./' + image.image.url}
                            alt={image.image.alt}
                        />
                        <a href={"#lightbox-" + image.i} aria-label="afficher l'image en grand">
                            {image.image.alt}</a>
                    </div>
                ))} */}
                {Array.from(
                    { length: 18 },
                    (_, i) =>
                        display(i)
                )}
            </div>
            {Array.from(
                { length: 18 },
                (_, i) =>
                    displayLinks(i)
            )}
            {/* {
                imageList.map((image, index) => (
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
                ))
            } */}
            {/* {
                Array.from(
                    { length: 18 },
                    (_, i) => (props.findData("showroom", "showroomImg" + [i])[0].map((image, index) => (
                        <div className='lightbox' id={"lightbox-" + image[i]} key={index}>
                            <div className='content'>
                                <img src=
                                    // {Image}
                                    {'./' + image[0]}
                                    alt={image[1]}
                                />
                                <div className='title'>{image[1]}</div>
                                <a className='close' href="#gallery" aria-label="fermer l'image"></a>
                            </div>
                        </div>)
                    )))
            } */}
        </main >
    );
};

export default Showroom;