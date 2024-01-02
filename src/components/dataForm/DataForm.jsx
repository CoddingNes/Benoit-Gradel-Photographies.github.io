import React, { useState } from "react";
import './dataForm.scss';

const DataForm = (props) => {
    const [content, setContent] = useState();
    // const [element, setElement] = useState();
    // const [layer, setLayer] = useState();

    // async function changeData(data) {
    //     await fetch('http://localhost:8080/admin', {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             // "Allow CORS": "Access-Control-Allow-Methods"
    //         },
    //         body: JSON.stringify(data)
    //     })
    //         .then(response => {
    //             return response.json();
    //         })
    //         .then(data =>
    //             console.log(data)
    //         )
    // }

    async function updateData(data) {
        await fetch('http://localhost:8080/admin', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                // "Allow CORS": "Access-Control-Allow-Methods"
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                console.log(response)
                return response.json();
            })
            .then(data =>
                console.log(data)
            )
    }

    async function deleteData(data) {

    }

    const handleSubmit = async e => {
        e.preventDefault();
        const layer = localStorage.getItem("layer");
        const element = localStorage.getItem("element");
        const sending = { layer: layer, element: element, content: content }
        // changeData(sending);
        updateData(sending);
        document.getElementById("dataForm__content").value = "";
        // document.getElementById("dataForm__layer").value = "";
        // document.getElementById("dataForm__element").value = "";
        props.setChangeData(false);
        localStorage.clear();
    }

    if (props.token) {
        return (
            <div className="login-wrapper">
                <h4>Ajoute ton texte</h4>
                <form onSubmit={handleSubmit}>
                    <label>
                        <input defaultValue={props.thisData} id="dataForm__content" type="text" onChange={e => setContent(e.target.value)} />
                    </label>
                    {/* <label>
                        <input id="dataForm__layer" type="text" onChange={e => setLayer(e.target.value)} />
                    </label>
                    <label>
                        <input id="dataForm__element" type="text" onChange={e => setElement(e.target.value)} />
                    </label> */}
                    <div>
                        <button type="submit" >Ajouter</button>
                    </div>
                    <div>
                        <button onclick={() => updateData()}>modifier</button>
                    </div>
                    <div>
                        <button onclick={() => deleteData()}>Supprimer</button>
                    </div>
                    <button onClick={() => props.setChangeData(false)}>X</button>
                </form>
            </div>
        );
    }
};

export default DataForm;