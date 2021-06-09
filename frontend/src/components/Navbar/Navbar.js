import React from 'react';
import { Button } from '../Button/Button';
import {MenuItems} from "./MenuItems"
import './Navbar.css'

class Navbar extends React.Component{
    state = {clicked: false}

    handleClick = () => (
        this.setState({clicked: !this.state.clicked})
    )

    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Health App<i className="fas fa-running"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) =>{
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                                
                             </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }

}

export default Navbar