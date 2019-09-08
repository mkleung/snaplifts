import React from "react";
import "./head.scss";

class Head extends React.Component {
  render() {
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
    const date = new Date();
    const currentDate = `${
      monthNames[date.getMonth()]
      } ${date.getDate()}, ${date.getFullYear()}`;
    return (
      <div className="head">
        <div className="title">
          <h3>Snaplifts</h3>
          <div>Workout: {this.props.currentWorkout}</div>
          <div className="subtitle">{currentDate}</div>
        </div>



        <input id="dashboard" type="radio" name="lifts" checked />
        <input id="lifts" type="radio" name="lifts" />

        <label className="labelDashboard" for="dashboard"><i className="material-icons">directions_run</i></label>
        <label className="labelSetting" for="lifts"><i className="material-icons">settings_applications</i></label>

      </div>
    );
  }
}
export default Head;
