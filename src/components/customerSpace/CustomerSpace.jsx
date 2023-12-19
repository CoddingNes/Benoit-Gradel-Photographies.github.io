import React from 'react';
import './customerSpace.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons';

const CustomerSpace = (props) => {
    return (
        <div className={props.className} >
            <h3 className='customerSpace__title'>Entrez vos identifiants pour accéder à votre galerie privée</h3>
            <form
                className="client__form"
                method={"post"}
                action={"https://www.jingoo.com/index.php"}
                target={"_top"}>
                <div>
                    <input
                        className="client__formInput"
                        name={"login"}
                        id={"identifiant2"}
                        defaultValue={"BG60-"}
                        placeholder={"Identifiant"}
                        // onfocus={"if (this.value=='Identifiant') {this.value=''}"}
                        type={"text"} />
                </div>
                <div>
                    <input
                        className="client__formInput"
                        name={"password"}
                        id={"pass2"}
                        defaultValue={"Mot de passe"}
                        placeholder={"Mot de passe"}
                        // onfocus={"if (this.value=='Mot de passe') {this.value=''}"}
                        type={"text"} />
                </div>
                <input
                    name={"action"}
                    value={"login"}
                    type={"hidden"} />
                <input
                    name={"idPhotographeAccesModule"}
                    value={"/infos/acces.php/2775715"}
                    type={"hidden"} />
                <button
                    className="client__formButton"
                    name={"Submit3"}
                    value={"OK"}
                    type={"submit"}
                >
                    Connexion
                </button>
            </form>
            <FontAwesomeIcon
                className={' customerSpace__box__closingCross'}
                onClick={() => {
                    props.setCustomerSpace(false);
                }}
                icon={faSquareXmark} />
        </div>);
};

export default CustomerSpace;