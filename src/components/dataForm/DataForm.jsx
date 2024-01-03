import React, { useState } from "react";
import './dataForm.scss';

const DataForm = (props) => {
    const [content, setContent] = useState();

    async function createData() {
        const sending = { layer: props.layer, element: props.element, content: content }
        await fetch('http://localhost:8080/admin', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // "Allow CORS": "Access-Control-Allow-Methods"
            },
            body: JSON.stringify(sending)
        })
            .then(response => {
                return response.json();
            })
            .then(data =>
                console.log(data)
            )
    }

    async function updateData() {
        const sending = { layer: props.layer, element: props.element, content: content }
        await fetch('http://localhost:8080/admin', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                // "Allow CORS": "Access-Control-Allow-Methods"
            },
            body: JSON.stringify(sending)
        })
            .then(response => {
                return response.json();
            })
            .then(data =>
                console.log(data)
            )
    }

    async function deleteData() {
        const sending = { layer: props.layer, element: props.element }
        await fetch('http://localhost:8080/admin', {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                // "Allow CORS": "Access-Control-Allow-Origin"
            },
            body: JSON.stringify(sending)
        })
            .then(response => {
                return response.json();
            })
            .catch(err => console.log(err))
    }

    const handleSubmit = async e => {
        e.preventDefault();
        document.getElementById("dataForm__content").value = "";
        props.setChangeData(false);
    }

    if (props.token && props.changeData) {
        return (
            <div className="login-wrapper">
                <h4>Ajoute ton texte</h4>
                <form
                    onSubmit={handleSubmit}
                >
                    <label>
                        <input defaultValue={props.findData(props.layer, props.element)} id="dataForm__content" type="text" onChange={e => setContent(e.target.value.split("//"))} />
                    </label>
                    <div>
                        <button type="submit" onClick={() => createData()}>Ajouter</button>
                    </div>
                    <div>
                        <button type="submit" onClick={() => updateData()}>modifier</button>
                    </div>
                    <div>
                        <button type="submit" onClick={() => deleteData()}>Supprimer</button>
                    </div>
                    <button onClick={() => props.setChangeData(false)}>X</button>
                </form>
            </div>
        );
    }
};

export default DataForm;