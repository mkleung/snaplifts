import "./start.scss"
import { Link } from "react-router-dom";

import React from 'react'
class Start extends React.Component {

    changeWorkout = (workout) => {
        this.props.changeWorkoutParent(workout);
        this.props.history.push(`/workouts`)
    }
    render() {
        var logoStyle = {
            backgroundImage: "url(./assets/squats.png)"
            // backgroundImage: "url(https://via.placeholder.com/250)"
        };
        return (
            <div className="start card hoverable">
                <div className="left" style={logoStyle}>
                    {/* <img className="squat" src="./assets/squats.png" alt="squat"></img> */}
                </div>
                <div className="right">
                    <h3 className="title">Gym Tracking App</h3>
                    <div className="subtitle">Snaplifts make it easier to track your gym workouts</div>
                    <div className="buttons">

                        {this.props.loginUser === null && <Link className="snapButton waves-effect waves-light btn-large" to="/login">Login</Link>}
                        {this.props.loginUser === null && <Link className="snapButton waves-effect waves-light btn-large" to="/register">Register</Link>}
                        {this.props.loginUser === null && <Link className="snapButton waves-effect waves-light btn-large" to="/">Demo</Link>}


                        {this.props.loginUser !== null && <div onClick={() => this.changeWorkout("A")} className="snapButton waves-effect waves-light btn-large">Workout A</div>}
                        {this.props.loginUser !== null && <div onClick={() => this.changeWorkout("B")} className="snapButton waves-effect waves-light btn-large">Workout B</div>}
                        {this.props.loginUser !== null && <div onClick={() => this.changeWorkout("C")} className="snapButton waves-effect waves-light btn-large">Workout C</div>}
                    </div>

                </div>
            </div >
        )
    }
}
export default Start;
