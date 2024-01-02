import React from 'react';


let myJson = {
    "key": "value",
    "object": {
        "key": "value",
        "key2": "value2"
    }
}

const data = '../user_copy.json';


async function signupUser(credentials) {
    console.log(credentials);
    fetch(data, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials)
    })
        .then(response => {
            return response.json();
        })
        .then(data =>
            console.log(data)
        )
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
};

const Test = () => {
    return (
        <div onClick={() => signupUser({ "username": "a", "password": "a" })}>
            {myJson.key}
        </div>
    );
};

export default Test;
