import React from "react";
import "./nav.scss"
import { NavLink } from "react-router-dom";

class Nav extends React.Component {
    logout = () => {
        this.props.logoutUser();
        // this.props.history.push(`/login`);
    };
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo">SnapLifts</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {this.props.loginUser === null && <li><NavLink activeClassName='active' to="/login">Login</NavLink></li>}
                        {this.props.loginUser === null && <li> <NavLink activeClassName='active' to="/register">Register</NavLink></li>}
                        {this.props.loginUser !== null && <li><NavLink activeClassName='active' to="/workouts">Workouts</NavLink></li>}
                        {this.props.loginUser !== null && <li><NavLink activeClassName='active' to="/dashboard">Dashboard</NavLink></li>}
                        {this.props.loginUser !== null && <li><NavLink activeClassName='active' to="/profile">Profile</NavLink></li>}
                        
                        {this.props.loginUser &&
                            <li><a className='dropdown-button btn' onClick={this.logout}>Log Out</a></li>
                        }
                        
                    </ul>
                </div>
            </nav >

        );
    }
}
export default Nav;
