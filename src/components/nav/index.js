import React from "react";
import "./nav.scss"
import { Link } from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo">SnapLifts</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {this.props.loginUser === null && <li><Link to="/login">Login</Link></li>}
                        {this.props.loginUser === null && <li> <Link to="/register">Register</Link></li>}
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                    </ul>
                </div>
            </nav >

        );
    }
}
export default Nav;
