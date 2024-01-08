import React, { useEffect, useState } from 'react';

//Tester des trucs
const Test = () => {

    const [loading] = useState(true)

    function componentDidMount() {
        setTimeout(() => {
            if (loading) {
                window.location.href = '/Benoit-Gradel-Photographies.github.io/home';
            }
        }, 1);
    }

    useEffect(() => {
        componentDidMount()
        // eslint-disable-next-line
    }, []);

    return (
        <main>
        </main>
    )
};

export default Test;