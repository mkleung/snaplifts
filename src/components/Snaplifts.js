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
      additem: '',
      selectAddValue: 'A',
      count: 9,
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
      content: this.state.additem,
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

  editItem(item) {
    console.log(item);
  }

  render() {
    return (
      <div className="list">
        <Head
          setActive={this.setActive.bind(this)}
          handleWorkoutChange={this.handleWorkoutChange.bind(this)}
          active={this.state.active}
          currentWorkout={this.state.currentWorkout} />
        <div className="body">

          {this.state.active === "workout" &&
            <Workouts
              items={this.state.items}

              currentWorkout={this.state.currentWorkout} />
          }

          {this.state.active === "dashboard" &&
            <Dashboard
              items={this.state.items}
              submitAdd={this.submitAdd}
              changeAdd={this.changeAdd}
              value={this.state.value}
              editItem={this.editItem}
              deleteItem={this.deleteItem}
              selectAddValue={this.state.selectAddValue}
              selectAddChange={this.selectAddChange}
            />
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
