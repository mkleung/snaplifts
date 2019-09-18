import "./start.scss"

import React from 'react'
class Start extends React.Component {
    render() {
        return (
            <div className="start">
                <div className="left">
                    <img className="squat" src="./assets/squats.png" alt="squat"></img>
                </div>
                <div className="right">
                    <h3 className="title">Workout Tracker</h3>
                    <div className="buttons">
                        <button className="snapButton waves-effect waves-light btn-large " onClick={() => this.props.startWorkout("A")}>Workout A</button>
                        <button className="snapButton waves-effect waves-light btn-large " onClick={() => this.props.startWorkout("B")}>Workout B</button>
                        <button className="snapButton waves-effect waves-light btn-large " onClick={() => this.props.startWorkout("C")}>Workout C</button>

                    </div>
                </div>

            </div>
        )
    }
}
export default Start;
