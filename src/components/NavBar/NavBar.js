import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget/CartWidget';
import './NavBar.css';

function NavBar(props) {
    return (
        <div className='nav-container'>
            <Link to='/'>
                <img
                    src='omg-logo.png'
                    alt="OMG Comics"
                />
            </Link>
            <ul className='nav'>
                <li><NavLink to='/category/accion' className={nav => nav.isActive ? 'nav-active' : ''}>Accion</NavLink></li>
                <li><NavLink to='/category/drama' className={nav => nav.isActive ? 'nav-active' : ''}>Drama</NavLink></li>
                <li><NavLink to='/category/superheroes' className={nav => nav.isActive ? 'nav-active' : ''}>Superheroes</NavLink></li>
            </ul>
            <CartWidget/>
        </div>
    );
}

export default NavBar;

