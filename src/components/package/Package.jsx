import React, { useEffect, useState } from 'react';
import Data from './text.json';
import './package.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons';


const Package = () => {

    const [packageChoice, setPackageChoice] = useState();
    const [descriptions, setDescriptions] = useState([]);
    const [border, setBorder] = useState("");

    useEffect(() => {
        const getData = () => {
            let description = [];
            if (packageChoice !== undefined && packageChoice !== null) {
                for (let i = 0; i < Data.length; i++) {
                    if (Data[i].packageType === packageChoice) {
                        description = Data[i].description;
                        setDescriptions(description);
                        setBorder("border");
                        setTimeout(() => {
                            setBorder("");
                        }, 450
                        )
                    };
                }
            } else {
                setDescriptions([]);
            }
        };

        getData()
    }, [packageChoice]);

    return (
        <div className={"package__box"}>
            <ul className={"package__box__titles"}>
                {Data.map((packagedetails, index) => (
                    <li>
                        <h3 className={"package__box__title " + packagedetails.packageType}
                            onClick={() => { setPackageChoice(packagedetails.packageType) }}
                            key={index}>
                            {packagedetails.title}
                        </h3>
                    </li>
                ))}
            </ul>
            <ul className={'package__box__description ' + border} >
                <li className={'package__box__descriptions-title'}>
                    Détails du forfait {packageChoice}
                </li>
                {descriptions.map((description, index) => (
                    <li className={'package__box__descriptions'}
                        key={index}>
                        {description}
                    </li>
                ))}
            </ul >
            <FontAwesomeIcon
                className={'package__box__closingCross'}
                onClick={() => { setPackageChoice() }}
                icon={faSquareXmark} />
        </div>
    );
};

export default Package;