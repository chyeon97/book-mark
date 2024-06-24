import classNames from "classnames/bind";
import React from 'react';
import "../styles/_button.scss"

const Button = ({size, color, children, onClick}) => {
    return (
        <button className={classNames('Button', size, color)} onClick={onClick}>
            {children}
        </button>
    )
}

Button.defaultProps = {
    size: 'medium',
    color: 'blue'
};

export default Button