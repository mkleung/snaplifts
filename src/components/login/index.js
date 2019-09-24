import React from "react";
import { Link } from "react-router-dom";
import "./login.scss";

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "test@test.com",
            password: "",
            showPassword: false
        };
    }

    handleChangeEmail = event => {
        this.setState({ email: event.target.value });
    };

    handleChangePassword = event => {
        this.setState({ password: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        let email = this.state.email;
        let password = this.state.password;
        let users = this.props.users;
        const foundUser = users.filter(user => {
            return user.email === email;
        });
        if (password === foundUser[0].password) {
            this.props.history.push(`/workouts`)
            this.props.loginUser(foundUser[0].id);
        } else {
            alert("invalid Email/password");
        }
    };

    render() {
        return (
            <div className="container login">
                <form
                    onSubmit={this.handleSubmit}

                >
                    <div className="form-group">
                        <i className="material-icons">directions_walk</i>
                        <h3>Login</h3>
                        <input
                            required
                            id="email"
                            type="email"
                            className="form-control loginInput loginEmail"
                            placeholder="Enter email"
                            value={this.state.email}
                            onChange={this.handleChangeEmail}
                        />
                    </div>

                    <div className="form-group password">
                        <input
                            required
                            type="password"
                            className="form-control loginInput loginPassword"
                            id="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleChangePassword}
                        />

                    </div>

                    <input type="submit" className="btn btn-primary snapButton" value="Submit" />

                    <div className="sign">
                        Don't have an account? <Link to="/register">Sign In</Link>
                    </div>
                </form>
            </div>


        );
    }
}
export default Login;
