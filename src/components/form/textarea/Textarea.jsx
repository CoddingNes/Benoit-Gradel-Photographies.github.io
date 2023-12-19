import React from 'react';
import './textarea.scss';


const Textarea = (props) => {
    return (
        <div className={"textarea contact__form__" + props.title}>
            <label htmlFor={props.title}>{props.label}</label>
            <textarea
                className='contact__form__message-input'
                name={props.title}
                id={props.title}
                cols="30"
                rows="10"
                required></textarea>
            <input
                className="contact__form__send-button button"
                type="submit"
                value="Envoyer" />
        </div>
    );
};

export default Textarea;