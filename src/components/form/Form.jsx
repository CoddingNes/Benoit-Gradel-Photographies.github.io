import { React, useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Input from './input/Input';
import Textarea from './textarea/Textarea';
import './form.scss';

//Copie de form portfolio à adapter voir https://codelynx.dev/posts/les-formulaires-react
//configurer compte sur emailjs.com

const Form = (props) => {
    const [formData, setFormData] = useState([]);
    const form = useRef();
    const setPackageBox = () => {
        setFormData(props.data);
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_d5jz5bl', 'BG_contact_form', form.current, 'XiNbf4nHndikDxCBL')
            .then((result) => {
                console.log(result.text);
                document.querySelector('.contact__form__send-button').value = "Votre message a été envoyé !";
                setTimeout(() => {
                    document.querySelector('.contact__form__user-name-input').value = '';
                    document.querySelector('.contact__form__user-email-input').value = '';
                    document.querySelector('.contact__form__user-phon-input').value = '';
                    document.querySelector('.contact__form__title-input').value = '';
                    document.querySelector('.contact__form__message-input').value = '';
                    document.querySelector('.contact__form__send-button').value = "Envoyer";
                }, 3000
                )

            }, (error) => {
                console.log(error.text);
            });
    }

    useEffect(() => {
        setPackageBox();
    })

    if (formData.length === 0) {
        return <>Still loading...</>;
    }

    return (
        <div className='contact__form__container'>
            <form className='contact__form'
                ref={form}
                onSubmit={sendEmail}
            >
                {formData.map((element, index) => (
                    element.element === 'input' ?
                        <Input
                            key={index}
                            title={element.identifiant}
                            label={element.texte}
                            type={element.type}
                            required={
                                element.critères === "obligatoire" ?
                                    true :
                                    false} /> :
                        element.element === 'textarea' ?
                            <Textarea
                                key={index}
                                title={element.identifiant}
                                label={element.texte} /> :
                            ""
                ))}
            </form>
        </div>
    );

};

export default Form;