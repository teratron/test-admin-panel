import React from 'react';
import './Button.scss';
import '../Theme/Default.css';

function Button(props = {bordered: '', rounded: '', shadowed: ''}) {
    const text = props.text ? props.text : 'Ok';
    const type = props.type ? props.type : 'button';
    const color = props.color ? props.color : 'primary';
    const size = props.size ? props.size : 'normal';
    const style = props.style ? props.style : {};
    const bordered = !!props.bordered;
    const rounded = !!props.rounded;
    const shadowed = !!props.shadowed;
    const className = `btn ${color} ${size}${bordered ? ' bordered' : ''}${rounded ? ' rounded' : ''}${shadowed ? ' shadowed' : ''}`;

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
