import React from 'react';
import {NavLink} from 'react-router-dom';

const NavLinks = () => {
    return (
        <ul className="navbar-link">
            <li>
                <NavLink to="/">All Users</NavLink></li>
            <li>
                <NavLink to="/">Washers</NavLink></li>
            <li>
                <NavLink to="/">Owner</NavLink></li>
            <li>
                <NavLink to="/auth">Authentication</NavLink></li>

        </ul>
    );
};

export default NavLinks;
