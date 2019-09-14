import "./start.scss"

import React from 'react'
class Start extends React.Component {
    render() {
        return (
            <div className="start">
                <h3>Workout Tracker</h3>
                <div className="buttons">
                    <button className="waves-effect waves-light btn-large red" onClick={() => this.props.startWorkout("A")}>Workout A</button>
                    <button className="waves-effect waves-light btn-large red" onClick={() => this.props.startWorkout("B")}>Workout B</button>
                    <button className="waves-effect waves-light btn-large red" onClick={() => this.props.startWorkout("C")}>Workout C</button>
                    <button className="waves-effect waves-light btn-large btn-flat" onClick={() => { localStorage.clear(); }}>Clear</button>
                </div>
            </div>
        )
    }
}
export default Start;
