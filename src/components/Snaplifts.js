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

    );
  }
}
export default Snaplifts;
