import React from "react";
import "./register.scss";
import { Link } from "react-router-dom";

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            age: null,
            password: "",
            users: JSON.stringify(this.props.users)
        };
    }


    handleChangeName = event => {
        this.setState({ name: event.target.value });
    };

    handleChangeAge = event => {
        this.setState({ age: event.target.value });
    };

    handleChangeEmail = event => {
        this.setState({ email: event.target.value });
    };

    handleChangePassword = event => {
        this.setState({ password: event.target.value });
    };

    handleSubmit = event => {
        // alert("A name was submitted: " + this.state.value);
        event.preventDefault();

        this.props.addUser(this.state.name, this.state.email, this.state.age, this.state.password);

        this.props.history.push(`/login`)
    };
    render() {
        return (

                 <div className="valign-wrapper row login-box">
                    <div className="col card hoverable s10 pull-s1 m6 pull-m3 l4 pull-l4">
                        <form  onSubmit={this.handleSubmit}>
                            <div className="card-content">
                                <span className="card-title">Register</span>
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input
                                            required
                                            id="name"
                                            type="text"
                                            placeholder="Enter your name"
                                            value={this.state.name}
                                            onChange={this.handleChangeName}
                                        />
                                    </div>
                                    <div className="input-field col s6">
                                        <input
                                            required
                                            id="age"
                                            type="number"
                                            className="form-control "
                                            placeholder="Enter age"
                                            value={this.state.age}
                                            onChange={this.handleChangeAge}
                                        />
                                    </div>
                                    <div className="input-field col s12">
                                        <input
                                            required
                                            id="email"
                                            type="email"
                                            className="form-control "
                                            placeholder="Enter new email"
                                            value={this.state.email}
                                            onChange={this.handleChangeEmail} 
                                        />
                                    </div>
                                    <div className="input-field col s12">
                                        <input
                                            equired
                                            type="text"
                                            className="form-control"
                                            id="password"
                                            placeholder="Enter new Password"
                                            value={this.state.password}
                                            onChange={this.handleChangePassword} 
                                            />
                                    </div>

                                    <div className="input-field col s12 center-align">
                                        <input type="submit" className="btn snapButton waves-effect waves-light btn-large" value="Submit" />
                                    </div>
                                    <p className="center-align">Already have an account? <Link to="/login">Log In</Link></p>
                            </div>
                        </div>
                    </form>
                    </div>
                </div>
        );
    }
}
export default Register;
