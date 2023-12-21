import React from 'react';

const Logout = () => {

    const logout = () => {
        sessionStorage.clear();
        window.location.href = '/Benoit-Gradel-Photographies.github.io/Admin';
    }

    return (
        <div>
            <button onClick={logout}>logout</button>
        </div>
    );
};

export default Logout;