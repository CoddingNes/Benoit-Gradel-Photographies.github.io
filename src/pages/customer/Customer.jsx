import React from "react";
import './customer.scss';
import Navbar from "../../components/navbar/Navbar";

const Customer = () => {
    return (
        <main id="client__form">
            <Navbar />
            <h2>Consulter votre album</h2>
            <div className="client__formContainer">
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
                            value={"BG60-"}
                            placeholder={"Identifiant"}
                            onfocus={"if (this.value=='Identifiant') {this.value=''}"}
                            type={"text"} />
                    </div>
                    <div>
                        <input
                            className="client__formInput"
                            name={"password"}
                            id={"pass2"}
                            value={"Mot de passe"}
                            placeholder={"Mot de passe"}
                            onfocus={"if (this.value=='Mot de passe') {this.value=''}"}
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
            </div>
        </main>
    );
};

export default Customer;