import React, { Suspense, lazy } from 'react';
import Loading from '../loading/Loading';
// import Banner from '../../components/banner/Banner';

//Tester des trucs
const Test = (props) => {

    const Banner = lazy(() => delayForDemo(import('../../components/banner/Banner')));

    async function delayForDemo(promise) {
        return new Promise(resolve => {
            setTimeout(resolve, 1);
        }).then(() => promise);
    }

    return (
        <div>
            <Suspense fallback={
                // <Loading />
                <p></p>
            }>
                <Banner
                    initData={props.initData}
                    findData={props.findData} />
            </Suspense>;
        </div>
    )
};

export default Test;