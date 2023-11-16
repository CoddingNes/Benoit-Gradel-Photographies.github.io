import React from 'react';
import './input.scss';


const Input = (props) => {
    return (
        <div className={"contact__form__" + props.title}>
            <label>{props.label}</label>
            <input className={'contact__form__' + props.title + '-input'} name={props.title} type={props.type} required />
        </div>
    );
};

export default Input;