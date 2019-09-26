import React from "react";
import "./workouts.scss";
import Rep from "./rep"
import UIfx from 'uifx'
import bellAudio from "./bell.mp3"
import { Link } from "react-router-dom";

const LIMIT = 60;

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

    let category = this.props.workouts.category.find(item => item.workout === this.props.workouts.currentWorkout);

    let sets = this.props.workouts.sets
    let currentWorkouts = sets.filter(item => item.workout === this.props.workouts.currentWorkout);
    const listItems = currentWorkouts.map((item, index) => {
      return (
        <div className="set" key={index}>
          <div className="set_heading">
            <div className="title">{item.title} </div>
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
          <div className="timer">

            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.694 9.64137C18.694 14.7081 14.5819 18.8202 9.51523 18.8202C4.44853 18.8202 0.336426 14.7081 0.336426 9.64137C0.336426 4.57468 4.44853 0.462585 9.51523 0.462585C14.5819 0.462585 18.694 4.57468 18.694 9.64137Z" stroke="#2ecc71" strokeWidth="2" />
              <path d="M9.60458 9.90921L5.63135 5.89136" stroke="#2ecc71" />
              <path d="M15.2182 4.10455L9.28662 10.1715" stroke="#2ecc71" strokeWidth="2" />
            </svg> {this.state.timerCounter}
            <span className="timer-seconds">s</span>
          </div>
          <div className="change">
            <Link className="snapButton waves-effect waves-light" to="/">Change Workout</Link>
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
