import React from 'react';

import './button.scss';

function Button(props) {
    const text = props.text ? props.text : 'Ok';
    const type = props.type ? props.type : 'button';
    const color = props.color ? ' -' + props.color : ' -primary';
    const bordered = props.bordered ? ' -bordered' : '';
    const rounded = props.rounded ? ' -rounded' : '';
    const shadowed = props.shadowed ? ' -shadowed' : '';
    const blanked = props.blanked ? ' -blanked' : '';

    const onClickHandler = function () {
        if (typeof props.onClick !== 'undefined') {
            props.onClick();
        }
    }

    return (
        <button
            type={type}
            className={`btn${color}${bordered}${rounded}${shadowed}${blanked}`}
            onClick={onClickHandler}
            disabled={props.disabled}>
            {text}
        </button>
    )
}

Button.defaultProps = {
    bordered: '',
    rounded: '',
    shadowed: '',
    blanked: ''
};

export default Button;
