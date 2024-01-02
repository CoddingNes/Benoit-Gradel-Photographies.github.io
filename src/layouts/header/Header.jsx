import React, { useState } from "react";
import "./header.scss";
import { NavLink } from "react-router-dom";
import DataForm from "../../components/dataForm/DataForm";

const Header = (props) => {


    const [changeData, setChangeData] = useState(false);
    // const [thisData, setThisData] = useState();

    const createData = () => {
        onclick = (event) => {
            if (event.ctrlKey) {
                // setThisData(content)
                event.preventDefault();
                /* let text = prompt('Indique le texte de remplacement ici', content)*/
                // if (text != null) {
                // console.log(text);
                setChangeData(true);
                // }
            }
        };
    }

    return (
        <header>
            <NavLink
                onClick={
                    createData()
                }
                to={props.token ? "" : '/Benoit-Gradel-Photographies.github.io/'}
                className='logo__link'
                title="Benoit Gradel Photographies, portraits, mariages et projets d'entreprise">
                <h1
                    className='title'
                // onClick= {props.token ? () => { { getLocalData(), changeData(data, content) }} : "" } 
                >{props.title}</h1>
            </NavLink>
            {changeData ? <DataForm token={props.token} setChangeData={setChangeData} /> : ""}
            {/* <div>
                <button className="bouton" onClick={() => (truc())} >
                    {element}
                </button>
                {previous !== undefined ?
                    <div onClick={() => (setElement(previous))} >précédent</div> :
                    ""
                }
            </div> */}
        </header>
    );
};

export default Header;