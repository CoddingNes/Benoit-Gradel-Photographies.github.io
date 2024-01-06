import React from 'react';
import './textarea.scss';


const Textarea = (props) => {
    return (
        <div
            className={"textarea contact__form__" + props.title}
            id={"customerSpace identifiant2"}
        >
            <label htmlFor={props.title}>{props.label}</label>
            <textarea
                onClick={() => props.initData()}
                className='contact__form__message-input'
                name={props.title}
                id={props.id}
                cols="30"
                rows="10"
                required></textarea>
            <input
                id={props.id}
                onClick={() => props.initData()}
                className="contact__form__send-button button"
                type="submit"
                value="Envoyer" />
        </div>
    );
};

export default Textarea;