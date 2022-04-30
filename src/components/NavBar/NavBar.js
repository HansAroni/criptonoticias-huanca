import React, { Component } from 'react';
import './NavBar.css';
import {MenuItems} from "./MenuItems";
import { Button } from '../../Button';
import CartWidget from "./cartwidget";



class NavBar extends Component{
    state = {clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render(){
        return(
            <nav className='NavBarItems'>
                <h1 className="navbar-logo" > CriptoNoticas <i className='fa-solid fa-bitcoin-sign'></i>
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
                <ul>
                    <li ><CartWidget qtty="1"/></li>     
                </ul>
                <Button> Sign up</Button>
            </nav>
        )
    }
}
export default NavBar;

