import React from 'react';
import './logout.scss';

const Logout = (props) => {

    const logout = () => {
        sessionStorage.clear();
        window.location.href = '/Benoit-Gradel-Photographies.github.io/Admin';
    }

    if (props.token) {
        return (
            <div id='logout' >
                <button onClick={logout}>logout</button>
            </div>
        );
    }
};

export default Logout;