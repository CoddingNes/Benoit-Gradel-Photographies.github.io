import React from 'react';
import './packageBox.scss'


const PackageBox = (props) => {

    const titre = props.title;
    const data = props.data;
    const dataTitle = data["title"];
    console.log(data);

    return (
        <div>
            <p>{titre}</p>
            <p>{dataTitle}</p>
        </div>
    );
};

export default PackageBox;