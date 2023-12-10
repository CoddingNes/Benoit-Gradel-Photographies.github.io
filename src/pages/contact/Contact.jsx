import React, { useState, useEffect } from 'react';
import Form from '../../components/form/Form';
import Navbar from '../../components/navbar/Navbar';
import './contact.scss';

const Contact = (props) => {

    const [contactData, setContactData] = useState([]);
    const setPackageBox = () => {
        setContactData(props.data);
    }

    useEffect(() => {
        setPackageBox();
    })

    if (contactData.length === 0) {
        return <>Still loading...</>;
    }

    return (
        <main id='contact'>
            <Navbar />
            <h2 className='contact__title'>{contactData.titre}</h2>
            <div className='contact__container'>
                <div className='contact__intro'>
                    {contactData.texte.map((texte, index) => (
                        <p
                            key={index}>
                            {texte}
                            {/* {texte.search("<span>") !== undefined ? { texte } : ""} */}
                        </p>
                    ))}
                </div>
                <Form data={contactData.cadres} />
            </div>
        </main>
    );
};

export default Contact;