import React from 'react'
import Nav from "./nav"
import Login from "./login"
import Profile from "./profile"
import Register from "./register"
import Dashboard from "./dashboard"
import Workouts from "./workouts"
import Start from "./start"
import auth from "../controllers/auth"
import initWorkouts from "../controllers/workouts"
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

class Snap extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            page: "start",
            loginUser: null,
            workouts: null,
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
        this.setState({
            loginUser: auth.login(id)
        })
    };

    logoutUser = () => {
        auth.logout();
        this.setState({
            loginUser: null
        })
    };

    componentWillMount() {
        let loginUser;
        if (localStorage.getItem('snaplifts_login')) {
            loginUser = JSON.parse(localStorage.getItem('snaplifts_login'))
        } else {
            loginUser = null
        }

        let workouts;
        if (localStorage.getItem('snaplifts_workout')) {
            workouts = JSON.parse(localStorage.getItem('snaplifts_workout'))
        } else {
            workouts = initWorkouts
        }

        this.setState({
            loginUser: loginUser,
            workouts: workouts
        })
    }

    updateWorkout = (workouts) => {
        localStorage.setItem('snaplifts_workout', JSON.stringify(workouts));
    }

    render() {
        return (
            <Router>

                <Nav loginUser={this.state.loginUser} changePage={this.changePage} />

                {/* HOMEPAGE */}
                <Route
                    exact
                    path="/"
                    render={props => (
                        <Start
                            location={props.location}
                            loginUser={this.state.loginUser}
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
                        this.state.loginUser ? (
                            <Profile
                                location={props.location}
                                logoutUser={this.logoutUser}
                                loginUser={this.state.loginUser}
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
                        this.state.loginUser ? (
                            <Dashboard
                                location={props.location}
                                updateWorkout={this.updateWorkout}
                                workouts={this.state.workouts}

                                {...props}
                            />
                        ) : (
                                <Redirect to="/login" />
                            )
                    }
                />


                {/* WORKOUTS */}
                <Route
                    path="/workouts"
                    render={props =>
                        this.state.loginUser ? (
                            <Workouts
                                location={props.location}
                                workouts={this.state.workouts}
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
