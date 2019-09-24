import React from "react";
import "./workouts.scss";
import Rep from "./rep"
import UIfx from 'uifx'
import bellAudio from "./bell.mp3"


const bell = new UIfx(
  bellAudio,
  {
    volume: 0.4, // number between 0.0 ~ 1.0
    throttleMs: 100
  }
)


class Workouts extends React.Component {

  constructor(props) {
    super(props);

    this.state = ({
      workouts: this.props.workouts,
      timer: 6
    })
  }

  workoutToggle = (id, column) => {

    let modSets = this.state.workouts.sets;

    for (let i = 0; i < modSets.length; i++) {
      let modSet = modSets[i];
      if (modSet.key === id) {
        modSet.sets[column] = !modSet.sets[column]
      }
    }
    let modWorkout = this.state.workouts;
    modWorkout.sets = modSets;
    this.setState({
      workouts: modWorkout
    })

    this.startTimer();

  }

  startTimer = () => {
    let timer = this.state.timer;

    this.timerId = setInterval(() => {
      timer = timer - 1;
      if (timer === 0) {
        this.stop()
        bell.setVolume(0.5)
        bell.play()

      }
      this.setState({
        timer: timer
      });
    }, 1000);

  };

  stop = () => {
    clearInterval(this.timerId);
    this.setState({
      timer: 0
    });
  };

  render() {
    let sets = this.state.workouts.sets
    let currentWorkouts = sets.filter(item => item.workout === this.state.workouts.currentWorkout);
    const listItems = currentWorkouts.map((item, index) => {
      return (
        <div className="set" key={index}>
          <div className="set_heading">
            <div className="title">{item.title}</div>
            <div className="weight">100kg</div>
          </div>
          <div className="reps">
            <Rep index={index} item={item} repKey={`first-${index}`} repColumn={0} workoutToggle={this.workoutToggle} />
            <Rep index={index} item={item} repKey={`second-${index}`} repColumn={1} workoutToggle={this.workoutToggle} />
            <Rep index={index} item={item} repKey={`third-${index}`} repColumn={2} workoutToggle={this.workoutToggle} />
            <Rep index={index} item={item} repKey={`fourth-${index}`} repColumn={3} workoutToggle={this.workoutToggle} />
            <Rep index={index} item={item} repKey={`fifth-${index}`} repColumn={4} workoutToggle={this.workoutToggle} />
          </div>
        </div>
      )
    })
    return (
      <div className="workouts container">

        <div className="header">
          <h4>Workout {this.state.workouts.currentWorkout}</h4>
          <div className="timer">{this.state.timer}</div>
          <div className="change">
            <button className="snapButton waves-effect waves-light btn-small" onClick={() => this.props.selectTab("start")}>Change Workout</button>
          </div>
        </div>
        {listItems}
        <div className="finishButton">
          <button className="snapButton waves-effect waves-light btn-large" onClick={this.props.workoutFinish}>FINISH WORKOUT</button>
        </div>
      </div>
    );
  }
}
export default Workouts;
