import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';

const Nav = (props) => {
    let navState = props.user ?
        <div>
            <span>WELCOME, {props.user.name}</span>
            <br />
            <br />
            <Link className="logout-button" to='' onClick={props.handleLogout}>LOG OUT</Link>
            <br />
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