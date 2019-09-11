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

    const selectedOption = { value: this.props.currentWorkout, label: `Workout ${this.props.currentWorkout}` };

    const date = new Date();
    const currentDate = `${
      monthNames[date.getMonth()]
      } ${date.getDate()}, ${date.getFullYear()}`;
    return (
      <div className="head">

        <div className="title">
          <h2 className="logo">Snaplifts</h2>
          <div className="subtitle">{currentDate}</div>
        </div>

        <div className="title">
          {this.props.active === "workout" &&
            <Select
              value={selectedOption}
              onChange={this.props.handleWorkoutChange}
              options={options}
            />
          }
        </div>



        <div onChange={this.props.setActive}>
          <input id="radioWorkout" type="radio" value="workout" defaultChecked name="control" />
          <label htmlFor="radioWorkout">
            Workout
          </label>

          <input id="radioDashboard" type="radio" value="dashboard" name="control" />
          <label htmlFor="radioDashboard">
            Dashboard
          </label>

          <input id="radioCalendar" type="radio" value="calendar" name="control" />
          <label htmlFor="radioCalendar">
            Calendar
          </label>
        </div>


      </div>
    );
  }
}
export default Head;
