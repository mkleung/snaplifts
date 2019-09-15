import React from "react";
import "./head.scss";

class Head extends React.Component {
  state = {
    selectedOption: null,
  };

  render() {



    let activeTab = this.props.activeTab;
    let activeWorkout = activeTab === "workout" ? "active" : "";
    let activeDashboard = activeTab === "dashboard" ? "active" : "";
    let activeCalendar = activeTab === "calendar" ? "active" : "";

    return (
      <React.Fragment>
        <nav>
          <div className="nav-wrapper">
            <div className="brand-logo" onClick={() => this.props.selectTab("start")}>
              Snap <i className="material-icons">fitness_center</i> Lifts
          </div>

            <ul id="nav-mobile" className="right hide-on-med-and-down">
              {activeTab !== "start" &&
                <li><a className={activeWorkout} onClick={() => this.props.selectTab("workout")}>Workout</a></li>
              }

              <li><a className={activeDashboard} onClick={() => this.props.selectTab("dashboard")}>Dashboard</a></li>
              <li><a className={activeCalendar} onClick={() => this.props.selectTab("calendar")}>Calendar</a></li>
            </ul>
          </div>
        </nav>
      </React.Fragment>

    );
  }
}
export default Head;
