import React from "react";
import Head from "./head";
import Workouts from "./workouts";
import Calendar from "./calendar";
import Dashboard from "./dashboard";

import "./snaplifts.scss";

class Snaplifts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      active: "workout",
      currentWorkout: 'A',
      items: [
        { key: 1, content: "Squats", workout: "A" },
        { key: 2, content: "Shoulder Press", workout: "A" },
        { key: 3, content: "Biceps", workout: "A" },

        { key: 4, content: "Bench Press", workout: "B" },
        { key: 5, content: "Barbell Row", workout: "B" },
        { key: 6, content: "Triceps", workout: "B" },

        { key: 7, content: "Squats", workout: "C" },
        { key: 8, content: "Deadlifts", workout: "C" },
        { key: 9, content: "Abs", workout: "C" },
      ]
    };
    this.handleWorkoutChange = this.handleWorkoutChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    var count = this.state.count + 1;

    var newItem = {
      key: count,
      content: this.state.value
    };

    if (this.state.value !== "") {
      this.setState(prevState => {
        return {
          value: "",
          count: count,
          items: prevState.items.concat(newItem)
        };
      });
    }
  }

  setActive(event) {
    this.setState({
      active: event.target.value
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
  render() {
    return (
      <div className="list">
        <Head setActive={this.setActive.bind(this)} handleWorkoutChange={this.handleWorkoutChange.bind(this)} currentWorkout={this.state.currentWorkout} />
        <div className="body">

          {this.state.active === "workout" &&
            <Workouts
              items={this.state.items}
              deleteItem={this.deleteItem}
              currentWorkout={this.state.currentWorkout} />
          }

          {this.state.active === "dashboard" &&
            <Dashboard
              items={this.state.items}
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              value={this.state.value} />
          }

          {this.state.active === "calendar" &&
            <Calendar />
          }


        </div>

      </div>
    );
  }
}
export default Snaplifts;
