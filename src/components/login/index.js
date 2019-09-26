import React from "react";
import { Link } from "react-router-dom";
import "./login.scss";

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
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
            <div className="container">
                <div className="valign-wrapper row login-box">
                    <div className="col card hoverable s10 pull-s1 m6 pull-m3 l4 pull-l4">
                        <form  onSubmit={this.handleSubmit}>
                        <div className="card-content">
                            <span className="card-title">LOGIN</span>
                            <div className="row">
                            <div className="input-field col s12">
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
                            <div className="input-field col s12">
                                <input
                                required
                                                        type="password"
                                                        className="form-control loginInput loginPassword"
                                                        id="password"
                                                        placeholder="Password"
                                                        value={this.state.password}
                                                        onChange={this.handleChangePassword} />
                            </div>

                        <div className="input-field col s12 center-align">
                            <input type="submit" className="btn snapButton waves-effect waves-light btn-large loginbutton" value="Login"/>
                        </div>
                        <p className="center-align">Don't have an account? <Link to="/register">Sign In</Link></p>
                            
                            </div>
                        </div>
                        
                            <div className="card-action right-align">
                                <p>Demo Email: test@test.com</p>
                                <p>Demo Pass: test</p>
                            </div>
                        </form>
                    </div>
                </div>


{/*               

                <div class="row">
                <div className="col s6 loginImg">
                    </div>
                    <div className="col s6 ">
                    <form
                    onSubmit={this.handleSubmit}
                    >
                    <h3>Login</h3>
                            <div className="form-group">
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

                            <div className="form-group">
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

                            <div className="form-group">
                            <input type="submit" className="btn btn-primary snapButton" value="Submit" />
                            </div>

                            <div className="form-group">
                                <div className="sign">
                                    Don't have an account? <Link to="/register">Sign In</Link>
                                </div>
                            </div>

                        </form>
                    </div>
                    </div> */}
            </div>


        );
    }
}
export default Login;
