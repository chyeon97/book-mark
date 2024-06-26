import classNames from "classnames/bind";
import React from 'react';
import "../styles/_button.scss"

const Button = ({id, size, color, children, onClick}) => {
    return (
        <button id={id} className={classNames('Button', size, color)} onClick={onClick}>
            {children}
        </button>
    )
}

Button.defaultProps = {
    size: 'medium',
    color: 'blue'
};

export default Button