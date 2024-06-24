import React from 'react';
import '../styles/_header.scss';
import ICON from '../images/menuIcon.png'

const Header = () => {
    return (
        <div className="container">
            <img src={ICON} width={40}/>
        </div>
    );
}

export default Header