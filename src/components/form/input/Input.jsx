import React from 'react';
import './input.scss';


const Input = (props) => {
    return (
        <div className={"input contact__form__" + props.title}>
            <label htmlFor={props.title} >{props.label}</label>
            <input
                className={'contact__form__' + props.title + '-input'}
                name={props.title}
                type={props.type}
                required={props.required} />
        </div>
    );
};

export default Input;