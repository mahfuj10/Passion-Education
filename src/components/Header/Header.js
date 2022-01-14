import React from 'react';
import Nav from './Nav';
import './Header.css';
import HeaderMain from './HeaderMain';


// call components

const Header = () => {

    return (

        <div>
            <Nav></Nav>
            <HeaderMain></HeaderMain>
        </div>
    );
};

export default Header;