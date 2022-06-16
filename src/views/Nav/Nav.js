import React from "react";
import './Nav.scss'

import {
    Link, NavLink
} from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
                <NavLink to="/" exact activeClassName="active">
                    Home
                </NavLink>
                <NavLink to="/todo" activeClassName="active">
                    Todo
                </NavLink>
                <NavLink to="/job" activeClassName="active">
                    Job
                </NavLink>
                <NavLink to="/user" activeClassName="active">
                    User
                </NavLink>
            </div>
        )
    }
}

export default Nav;