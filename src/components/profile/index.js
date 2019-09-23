import "./profile.scss"
import Calendar from "../calendar"

import React from 'react'
class Profile extends React.Component {
    logout = () => {
        this.props.history.push(`/login`);
        this.props.logoutUser();
    };

    // handleAddWeight(event) {
    //     event.preventDefault();
    //     const addWeight = this.refs.addWeight.value;
    //     if (addWeight !== "") {
    //         this.props.addWeight(addWeight);
    //         this.refs.addWeight.value = "";
    //     }
    // }

    render() {
        return (
            <React.Fragment>
                <div className="profile block">
                    <div className="container">
                        <div className="row">
                            <div className="center-align col s8">
                                <img src="https://via.placeholder.com/150/" alt="profile" />
                            </div>
                            <div className=" col s4">
                                <h3>{this.props.authenticatedUser.id}</h3>
                                <p>{this.props.authenticatedUser.name} years</p>
                            </div>

                            <div className="center-align col s12">
                                <button className="btn btn-primary snapButton" onClick={this.logout}>Logout</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 
                <div className="weight-container block">
                    <div className="container">
                        <div className="row">
                            <div className=" col s12">
                                <h4 className="center-align">Weight Tracker</h4>
                            </div>
                            <div className=" col s10">
                                <input type="number" className="weightInput" placeholder="Enter weight in lbs" ref="addWeight" />
                            </div>
                            <div className=" col s2">
                                <button onClick={this.handleAddWeight.bind(this)} className="snapButton waves-effect waves-light btn-large">Save</button>
                            </div>
                        </div>

                        <div className="row">
                            <p>Weight Chart</p>
                            <div className="weights">

                                {
                                    this.props.user.weights.length !== 0 &&
                                    this.props.user.weights.map((item, index) => {
                                        let myDate = item.date.split("T")[0];
                                        let percent = 100 * (item.weight / 500)
                                        var barStyle = {
                                            height: percent
                                        };

                                        return (
                                            <div key={index} className="weight">
                                                <div className="weightBar" style={barStyle}>{item.weight}lbs</div>
                                                <div className="date">{myDate}</div>
                                            </div>
                                        )
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block">
                    <Calendar history={this.props.history} />
                </div> */}
                <div className="reset block">
                    <div className="row">
                        <div className=" col s12 center-align">
                            <h4>Danger Zone</h4>
                            <button className="snapButton waves-effect waves-light btn-large" onClick={() => { localStorage.clear(); }}>Reset All Data</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Profile;
