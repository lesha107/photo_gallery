import React from 'react';
import "./Burger.style.scss";


const Burger = ({isOpen, handleClick}) => {

    const onClick = () => {
        console.log('clock');
        handleClick();
    }

    return (
        <div className="demo">
            <div className="menu-icon">
                <input className={`menu-icon__cheeckbox ${isOpen ? 'open' : ''}`} type="checkbox" onClick={onClick}/>
                <div>
                    <span className={`${isOpen ? 'open' : ''}`}></span>
                    <span className={`${isOpen ? 'open' : ''}`}></span>
                </div>
            </div>
        </div>
    );
};

export default Burger;
