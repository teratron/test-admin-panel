import React from 'react';

import './button.scss';

function Button(props = {bordered: '', rounded: '', shadowed: ''}) {
    const text = props.text ? props.text : 'Ok';
    const type = props.type ? props.type : 'button';
    const color = props.color ? ' btn-' + props.color : ' btn-primary';
    const size = props.size ? ' btn-' + props.size : ' btn-normal';
    const style = props.style ? props.style : {};
    const bordered = props.bordered ? ' btn-bordered' : '';
    const rounded = props.rounded ? ' btn-rounded' : '';
    const shadowed = props.shadowed ? ' btn-shadowed' : '';
    const className = `btn${color}${size}${bordered}${rounded}${shadowed}`;

    const onClickHandler = function () {
        if (typeof props.onClick !== 'undefined') {
            props.onClick();
        }
    }

    return (
        <button
            type={type}
            className={className}
            style={style}
            onClick={onClickHandler}
            disabled={props.disabled}>
            {text}
        </button>
    )
}

export default Button;
