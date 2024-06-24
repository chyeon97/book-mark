import React from 'react';
import '../styles/header.scss';
import ICON from '../images/menuIcon.png'
import Button from './Button';

const Header = () => {
    return (
        <div className="container">
            <img src={ICON} width={40}/>
        </div>
    );
}

export default Header