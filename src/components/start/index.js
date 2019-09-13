import "./start.scss"

import React from 'react'
class Start extends React.Component {
    render() {
        return (
            <div className="content start">
                <h1>Start Workout</h1>
                <div className="buttons">
                    <button onClick={() => this.props.startWorkout("A")}>Workout A</button>
                    <button onClick={() => this.props.startWorkout("B")}>Workout B</button>
                    <button onClick={() => this.props.startWorkout("C")}>Workout C</button>
                </div>
                <br /><br />
                <button onClick={() => { localStorage.clear(); }}>Clear Local Storage</button>
            </div>
        )
    }
}
export default Start;
