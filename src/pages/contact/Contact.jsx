import React from 'react';
import Form from '../../components/form/Form';
import Navbar from '../../components/navbar/Navbar';

const Contact = () => {
    return (
        <main className='contact'>
            <Navbar />
            <h2 className='contact__title'>Contactez-moi</h2>
            <p className='contact__intro'></p>
            <Form />
        </main>
    );
};

export default Contact;