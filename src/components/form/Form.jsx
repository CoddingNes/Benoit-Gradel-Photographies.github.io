import { React, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Input from './input/Input';
import Textarea from './textarea/Textarea';
import './form.scss';

const Form = (props) => {
    // const [formData, setFormData] = useState([]);
    const form = useRef();
    // const getData = () => {
    //     setFormData(props.data);
    // }

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

    const display = (i) => {
        const content = props.findData("contact", "form" + [i]);
        if (content[0][3] === 'input') {
            // <div>haha</div>
            return < Input
                id={"contact form" + [i]}
                initData={props.initData}
                key={i}
                title={content[0][0]}
                label={content[0][1]}
                type={content[0][4]}
                required={
                    content[0][2] === "obligatoire" ?
                        true :
                        false
                } />
        } else if (content[0][3] === 'textarea') {
            return < Textarea
                id={"contact form" + [i]}
                initData={props.initData}
                key={i}
                title={content[0][0]}
                label={content[0][1]} />
        } else {
            <div>no conform data</div>
        }
    }

    // useEffect(() => {
    //     getData();
    // })

    // if (formData.length === 0) {
    //     return <>Still loading...</>;
    // }

    return (
        <div className='contact__form__container'>
            <form className='contact__form'
                ref={form}
                onSubmit={sendEmail}
            >
                {/* <div className={"input contact__form__user-name"}>
                    <label htmlFor={"user-name"} >{"Votre nom"}</label>
                    <input
                        className={'contact__form__user-name-input'}
                        name={"user-name"}
                        type={"text"}
                        required={true} />
                </div>
                <div className={"input contact__form__user-email"}>
                    <label htmlFor={"user-email"} >{"Votre email"}</label>
                    <input
                        className={'contact__form__user-email-input'}
                        name={"user-email"}
                        type={"email"}
                        required={true} />
                </div>
                <div className={"input contact__form__user-phon"}>
                    <label htmlFor={"user-phon"} >{"Votre numéro de téléphone"}</label>
                    <input
                        className={'contact__form__user-phon-input'}
                        name={"user-phon"}
                        type={"tel"}
                        required={false} />
                </div>
                <div className={"input contact__form__title"}>
                    <label htmlFor={"title"} >{"Sujet du message"}</label>
                    <input
                        className={'contact__form__title-input'}
                        name={"title"}
                        type={"input"}
                        required={true} />
                </div>
                <div className={"textarea contact__form__message"}>
            <label htmlFor={"message"}>{"Votre message"}</label>
            <textarea
                className='contact__form__message-input'
                name={"message"}
                id={"message"}
                cols="30"
                rows="10"
                required={true}></textarea>
            <input
                className="contact__form__send-button button"
                type="submit"
                value="Envoyer" />
        </div> */}


                {/* {formData.map((element, index) => (
                    element.element === 'input' ?
                        <Input
                            initData={props.initData}
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
                                initData={props.initData}
                                key={index}
                                title={element.identifiant}
                                label={element.texte} /> :
                            ""
                ))} */}
                {Array.from(
                    { length: 5 },
                    (_, i) => (
                        display(i)
                    )
                )}
            </form>
        </div>
    );

};

export default Form;