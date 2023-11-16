import { React, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Input from './input/Input';
import Textarea from './textarea/Textarea';

//Copie de form portfolio à adapter voir https://codelynx.dev/posts/les-formulaires-react
//configurer compte sur emailjs.com

const Form = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(/*'service_d5jz5bl'*/'', '' /*'template_uzjrtr8'*/, form.current, 'XiNbf4nHndikDxCBL')
            .then((result) => {
                console.log(result.text);
                document.querySelector('.contact__form__send-button').value = "J'ai bien reçu votre message, merci !";
                setTimeout(() => {
                    //                    console.log("effacé");
                    document.querySelector('.contact__form__user-name-input').value = '';
                    document.querySelector('.contact__form__user-email-input').value = '';
                    document.querySelector('.contact__form__message-input').value = '';
                    document.querySelector('.contact__form__send-button').value = "Envoyer";
                }, 3000
                )

            }, (error) => {
                console.log(error.text);
            });
    }

    /*
    return (
        <div className='contact'>
            <form className='contact__form' ref={form} onSubmit={sendEmail}>
                <label for='user-name'>{"Votre nom (obligatoire)"}</label>
                <Input type="text" name="user-name" id="name" />
                <label for='user-email'>{"Votre email (obligatoire)"}</label>
                <Input type="email" name="user-email" id="email" required />
                <label for='user-phon'>{"Votre numéro de téléphone (si vous souhaitez que je vous rappelle)"}</label>
                <Input type="tel" name="user-phon" id="tel" />
                <label for='form-title'>{"Sujet du message"}</label>
                <Input type="text" name="message-title" id="title" />
                <label for='form-message'>{"Votre message"}</label>
                <Textarea name='form-message' rows="5" cols="33" id='form-message' />
            </form>
        </div>
    );*/
    return (
        <div className='contact'>
            <form className='contact__form' ref={form} onSubmit={sendEmail}>
                <Input title="user-name" label="Nom :" type="text" />

                <Textarea title="message" label="Message :" />
            </form>
        </div>
    );

};

export default Form;