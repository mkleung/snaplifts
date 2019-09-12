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
  workouts: {
    "A": [
      { key: 1, title: "Squats", content: [] },
      { key: 2, title: "Shoulder Press", content: [] },
      { key: 3, title: "Biceps", content: [] },
    ],
    "B": [
      { key: 4, title: "Bench Press", content: [] },
      { key: 5, title: "Barbell Row", content: [] },
      { key: 6, title: "Triceps", content: [] },
    ],
    "C": [
      { key: 7, title: "Squats", workout: "C", content: [] },
      { key: 8, title: "Deadlifts", workout: "C", content: [] },
      { key: 9, title: "Abs", workout: "C", content: [] }
    ]
  },
  items: [
    { key: 1, title: "Squats", workout: "A", content: [] },
    { key: 2, title: "Shoulder Press", workout: "A", content: [] },
    { key: 3, title: "Biceps", workout: "A", content: [] },

    { key: 4, title: "Bench Press", workout: "B", content: [] },
    { key: 5, title: "Barbell Row", workout: "B", content: [] },
    { key: 6, title: "Triceps", workout: "B", content: [] },

    { key: 7, title: "Squats", workout: "C", content: [] },
    { key: 8, title: "Deadlifts", workout: "C", content: [] },
    { key: 9, title: "Abs", workout: "C", content: [] },
  ]
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



  componentWillMount() {


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
            items={this.state.items}
            finish={this.finish}
            currentWorkout={this.state.currentWorkout} />
        }

        {this.state.activeTab === "dashboard" &&
          <Dashboard
            items={this.state.items}
            submitAdd={this.submitAdd}
            changeAdd={this.changeAdd}
            value={this.state.value}
            deleteItem={this.deleteItem}
            selectAddValue={this.state.selectAddValue}
            selectAddChange={this.selectAddChange}
            currentWorkout={this.state.currentWorkout}
          />
        }

        {this.state.activeTab === "calendar" &&
          <Calendar />
        }
      </div>

    );
  }
}
export default Snaplifts;
