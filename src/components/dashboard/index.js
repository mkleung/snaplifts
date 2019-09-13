import React from 'react'
import Add from "../add";
import "./dashboard.scss"


const options = [
    { value: 'A', label: 'Workout A' },
    { value: 'B', label: 'Workout B' },
    { value: 'C', label: 'Workout C' },
];

class Dashboard extends React.Component {


    handleSubmitButton(event) {
        event.preventDefault();

        // By giving the input the `ref` attribute, we can access it anywhere
        const textInputValue = this.refs.input.value;

        // Submit the value to the parent component
        this.props.handleSubmitButton(textInputValue);

        this.refs.input.value = "";
    }

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
            <div className="dashboard content" >
                <div className="addList">
                    <input type="text" ref="input" />

                    <button type="button" className="" onClick={this.handleSubmitButton.bind(this)} >
                        ADD
                    </button>
                </div>
                <div className="itemList">
                    {listWorkouts}
                </div>
            </div>
        )
    }
}
export default Dashboard;
