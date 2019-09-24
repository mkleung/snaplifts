import React from "react";
import "./workouts.scss";
import Rep from "./rep"
import UIfx from 'uifx'
import bellAudio from "./bell.mp3"


const LIMIT = 10;

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
      timerCounter: LIMIT
    })
  }

  workoutToggle = (id, column) => {

    let modSets = this.state.workouts.sets;

    for (let i = 0; i < modSets.length; i++) {
      let modSet = modSets[i];
      if (modSet.key === id) {
        if (!modSet.sets[column]) {
          this.stopTimer();
          this.startTimer(LIMIT);
        }
        modSet.sets[column] = !modSet.sets[column]
      }
    }
    let modWorkout = this.state.workouts;
    modWorkout.sets = modSets;
    this.setState({
      workouts: modWorkout,

    })
  }

  startTimer = (time) => {
    let timerCounter = time;
    this.timerId = setInterval(() => {
      timerCounter = timerCounter - 1;
      if (timerCounter === 0) {
        this.stopTimer()
        bell.setVolume(1)
        bell.play()

        timerCounter = LIMIT

      }
      this.setState({
        timerCounter: timerCounter
      });
    }, 1000);

  };

  stopTimer = () => {
    clearInterval(this.timerId);

    this.setState({
      timerCounter: LIMIT
    });
  };



  workoutFinish = () => {

    // CALCULATE REP COMPLETE
    let workouts = this.state.workouts;
    let currentWorkout = workouts.currentWorkout;
    let repComplete = 0;
    let totalReps = 0;
    let currentWorkouts = workouts.sets.filter(item => item.workout === currentWorkout);

    currentWorkouts.map((item) => {
      let sets = item.sets;
      sets.map(rep => {
        if (rep) {
          repComplete++;
        }
        totalReps++;
        return null;
      })
      return null;
    });
    let result = repComplete / totalReps;

    // reset
    for (let i = 0; i < workouts.sets.length; i++) {
      let workout = workouts.sets[i]
      workout.sets = [false, false, false, false, false]
    }

    this.setState({
      workouts: workouts
    })

    this.stopTimer();

  }

  render() {

    let category = this.state.workouts.category.find(item => item.workout === this.state.workouts.currentWorkout);

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
          <h4>Workout {this.state.workouts.currentWorkout} - {category.title}</h4>
          <div className="timer">{this.state.timerCounter}
            <span className="timer-seconds">s</span>
          </div>
          <div className="change">
            <button className="snapButton waves-effect waves-light btn-small" onClick={() => this.props.selectTab("start")}>Change Workout</button>
          </div>
        </div>
        {listItems}
        <div className="finishButton">
          <button className="snapButton waves-effect waves-light btn-large" onClick={this.workoutFinish}>FINISH WORKOUT</button>
        </div>
      </div>
    );
  }
}
export default Workouts;
