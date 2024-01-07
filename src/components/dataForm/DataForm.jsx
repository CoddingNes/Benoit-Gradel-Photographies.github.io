import React, { useState } from "react";
import './dataForm.scss';

const DataForm = (props) => {
    const [content, setContent] = useState();
    const [content1, setContent1] = useState("");
    const [content2, setContent2] = useState("");

    console.log(props.layer, props.element, props.dataType);

    async function createData() {
        const sending = { layer: props.layer, element: props.element, content: content, content1: content1, content2: content2 }
        await fetch('http://localhost:8080/admin', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // "Allow CORS": "Access-Control-Allow-Methods"
            },
            body: JSON.stringify(sending)
        })
            .then(response => {
                setContent1("")
                setContent2("")
                return response.json();
            })
            .then(data =>
                console.log(data)
            )
    }

    async function updateData() {
        const sending = { layer: props.layer, element: props.element, content: content, content1: content1, content2: content2 }
        await fetch('http://localhost:8080/admin', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                // "Allow CORS": "Access-Control-Allow-Methods"
            },
            body: JSON.stringify(sending)
        })
            .then(response => {
                setContent1("")
                setContent2("")
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
        if (props.dataType === "img") {
            document.getElementById("dataForm__content1").value = "";
            document.getElementById("dataForm__content2").value = "";
        } else if (props.dataType === "table") {
            document.getElementById("dataForm__content1").value = "";
        }
        props.setChangeData(false);
    }

    if (props.token && props.changeData) {
        return (
            <div id="dataForm">
                <p
                    className="indications"
                >Ajoute ou modifie ton texte ici.<br />Inscris // pour simuler un retour à la ligne.</p>
                <form
                    onSubmit={handleSubmit}
                >
                    {/* <label> */}
                    <textarea
                        cols="30"
                        rows="10"
                        className="input"
                        defaultValue={props.findData(props.layer, props.element)[0] !== 'no data' ? props.findData(props.layer, props.element)[0].length > 1 ? props.findData(props.layer, props.element)[0].join("\n") : props.findData(props.layer, props.element)[0] : "entrer un texte ici"}
                        id="dataForm__content"
                        type="text"
                        onChange={e => setContent(e.target.value.split("\n"))}></textarea>
                    {/* </label> */}
                    {props.dataType === "img" || props.dataType === "table" ?
                        <textarea
                            cols="30"
                            rows="10"
                            className="input"
                            defaultValue={props.findData(props.layer, props.element)[1] ? props.findData(props.layer, props.element)[1].length > 1 ? props.findData(props.layer, props.element)[1].join("\n") : props.findData(props.layer, props.element)[1] : "entrer un texte ici"}
                            id="dataForm__content1"
                            type="text"
                            onChange={e => setContent1(e.target.value.split("\n"))}></textarea>
                        :
                        ""
                    }
                    {props.dataType === "img" ?
                        <textarea
                            cols="30"
                            rows="10"
                            className="input"
                            defaultValue={props.findData(props.layer, props.element)[2] ? props.findData(props.layer, props.element)[2].length > 1 ? props.findData(props.layer, props.element)[2].join("\n") : props.findData(props.layer, props.element)[2] : "entrer un texte ici"}
                            id="dataForm__content2"
                            type="text"
                            onChange={e => setContent2(e.target.value.split("\n"))}></textarea>
                        :
                        ""
                    }
                    <div className="button__box">
                        <button type="submit" onClick={() => createData()}>Ajouter</button>
                        <button type="submit" onClick={() => updateData()}>modifier</button>
                        <button type="submit" onClick={() => deleteData()}>Supprimer</button>
                    </div>
                    <button
                        className="closing-button"
                        onClick={() => {
                            setContent("")
                            setContent1("")
                            setContent2("")
                            props.setChangeData(false)
                        }}
                    >X</button>
                </form>
            </div>
        );
    }
};

export default DataForm;