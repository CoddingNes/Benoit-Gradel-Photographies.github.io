import React from "react";
import "./header.scss";
import { NavLink } from "react-router-dom";
// import data from "../../../backend/models/data";
// import DataForm from "../../components/dataForm/DataForm";

const Header = (props) => {

    // const [data, setData] = useState()
    // const [loading, setLoading] = useState(true)
    // const [error, setError] = useState(false)

    // async function getData() {
    //     await fetch('http://localhost:8080/admin', {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //     })
    //         .then(response => {
    //             return response.json();
    //         })
    //         .then(data => {
    //             console.log(data.length);
    //             return data;
    //         }
    //         )
    // }

    // async function getData() {
    //     const url = "http://localhost:8080/admin"
    //     await fetch(url, {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //     })
    //         .then(response => {
    //             return response.json();
    //         })
    //         .then((data) => {
    //             setData(data);
    //         })
    //         .catch(err => {
    //             setError(true);
    //             console.log(err)
    //         })
    //         .finally(() => {
    //             setLoading(false);
    //         });
    // }

    // // setData(getData())
    // console.log(data);

    // useEffect(() => {
    //     getData();
    // })

    // if (loading) { return "loading..." }
    // if (error) { return "error..." }

    // const findData = (layer, element) => {
    //     if (props.data) {
    //         for (let i = 0; i < props.data.length; i++) {
    //             if (props.data[i].layer === layer && props.data[i].element === element) {
    //                 return (props.data[i].content)
    //             }
    //         }
    //     }
    // }

    // useEffect(() => {
    //     findData();
    // });

    return (
        <header>
            <NavLink
                to='/Benoit-Gradel-Photographies.github.io/'
                className='logo__link'
                title="Benoit Gradel Photographies, portraits, mariages et projets d'entreprise">
                <h1
                    id="header title"
                    onClick={() => props.initData()}
                    className='title'
                >{
                        // props.data[0].content
                        props.findData("header", "title")
                    }</h1>
            </NavLink>
        </header>
    );
};

export default Header;