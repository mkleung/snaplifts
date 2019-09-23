import "./start.scss"

import React from 'react'
class Start extends React.Component {
    render() {
        var logoStyle = {
            // backgroundImage: "url(./assets/squats.png)"
            backgroundImage: "url(https://via.placeholder.com/250)"
        };
        return (
            <div className="start">
                <div className="left" style={logoStyle}>
                    {/* <img className="squat" src="./assets/squats.png" alt="squat"></img> */}
                </div>
                <div className="right">
                    <h3 className="title">Gym Tracking App</h3>
                    <div className="subtitle">Snaplifts make it easier to track your gym workouts</div>
                    <div className="buttons">
                        <button className="snapButton waves-effect waves-light btn-large " onClick={() => this.props.startWorkout("A")}>Workout A</button>
                        <button className="snapButton waves-effect waves-light btn-large " onClick={() => this.props.startWorkout("B")}>Workout B</button>
                        <button className="snapButton waves-effect waves-light btn-large " onClick={() => this.props.startWorkout("C")}>Workout C</button>
                    </div>
                </div>

            </div >
        )
    }
}
export default Start;
