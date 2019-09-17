import "./profile.scss"

import React from 'react'
class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({
            weight: 0
        })
    }

    handleAddWeight(event) {
        event.preventDefault();
        const addWeight = this.refs.addWeight.value;

        if (addWeight !== "") {
            this.props.addWeight(addWeight);
            this.refs.addWeight.value = "";
        }
    }



    render() {
        return (
            <div className="profile">
                <img src="https://via.placeholder.com/150/" alt="profile" />
                <h3>Profile </h3>

                <div className="container">

                    <div className="row">
                        <div className=" col s10">
                            <input type="number" className="weightInput" placeholder="Enter weight in lbs" ref="addWeight" />
                        </div>
                        <div className=" col s2">
                            <button onClick={this.handleAddWeight.bind(this)} className="waves-effect waves-light btn-large">Save</button>
                        </div>
                    </div>

                    <div className="row">
                        <div className=" col s12 center-align">
                            <button className="waves-effect waves-light btn-large" onClick={() => { localStorage.clear(); }}>Reset All Data</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Profile;
