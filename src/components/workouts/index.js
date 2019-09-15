import React from "react";
import "./workouts.scss";
import Rep from "./rep"
class Workouts extends React.Component {
  render() {
    let currentWorkouts = this.props.workouts.filter(item => item.workout === this.props.currentWorkout);
    const listItems = currentWorkouts.map((item, index) => {
      return (
        <div className="set" key={index}>
          <div className="title">
            {item.key} - {item.title}
          </div>
          <div className="reps">
            <Rep index={index} item={item} repKey={`first-${index}`} repColumn={0} workoutToggle={this.props.workoutToggle} />
            <Rep index={index} item={item} repKey={`second-${index}`} repColumn={1} workoutToggle={this.props.workoutToggle} />
            <Rep index={index} item={item} repKey={`third-${index}`} repColumn={2} workoutToggle={this.props.workoutToggle} />
            <Rep index={index} item={item} repKey={`fourth-${index}`} repColumn={3} workoutToggle={this.props.workoutToggle} />
            <Rep index={index} item={item} repKey={`fifth-${index}`} repColumn={4} workoutToggle={this.props.workoutToggle} />
          </div>
        </div>
      )
    })
    return (
      <div className="workouts">
        <div className="header">
          <h4>Workout {this.props.currentWorkout}</h4>
          <div className="change">
            <a onClick={() => this.props.selectTab("start")}>Change Workout</a>
          </div>
        </div>
        {listItems}
        <div className="finishButton">
          <button className="waves-effect waves-light btn-large red" onClick={this.props.workoutFinish}>FINISH</button>
        </div>
      </div>
    );
  }
}
export default Workouts;
