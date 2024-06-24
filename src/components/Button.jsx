import classNames from "classnames/bind";
import React from 'react';
import "../styles/button.scss"

const Button = ({size, color, children}) => {
    return (
        <div className={classNames('Button', size, color)} style={{'--color': color}}>
            {children}
        </div>
    )
}

Button.defaultProps = {
    size: 'medium',
    color: 'blue'
};

export default Button