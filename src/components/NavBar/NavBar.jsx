import React from 'react';
import './NavBar.css';


function NavBar(props) {
    return (
        <div>
            <ul className='nav'>
                <a href="#">Inicio</a>
                <a href="#">Contacto</a>
                <a href="#">Nosotros</a>
            </ul>
        </div>
    );
}

export default NavBar;