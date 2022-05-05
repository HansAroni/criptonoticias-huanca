import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget/CartWidget';
import './NavBar.css';

function NavBar(props) {
    return (
        <div className='nav-container'>
            <Link to='/'>
                <img
                    src='https://image.shutterstock.com/image-vector/initial-c-crypto-logo-design-260nw-2013205661.jpg'
                    alt="CrytoNoticias"
                />
            </Link>
            <ul className='nav'>
                <li><NavLink to='/category/Cryptocurrency' className={nav => nav.isActive ? 'nav-active' : ''}>Cryptocurrency</NavLink></li>
                <li><NavLink to='/category/Fiat' className={nav => nav.isActive ? 'nav-active' : ''}>Fiat</NavLink></li>
                <li><NavLink to='/' className={nav => nav.isActive ? 'nav-active' : ''}>All</NavLink></li>
            </ul>
            <CartWidget/>
        </div>
    );
}

export default NavBar;

