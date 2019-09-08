import React from "react";
import Head from "./head";
import Workouts from "./workouts";

import Dashboard from "./dashboard";

import "./snaplifts.scss";

class Snaplifts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      count: 1,
      currentWorkout: 'A',
      items: [
        { key: 1, content: "Squats", workout: "A" },
        { key: 2, content: "Barbell Row", workout: "A" },
        { key: 3, content: "Deadlift", workout: "B" },
        { key: 4, content: "Shoulder Press", workout: "B" },
        { key: 5, content: "Bench Press", workout: "C" },
        { key: 6, content: "Arms", workout: "C" }
      ]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
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
        <Head currentWorkout={this.state.currentWorkout} />
        <div className="body">

          <Workouts
            items={this.state.items}
            deleteItem={this.deleteItem} />
          <Dashboard
            items={this.state.items}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            value={this.state.value} />

        </div>

      </div>
    );
  }
}
export default Snaplifts;
