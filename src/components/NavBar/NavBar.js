import React, { Component } from 'react';
import './NavBar.css';
import {MenuItems} from "./MenuItems"


// function NavBar(props) {
//     return (
//         <div>
//             <ul className='nav'>
//                 <a href="#">Inicio</a>
//                 <a href="#">Contacto</a>
//                 <a href="#">Nosotros</a>
//             </ul>
//         </div>
//     );
// }



class NavBar extends Component{
    state = { clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render(){
        return(
            <nav className='NavBarItems'>
                <h1 className="navbar-logo" > CriptoNoticas <i className='fab fa-react'></i>
                </h1>
                <div className='menu-icon' onClick={this.handleClick}> 
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index)=>{
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}    
                                </a>

                                </li>
                        )
                    }

                    )}
                    
                </ul>
            </nav>
        )
    }
}
export default NavBar;