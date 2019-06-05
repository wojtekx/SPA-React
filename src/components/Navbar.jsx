import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {

    return(
        <nav className="nav-wrapper red darken-4">
            <div className="container">
                <span className="brand-logo left">Logo</span>
                <ul className="right">
                    <li><NavLink to="/">Weather App</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/AppTodo">AppTodo</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}
export default withRouter(Navbar)