import React from 'react';

import './form.scss';

function Input(props) {
    /*const type = props.type ? props.type : 'button';
    const value = props.value ? props.value : 'button';
    const name = props.name ? props.value : {};
    const form = props.form ? props.form : {};

    const color = props.color ? ' -' + props.color : ' -primary';
    const size = props.size ? ' -' + props.size : ' -normal';

    const bordered = props.bordered ? ' -bordered' : '';
    const rounded = props.rounded ? ' -rounded' : '';
    const shadowed = props.shadowed ? ' -shadowed' : '';

    const onClick = function () {
        if (typeof props.onClick !== 'undefined') props.onClick();
    }

    switch() {
        case
        default:
            break;
    }*/

    return (
        <input
            /*type={type}

            className={`btn${color}${size}${bordered}${rounded}${shadowed}`}
            onClick={onClick}
            required={props.required}
            disabled={props.disabled}*//>
    )
}

Input.defaultProps = {
    bordered: '',
    rounded: '',
    shadowed: ''
};

export default Input;
