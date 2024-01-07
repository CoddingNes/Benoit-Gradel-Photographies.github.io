import React from 'react';
// import Image from './sunset.jpg';
import './banner.scss';

const Banner = (props) => {

    // const [bannerData, setBannerData] = useState([]);
    // const [imageList, setImageList] = useState();
    // // const [animGlobalDuration, setAnimGlobalDuration] = useState();
    // const animationDuration = 3;
    // const setData = () => {
    //     let setAnimDelayList = [];
    //     let setRotationList = [];
    //     let createImageList = [];
    //     // setBannerData(props.data);
    //     // setAnimGlobalDuration(bannerData.length * animationDuration);
    //     for (let i = 0; i < bannerData.length; i++) {
    //         setAnimDelayList.push(bannerData.length * animationDuration - i * animationDuration - animationDuration);
    //         setRotationList.push((-20 + Math.floor(Math.random() * 40)));
    //         createImageList.push({ "image": bannerData[i], "delay": setAnimDelayList[i], "rotation": setRotationList[i], "zIndex": i + 1 });
    //         if (imageList === undefined) {
    //             setImageList(createImageList);
    //         }
    //     }
    // }

    // useEffect(() => {
    //     setData();
    // }, []);

    // if (imageList === undefined) {
    //     return <>Still loading...</>;
    // }

    const display = (i) => {
        const image = props.findData("home", "bannerImg" + [i]);
        return (
            image[0] !== 'no data' ?
                (
                    <img
                        id={"home bannerImg" + [i] + " img"}
                        onClick={() => props.initData()}
                        style={
                            {
                                animationName: 'slide',
                                animationDelay: (5 * 3 - i * 3 - 3) + 's',
                                animationFillMode: 'both',
                                '--r': (-20 + Math.floor(Math.random() * 40)) + 'deg',
                                animationDuration: 3 + 's',
                                // animationIterationCount: 12,
                                // '--td': animGlobalDuration + image.delay + 's',
                                '--n': 5,
                                '--z': i + 50,
                                '--z2': i + 30,
                                translate: (i + 1) * (-1) + 5 + 'vw'
                            }
                        }
                        className={image[2][0] === 'paysage' ? 'landscape' : 'portrait'}
                        key={i}
                        src={'./' + image[0]}
                        // src={image.image.url}
                        alt={image[1]}
                        crossOrigin="anonymous"
                    />
                )
                :
                (<div
                    key={i}
                    id={"home bannerImg" + [i] + " img"}
                    onClick={() => props.initData()}
                >
                    entrer des données correctes
                </div>)
        )
    }


    return (
        <div id='banner'>
            <div className='banner'>
                {/* {imageList.map((image, index) => (
                    <img
                        style={
                            {
                                animationName: 'slide',
                                animationDelay: image.delay + 's',
                                animationFillMode: 'both',
                                '--r': (-20 + Math.floor(Math.random() * 40)) + 'deg',
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
                ))} */}
                {Array.from(
                    { length: 5 },
                    (_, i) => display(i))}
            </div>
        </div>
    );
};

export default Banner;