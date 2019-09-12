import React from "react";
import "./head.scss";
import Select from 'react-select';


const options = [
  { value: 'A', label: 'Workout A' },
  { value: 'B', label: 'Workout B' },
  { value: 'C', label: 'Workout C' },
];

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

class Head extends React.Component {
  state = {
    selectedOption: null,
  };

  render() {

    let activeTab = this.props.activeTab;
    let workoutClass = activeTab === "workout" ? "active label" : "label";
    let dashboardClass = activeTab === "dashboard" ? "active label" : "label";
    let calendarClass = activeTab === "calendar" ? "active label" : "label";

    const selectedOption = { value: this.props.currentWorkout, label: `Workout ${this.props.currentWorkout}` };

    const date = new Date();
    const currentDate = `${
      monthNames[date.getMonth()]
      } ${date.getDate()}, ${date.getFullYear()}`;
    return (
      <div className="head">
        <div className="title">
          <div className="subtitle">{currentDate}</div>
        </div>

        <div className="title">
          {/* {this.props.activeTab === "workout" &&
            <Select
              value={selectedOption}
              onChange={this.props.handleWorkoutChange}
              options={options}
            />
          } */}

          {/* {activeTab} */}
        </div>



        <div className="tabs" onChange={this.props.setActiveTab}>

          <div className={workoutClass} onClick={() => this.props.selectTab("workout")}>Workout</div>
          <div className={dashboardClass} onClick={() => this.props.selectTab("dashboard")}>Dashboard</div>
          <div className={calendarClass} onClick={() => this.props.selectTab("calendar")}>Calendar</div>

        </div>

      </div>
    );
  }
}
export default Head;
