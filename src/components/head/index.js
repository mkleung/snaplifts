import React from "react";
import "./head.scss";

class Head extends React.Component {
  state = {
    selectedOption: null,
  };

  render() {
    let activeTab = this.props.activeTab;
    let activeWorkout = activeTab === "workout" ? "nav-link active" : "nav-link";
    let activeDashboard = activeTab === "dashboard" ? "nav-link active" : "nav-link";
    let activeProfile = activeTab === "profile" ? "nav-link active" : "nav-link";

    return (
      <React.Fragment>
        <nav>
          <div className="nav-wrapper">
            <div className="brand-logo" onClick={() => this.props.selectTab("start")}>
              <i className="material-icons">fitness_center</i> SnapLifts
          </div>

            <ul id="nav-mobile" className="right hide-on-med-and-down">
              {activeTab !== "start" &&
                <li><button className={activeWorkout} onClick={() => this.props.selectTab("workout")}>Workout</button></li>
              }
              <li><button className={activeDashboard} onClick={() => this.props.selectTab("dashboard")}>Dashboard</button></li>
              <li><button className={activeProfile} onClick={() => this.props.selectTab("profile")}>Profile</button></li>
            </ul>
          </div>
        </nav>
      </React.Fragment>

    );
  }
}
export default Head;
