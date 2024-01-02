import React, { useState } from "react";
import PropTypes from 'prop-types';
import './login.scss';

const Login = (props) => {

    async function loginUser(a, b) {
        await fetch('http://localhost:8080/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: a, password: b })
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                props.setToken(data);
                // window.location.href = '/Benoit-Gradel-Photographies.github.io';
            }
            )
    }

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();


    const handleSubmit = async e => {
        e.preventDefault();
        loginUser(username, password);
        // window.location.href = '/Benoit-Gradel-Photographies.github.io';
    };

    return (
        <div className="login-wrapper">
            <h2>Please Log In</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUsername(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login;