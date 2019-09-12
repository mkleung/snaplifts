import "./start.scss"

import React from 'react'
class Start extends React.Component {
    render() {
        return (
            <div className="content start">
                <h1>Start Workout</h1>
                <div className="buttons">
                    <button onClick={this.props.startWorkout}>Workout A</button>
                    <button onClick={this.props.startWorkout}>Workout B</button>
                    <button onClick={this.props.startWorkout}>Workout C</button>
                </div>

            </div>
        )
    }
}
export default Start;
