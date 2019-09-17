import "./profile.scss"

import React from 'react'
class Profile extends React.Component {
    render() {
        return (
            <div className="profile">
                <img src="https://via.placeholder.com/150/" alt="profile" />
                <h3>Profile </h3>

                <div>
                    <h4>Body Weight</h4>
                    <div className="row">
                        <div className="input-field col s6">
                            <i className="material-icons prefix">accessibility</i>
                            <input type="text" id="autocomplete-input" className="autocomplete" />
                            <label htmlFor="autocomplete-input">Weight in lbs</label>

                        </div>
                        <div className=" col s6">
                            <button className="waves-effect waves-light btn-large">Save</button>
                        </div>
                    </div>


                    <button className="waves-effect waves-light btn-large btn-flat" onClick={() => { localStorage.clear(); }}>Clear Cookies</button>

                </div>


            </div>
        )
    }
}
export default Profile;
