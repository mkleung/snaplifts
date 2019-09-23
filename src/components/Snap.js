import React from 'react'
import Nav from "./nav"
import Login from "./login"
import Profile from "./profile"
import Register from "./register"
import Dashboard from "./dashboard"
import Start from "./start"
import auth from "./auth"
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

class Snap extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            page: "start"
        };
    }

    changePage = page => {
        this.setState({
            page: page
        });
    };
    addUser = (name, email, password) => {
        auth.addUser(name, email, password);
    };
    loginUser = id => {
        auth.login(id);
    };

    logoutUser = () => {
        auth.logout();
    };


    render() {
        return (
            <Router>

                <Nav changePage={this.changePage} />

                {/* HOMEPAGE */}
                <Route
                    exact
                    path="/"
                    render={props => (
                        <Start
                            location={props.location}
                            {...props}
                        />
                    )}
                />

                {/* LOGIN  */}
                <Route
                    path="/login"
                    render={props => (
                        <Login
                            location={props.location}
                            loginUser={this.loginUser}
                            page={this.state.page}
                            users={auth.users}
                            {...props}
                        />
                    )}
                />

                {/* REGISTER */}
                <Route
                    path="/register"
                    render={props => (
                        <Register
                            location={props.location}
                            addUser={auth.addUser}
                            users={auth.users}
                            {...props}
                        />
                    )}
                />


                {/* PROFILE */}
                <Route
                    path="/profile"
                    render={props =>
                        auth.isAuthenticated === true ? (
                            <Profile
                                location={props.location}
                                logoutUser={this.logoutUser}
                                authenticatedUser={auth.authenticatedUser}
                                users={auth.users}
                                {...props}
                            />
                        ) : (
                                <Redirect to="/login" />
                            )
                    }
                />


                {/* DASHBOARD */}
                <Route
                    path="/dashboard"
                    render={props =>
                        auth.isAuthenticated === true ? (
                            <Dashboard
                                location={props.location}
                                {...props}
                            />
                        ) : (
                                <Redirect to="/login" />
                            )
                    }
                />


            </Router>
        )
    }
}
export default Snap;
