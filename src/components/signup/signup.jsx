import React, { useState } from "react";
// import PropTypes from 'prop-types';
import './signup.scss';


// const data = '../user_copy.json';

// // // fetch(data, {
// // //     headers: {
// // //         'Content-Type': 'application/json',
// // //         'Accept': 'application/json'
// // //     }
// // // })
// // //     .then(response => {
// // //         return response.json();
// // //     })
// // //     .then(data => {
// // //         console.log(data.user);
// // //     })

// const signupUser = async (myDataObject) => {
//     const response = await fetch('https://data.mongodb-api.com/app/data-kborn/endpoint/data/v1', {
// method: 'GET',
// headers: {
//     'Content-Type': 'application/json'
// },
// body: JSON.stringify(myDataObject)
// });

// const data = await response.json();

// now do whatever you want with the data  
//     console.log(data);


const Signup = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [wrapper, setWrapper] = useState(true);
    //     const [newUser, setNewUser] = useState();

    async function createUser(a, b) {
        await fetch('http://localhost:8080/auth/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // "Allow CORS": "Access-Control-Allow-Methods"
            },
            body: JSON.stringify({ username: a, password: b })
        })
            .then(response => {
                return response.json();
            })
            .then(data =>
                console.log(data)
            )
    }

    const handleSubmit = async e => {
        e.preventDefault();
        // const newUser = { "username": username, "password": password };
        // const newUser = await signupUser({ "username": username, "password": password })
        // const username = username;
        // const password = password;
        createUser(username, password);
        // console.log(newUser);
    }

    return (
        <div
            className="signup-wrapper"
            onClick={() => { wrapper ? setWrapper(false) : setWrapper(true) }}
        >
            <h3>Créer un nouveau compte Admin</h3>
            {!wrapper ?
                <form onSubmit={handleSubmit}>
                    <label>
                        <p>Identifiant</p>
                        <input type="text" onChange={e => setUsername(e.target.value)} />
                    </label>
                    <label>
                        <p>Mot de passe</p>
                        <input type="password" onChange={e => setPassword(e.target.value)} />
                    </label>
                    <div>
                        <button type="submit" >Submit</button>
                    </div>
                </form>
                : null}
        </div>
    );
};

// // // Signup.propTypes = {
// // //     setUsername: PropTypes.func.isRequired,
// // //     setPassword: PropTypes.func.isRequired
// // // }

export default Signup;