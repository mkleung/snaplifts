import React from "react";
import Head from "./head";
import Workouts from "./workouts";
import Calendar from "./calendar";
import Dashboard from "./dashboard";

import "./snaplifts.scss";


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
      additem: '',
      selectAddValue: 'A',
      count: 9,
      activeTab: "workout",
      currentWorkout: 'A',
      workouts: this.init,
      history: []
    };
    this.handleWorkoutChange = this.handleWorkoutChange.bind(this);
    this.changeAdd = this.changeAdd.bind(this);
    this.submitAdd = this.submitAdd.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.selectAddChange = this.selectAddChange.bind(this);
  }

  componentDidMount() {
    // let history = localStorage.getItem('snaplifts');
    // let parsedHistory = JSON.parse(history);
    // if (parsedHistory) {
    //   this.setState({ parsedHistory })
    // }
    // console.log(typeof history)


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

    console.log("finish");

    // CALCULATE REP COMPLETE
    let current = this.state.currentWorkout;
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

  changeAdd(event) {
    this.setState({ additem: event.target.value });
  }

  selectAddChange(event) {
    this.setState({
      selectAddValue: event.value
    })
  }


  submitAdd(event) {
    event.preventDefault();
    var count = this.state.count + 1;
    var newItem = {
      key: count,
      title: this.state.additem,
      workout: this.state.selectAddValue
    };
    if (this.state.additem !== "") {
      this.setState(prevState => {
        return {
          additem: "",
          count: count,
          items: prevState.items.concat(newItem)
        };
      });
    }
  }


  deleteItem(key) {
    var filteredItems = this.state.items.filter(function (item) {
      return item.key !== key;
    });

    this.setState({
      items: filteredItems,
      key: 0
    });
  }


  setActiveTab(event) {
    this.setState({
      activeTab: event.target.value
    })
  }

  handleWorkoutChange(event) {
    this.setState({ currentWorkout: event.value });
  }


  render() {
    return (
      <div className="list">
        <Head
          setActiveTab={this.setActiveTab.bind(this)}
          handleWorkoutChange={this.handleWorkoutChange.bind(this)}
          activeTab={this.state.activeTab}
          currentWorkout={this.state.currentWorkout} />


        {this.state.activeTab === "workout" &&
          <Workouts
            workouts={this.state.workouts}
            currentWorkout={this.state.currentWorkout}
            workoutToggle={this.workoutToggle.bind(this)}
            workoutFinish={this.workoutFinish.bind(this)} />
        }
        {/* 
        {this.state.activeTab === "dashboard" &&
          <Dashboard
            workouts={this.state.workouts}
            submitAdd={this.submitAdd}
            changeAdd={this.changeAdd}
            value={this.state.value}
            deleteItem={this.deleteItem}
            selectAddValue={this.state.selectAddValue}
            selectAddChange={this.selectAddChange}
            currentWorkout={this.state.currentWorkout}
          />
        } */}

        {this.state.activeTab === "calendar" &&
          <Calendar history={this.state.history} />
        }
      </div>

    );
  }
}
export default Snaplifts;
