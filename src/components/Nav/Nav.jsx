import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';

const Nav = (props) => {
    let navState = props.user ?
        <div>
            <Link to='' onClick={props.handleLogout}>LOG OUT</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <span>WELCOME, {props.user.name}</span>
        </div>
        :
        "";

    return (
        <div>
            {navState}
        </div>
    );
};

export default Nav;