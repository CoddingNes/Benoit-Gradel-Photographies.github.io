import React from 'react';
import './input.scss';


const Input = (props) => {
    console.log("input appear")
    return (
        <div
            className={"input contact__form__" + props.title}
        >
            <label
                id={props.id}
                onClick={() => props.initData()}
                htmlFor={props.title} >
                {props.label}
            </label>
            <input
                id={props.id}
                onClick={() => props.initData()}
                className={'contact__form__' + props.title + '-input'}
                name={props.title}
                type={props.type}
                required={props.required} />
        </div>
    );
};

export default Input;