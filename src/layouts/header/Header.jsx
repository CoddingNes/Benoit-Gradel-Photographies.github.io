import React, { useState } from "react";
import "./header.scss";
import { NavLink } from "react-router-dom";
import DataForm from "../../components/dataForm/DataForm";

const Header = (props) => {


    const [changeData, setChangeData] = useState(false);

    const createData = () => {
        onclick = (event) => {
            if (event.ctrlKey) {
                console.log(event.target.id)
                event.preventDefault();
                const id = event.target.id.split(' ')
                localStorage.setItem("layer", id[0])
                localStorage.setItem("element", id[1])
                setChangeData(true);
            }
        };
    }

    return (
        <header>
            <NavLink
                to={props.token ? "" : '/Benoit-Gradel-Photographies.github.io/'}
                className='logo__link'
                title="Benoit Gradel Photographies, portraits, mariages et projets d'entreprise">
                <h1
                    id="header title"
                    onClick={
                        createData()
                    }
                    className='title'
                >{props.title}</h1>
            </NavLink>
            {changeData ? <DataForm token={props.token} setChangeData={setChangeData} /> : ""}
        </header>
    );
};

export default Header;