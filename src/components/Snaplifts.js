import React from "react";
import Head from "./head";
import Workouts from "./workouts";
import Calendar from "./calendar";
import Dashboard from "./dashboard";

import "./snaplifts.scss";

const init = {
  user: 'mike',
  additem: '',
  selectAddValue: 'A',
  count: 9,
  activeTab: "workout",
  currentWorkout: 'A',
  workouts:
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
    ],
};

class Snaplifts extends React.Component {
  constructor(props) {
    super(props);

    this.state = init;
    this.handleWorkoutChange = this.handleWorkoutChange.bind(this);
    this.changeAdd = this.changeAdd.bind(this);
    this.submitAdd = this.submitAdd.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.selectAddChange = this.selectAddChange.bind(this);
  }



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

  setActiveTab(event) {
    this.setState({
      activeTab: event.target.value
    })
  }

  handleWorkoutChange(event) {
    this.setState({ currentWorkout: event.value });
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

  finish = (data) => {

    const workouts = data;
    console.log(workouts);

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
            finish={this.finish}
            currentWorkout={this.state.currentWorkout} />
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
          <Calendar />
        }
      </div>

    );
  }
}
export default Snaplifts;
