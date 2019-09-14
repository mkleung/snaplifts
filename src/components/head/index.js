import React from "react";
import "./head.scss";
// import Select from 'react-select';


// const options = [
//   { value: 'A', label: 'Workout A' },
//   { value: 'B', label: 'Workout B' },
//   { value: 'C', label: 'Workout C' },
// ];



class Head extends React.Component {
  state = {
    selectedOption: null,
  };

  render() {



    // let activeTab = this.props.activeTab;
    // let hidden = activeTab === "start" ? "hidden" : "";
    // let workoutClass = activeTab === "workout" ? "active label" : `${hidden} label`;
    // let dashboardClass = activeTab === "dashboard" ? "active label" : "label";
    // let calendarClass = activeTab === "calendar" ? "active label" : "label";
    // const selectedOption = { value: this.props.currentWorkout, label: `Workout ${this.props.currentWorkout}` };
    return (
      <React.Fragment>
        <nav>
          <div className="nav-wrapper">
            <div className="brand-logo" onClick={() => this.props.selectTab("start")}>
              Snap <i className="material-icons">fitness_center</i> Lifts
          </div>

            {/* {this.props.activeTab === "workout" &&
            <Select
              value={selectedOption}
              onChange={this.props.handleWorkoutChange}
              options={options}
            />
          } */}

            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a onClick={() => this.props.selectTab("workout")}>Workout</a></li>
              <li><a onClick={() => this.props.selectTab("dashboard")}>Dashboard</a></li>
              <li><a onClick={() => this.props.selectTab("calendar")}>Calendar</a></li>
            </ul>
          </div>
        </nav>
      </React.Fragment>

    );
  }
}
export default Head;
