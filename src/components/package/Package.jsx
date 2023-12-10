import React, { useEffect, useState } from 'react';
import './package.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons';


const Package = (props) => {

    const [packageDetails, setPackageDetails] = useState([]);
    const [packageChoice, setPackageChoice] = useState();
    const [descriptions, setDescriptions] = useState([]);
    const [border, setBorder] = useState("");

    useEffect(() => {
        const getData = () => {
            setPackageDetails(props.data);
            let description = [];
            if (packageChoice !== undefined && packageChoice !== null) {
                for (let i = 0; i < packageDetails.length; i++) {
                    if (packageDetails[i].packageType === packageChoice) {
                        description = packageDetails[i].description;
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
    }, [packageChoice, packageDetails, props.data]);

    if (packageDetails.length === 0) {
        return <>Still loading...</>;
    }


    return (
        <div className={"package__box"}>
            <ul className={"package__box__titles"}>
                {packageDetails.map((packagedetails, index) => (
                    <li>
                        <h3 className={"package__box__title hover__anim " + packagedetails.packageType}
                            onClick={() => { setPackageChoice(packagedetails.packageType) }}
                            key={index}>
                            {packagedetails.title}
                        </h3>
                    </li>
                ))}
            </ul>
            <div>
                <ul className={'package__box__description ' + border} >
                    <li className={'package__box__descriptions-title'}>
                        {packageChoice === undefined ? 'Cliquer sur un forfait pour plus de détails' : 'Détails du forfait ' + packageChoice}
                    </li>
                    {descriptions.map((description, index) => (
                        <li className={'package__box__descriptions'}
                            key={index}>
                            {description}
                        </li>
                    ))}
                    <li>
                        <FontAwesomeIcon
                            className={packageChoice === undefined ? 'package__box__closingCrossOff' : 'package__box__closingCross'}
                            onClick={() => { setPackageChoice() }}
                            icon={faSquareXmark} />
                    </li>
                </ul >
            </div>
        </div>
    );
};

export default Package;