import React, {useEffect, useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import './Header.style.scss';
import instagramIcon from '../../../../icons/instagram.svg';
import useScreenSize from "../../../../hooks/useScreenSize";
import Burger from "../../../../components/Burger/Burger.component";

const Header = () => {
    const screenSize = useScreenSize();
    const [isOpen, setIsOpen] = useState(false);

    const logo = screenSize.width < 1200 ? '//images.squarespace-cdn.com/content/v1/642ec98e04b4a869e47cf1f3/b4511846-0ccf-400d-be1c-dc3820d37ddf/TMPLLNTWHITE.png?format=1500w' : '//images.squarespace-cdn.com/content/v1/642ec98e04b4a869e47cf1f3/ff5819bc-4df5-440e-90bc-372a35ceae17/TMPLLNT_2024_WHITE.png?format=1500w';


    const handleMenuOpen = () => {
        setIsOpen(!isOpen);
        console.log("isOpen",isOpen);
    }

    const handleMenuClose = () => {
        setIsOpen(false);
        console.log("isOpen",isOpen);
    }

    return (
        <div className='header'>
            <div className='header-logo' style={{marginLeft: screenSize.width <1200 ? '35%' : '0'}}>
                <Link to='/'>
                    <img
                        src={logo}
                        alt='logo'/>
                </Link>


            </div>
            {screenSize.width < 1200 && (<Burger handleClick={handleMenuOpen} isOpen={isOpen}/>)}
                { isOpen && (
                    <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                        <div className='header-links'>
                            <NavLink to='/photos' exact activeClassName='active' className='header-link' onClick={handleMenuClose}>
                                photo
                            </NavLink>
                            <NavLink to='/contacts' exact activeClassName='active' className='header-link' onClick={handleMenuClose}>
                                contact
                            </NavLink>
                            <NavLink to='/instagram' exact className='disableLink' style={{marginTop: '5px'}} onClick={handleMenuClose}>
                                <img src={instagramIcon} alt="instagram icon" style={{filter: 'invert(1)'}}/>
                            </NavLink>
                        </div>
                    </div>
                )}


            {screenSize.width >= 1200 && (
                <div className='header-links'>
                    <NavLink to='/photos' exact activeClassName='active' className='header-link'>
                        photo
                    </NavLink>
                    <NavLink to='/contacts' exact activeClassName='active' className='header-link'>
                        contact
                    </NavLink>
                    <NavLink to='/instagram' exact className='disableLink' style={{marginTop: '5px'}}>
                        <img src={instagramIcon} alt="instagram icon" style={{filter: 'invert(1)'}}/>
                    </NavLink>
                </div>
            )}



        </div>
    );
};

export default Header;
