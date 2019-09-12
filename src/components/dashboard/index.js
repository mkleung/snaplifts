import React from 'react'
import Add from "../add";
import "./dashboard.scss"

class Dashboard extends React.Component {
    render() {
        const listWorkouts = this.props.workouts.map((item, index) => {
            return (
                <div className="items" key={index}>
                    <div className="title">
                        {item.key} - {item.title}  (Workout {item.workout})
                    </div>
                    <div className="control">
                        <button className="deleteButton" onClick={() => this.props.deleteItem(item.key)}>DELETE</button>
                    </div >
                </div >
            )
        })
        return (
            <div className="dashboard" >

                {listWorkouts}
                <hr />
                <Add changeAdd={this.props.changeAdd}
                    submitAdd={this.props.submitAdd}
                    value={this.props.value}
                    selectAddValue={this.props.selectAddValue}
                    selectAddChange={this.props.selectAddChange} />
            </div>
        )
    }
}
export default Dashboard;
