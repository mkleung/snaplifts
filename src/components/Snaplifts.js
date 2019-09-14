import React from "react";
import Head from "./head";
import Workouts from "./workouts";
import Calendar from "./calendar";
import Dashboard from "./dashboard";
import Start from "./start"

import "./snaplifts.scss";

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
class Snaplifts extends React.Component {
  constructor(props) {
    super(props);

    this.init =
      [
        { key: 1, workout: "A", title: "Squats", sets: [false, false, false, false, false] },
        { key: 2, workout: "A", title: "Shoulder Press", sets: [false, false, false, false, false] },
        { key: 3, workout: "A", title: "Biceps", sets: [false, false, false, false, false] },
        { key: 4, workout: "B", title: "Bench Press", sets: [false, false, false, false, false] },
        { key: 5, workout: "B", title: "Barbell Row", sets: [false, false, false, false, false] },
        { key: 6, workout: "B", title: "Triceps", sets: [false, false, false, false, false] },
        { key: 7, workout: "C", title: "Squats", sets: [false, false, false, false, false] },
        { key: 8, workout: "C", title: "Deadlifts", sets: [false, false, false, false, false] },
        { key: 9, workout: "C", title: "Abs", sets: [false, false, false, false, false] }
      ];

    this.state = {
      user: 'mike',
      count: 9,
      activeTab: "start",
      currentWorkout: 'A',
      workouts: this.init,
      history: []
    };

  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('snaplifts');
      const history = JSON.parse(json);
      if (history) {
        this.setState(
          {
            history: history
          }
        );
      }
    } catch (e) {
    }
  }

  /* HEAD */
  handleWorkoutChange(event) {
    this.setState({ currentWorkout: event.value });
  }

  selectTab = (tab) => {
    this.setState({
      activeTab: tab,
    })
  }

  /*
  START */
  startWorkout = (selectedWorkout) => {
    console.log(selectedWorkout)
    this.setState({
      activeTab: "workout",
      currentWorkout: selectedWorkout
    })
  }

  /*
  WORKOUT FUNCTIONS
  */
  workoutToggle = (id, column) => {
    let workouts = this.state.workouts;
    for (let i = 0; i < workouts.length; i++) {
      let workout = workouts[i];
      if (workout.key === id) {
        let sets = workout.sets;
        sets[column] = !sets[column];
      }
    }
    this.setState({
      workouts: workouts
    })
  }


  workoutFinish = () => {

    // CALCULATE REP COMPLETE
    let workouts = this.state.workouts;
    let repComplete = 0;
    let totalReps = 0;
    let currentWorkouts = this.state.workouts.filter(item => item.workout === this.state.currentWorkout);
    currentWorkouts.map((item) => {
      let sets = item.sets;
      sets.map(rep => {
        if (rep) {
          repComplete++;
        }
        totalReps++;
      })
    });
    let result = repComplete / totalReps;

    // HISTORY
    let history = this.state.history;
    let current_datetime = new Date()
    let formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear()
    history.push({ user: "mike", date: formatted_date, result: result })
    const json = JSON.stringify(this.state.history);
    localStorage.setItem('snaplifts', json);

    // CLEAR
    for (const workout of workouts) {
      let sets = workout.sets;
      workout.sets = [false, false, false, false, false];
    }
    this.setState({
      workouts: workouts
    })
  }

  /*
  DASHBOARD FUNCTIONS
  */
  deleteItem = (key) => {
    var filteredWorkouts = this.state.workouts.filter(function (item) {
      return item.key !== key;
    });
    this.setState({
      workouts: filteredWorkouts
    });
  }

  dashboardAdd(addWorkoutInput, addWorkoutSelect) {
    let workouts = this.state.workouts;
    let lastItem = workouts[workouts.length - 1];
    let workout = { key: lastItem.key + 1, workout: addWorkoutSelect, title: addWorkoutInput, sets: [false, false, false, false, false] }
    workouts.push(workout);
    this.setState({
      workouts: workouts
    })

  }

  render() {
    const currentDate = `${
      monthNames[new Date().getMonth()]
      } ${new Date().getDate()}, ${new Date().getFullYear()} `;
    return (
      <React.Fragment>
        <Head
          selectTab={this.selectTab.bind(this)}
          handleWorkoutChange={this.handleWorkoutChange.bind(this)}
          activeTab={this.state.activeTab}
          currentWorkout={this.state.currentWorkout} />
        <div className="currentDate">{currentDate}</div>
        <div className="container">
          {this.state.activeTab === "start" &&
            <Start startWorkout={this.startWorkout} />
          }
          {this.state.activeTab === "workout" &&
            <Workouts
              workouts={this.state.workouts}
              currentWorkout={this.state.currentWorkout}
              workoutToggle={this.workoutToggle.bind(this)}
              workoutFinish={this.workoutFinish.bind(this)} />
          }
          {this.state.activeTab === "dashboard" &&
            <Dashboard
              workouts={this.state.workouts}
              deleteItem={this.deleteItem}
              currentWorkout={this.state.currentWorkout}
              dashboardAdd={this.dashboardAdd.bind(this)}
            />
          }
          {this.state.activeTab === "calendar" &&
            <Calendar history={this.state.history} />
          }
        </div>

      </React.Fragment>
    );
  }
}
export default Snaplifts;