import React from "react";
import "./register.scss";
import { Link } from "react-router-dom";

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            age: 0,
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
            <div className="container register">
                <form onSubmit={this.handleSubmit}>
                    <h1>Register</h1>

                    <input
                        required
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                        value={this.state.name}
                        onChange={this.handleChangeName}
                    />

                    <input
                        required
                        id="age"
                        type="number"
                        className="form-control "
                        placeholder="Enter age"
                        value={this.state.age}
                        onChange={this.handleChangeAge}
                    />

                    <input
                        required
                        id="email"
                        type="email"
                        className="form-control "
                        placeholder="Enter new email"
                        value={this.state.email}
                        onChange={this.handleChangeEmail}
                    />

                    <input
                        required
                        type="text"
                        className="form-control"
                        id="password"
                        placeholder="Enter new Password"
                        value={this.state.password}
                        onChange={this.handleChangePassword}
                    />


                    <input type="submit" className="btn btn-primary snapButton" value="Submit" />

                    <div className="sign">
                        Already have an account? <Link to="/login">Login In</Link>
                    </div>
                </form>
            </div>
        );
    }
}
export default Register;
