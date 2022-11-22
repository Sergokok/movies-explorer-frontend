import React from 'react';
import { useLocation } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import NavigationLogginIn from '../NavigationLogginIn/NavigationLogginIn';


import './Header.css';


const Header = ({loginIn}) => {
  const location = useLocation();

    return (
      location.pathname === '/'  ? (
        <header className='header header-promo'>
        <Logo />
        <Navigation />
      </header>
    ) : (
      <header className='header header-login'>
        <Logo />
        <NavigationLogginIn  />
      </header>
    )
  )


}

export default Header;
