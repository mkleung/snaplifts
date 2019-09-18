import React from "react";
import Head from "./head";
import Workouts from "./workouts";
import Dashboard from "./dashboard";
import Start from "./start"
import Profile from "./profile"
import "./snaplifts.scss";

class Snaplifts extends React.Component {
  constructor(props) {
    super(props);

    this.sets = [
      { completed: false, weight: 100 },
      { completed: false, weight: 100 },
      { completed: false, weight: 100 },
      { completed: false, weight: 100 },
      { completed: false, weight: 100 }
    ];

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

      user: { name: "Mike", age: 30, height: 172, weights: [] },
      count: 9,
      activeTab: "start",
      currentWorkout: 'A',
      workouts: this.init,
      history: []
    };

  }



  componentDidMount() {
    try {
      const json_history = localStorage.getItem('snaplifts_history');
      const history = JSON.parse(json_history);

      const json_workouts = localStorage.getItem('snaplifts_workouts');
      const workouts = JSON.parse(json_workouts);

      if (history) { this.setState({ history: history }); }
      if (workouts) { this.setState({ workouts: workouts }); }

    } catch (e) {
    }


    try {
      const json_history = localStorage.getItem('snaplifts_user');
      const user = JSON.parse(json_history);
      if (user) {
        this.setState({
          user: user
        })
      }

    } catch (e) {
    }
  }

  /* HELPERS  */
  updateLocalStorage(local, state_data) {
    const json = JSON.stringify(state_data);
    localStorage.setItem(local, json);
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
        return null;
      })
      return null;
    });
    let result = repComplete / totalReps;

    // HISTORY
    let history = this.state.history;
    let current_datetime = new Date()
    history.push({ user: this.state.user, date: current_datetime.toLocaleDateString("en-US"), result: result })

    // CLEAR
    for (const workout of workouts) {
      workout.sets = [false, false, false, false, false];
    }
    this.setState({
      workouts: workouts,
      history: history
    })
    this.updateLocalStorage('snaplifts_history', this.state.history);
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

    this.updateLocalStorage('snaplifts_workouts', this.state.workouts);
  }


  /* PROFILE FUNCTIONS */
  addWeight = (weight) => {
    let user = this.state.user;
    let body_array = this.state.user.weights;

    let date = new Date();
    let currentDate = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
    body_array.push({ date: currentDate, weight: weight })
    user.weights = body_array;

    this.setState({
      user: user
    })
    this.updateLocalStorage("snaplifts_user", user);

    console.log(weight)
  }


  dashboardAdd(addWorkoutInput, addWorkoutSelect) {
    let workouts = this.state.workouts;
    let lastItem = workouts[workouts.length - 1];
    let workout = { key: lastItem.key + 1, workout: addWorkoutSelect, title: addWorkoutInput, sets: [false, false, false, false, false] }
    workouts.push(workout);
    this.setState({
      workouts: workouts
    })
    this.updateLocalStorage('snaplifts_workouts', this.state.workouts);
  }

  render() {
    return (
      <React.Fragment>
        <Head
          selectTab={this.selectTab.bind(this)}
          handleWorkoutChange={this.handleWorkoutChange.bind(this)}
          activeTab={this.state.activeTab}
          currentWorkout={this.state.currentWorkout} />
        {/* <div className="currentDate">{currentDate}</div> */}
        <div className="container">
          {this.state.activeTab === "start" &&
            <Start startWorkout={this.startWorkout} />
          }
          {this.state.activeTab === "workout" &&
            <Workouts
              workouts={this.state.workouts}
              currentWorkout={this.state.currentWorkout}
              workoutToggle={this.workoutToggle.bind(this)}
              workoutFinish={this.workoutFinish.bind(this)}
              selectTab={this.selectTab.bind(this)} />
          }
          {this.state.activeTab === "dashboard" &&
            <Dashboard
              workouts={this.state.workouts}
              deleteItem={this.deleteItem}
              currentWorkout={this.state.currentWorkout}
              dashboardAdd={this.dashboardAdd.bind(this)}
            />
          }

          {this.state.activeTab === "profile" &&
            <Profile
              user={this.state.user}
              addWeight={this.addWeight}
              history={this.state.history}
              activeTab={this.state.activeTab}
            />
          }
        </div>

      </React.Fragment>
    );
  }
}
export default Snaplifts;