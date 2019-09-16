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
                        <button className="waves-effect waves-light btn-large " onClick={() => this.props.startWorkout("A")}>Workout A</button>
                        <button className="waves-effect waves-light btn-large " onClick={() => this.props.startWorkout("B")}>Workout B</button>
                        <button className="waves-effect waves-light btn-large " onClick={() => this.props.startWorkout("C")}>Workout C</button>
                        <button className="waves-effect waves-light btn-large btn-flat" onClick={() => { localStorage.clear(); }}>Clear Cookies</button>
                    </div>
                </div>

            </div>
        )
    }
}
export default Start;
