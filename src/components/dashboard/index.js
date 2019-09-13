import React from 'react'
import "./dashboard.scss"

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            displayAdd: false
        })

    }

    toggleAdd() {
        this.setState(prevState => ({
            displayAdd: !prevState.displayAdd
        }));
    }

    handleAddWorkout(event) {
        event.preventDefault();
        const addWorkoutInput = this.refs.addWorkoutInput.value;
        const addWorkoutSelect = this.refs.addWorkoutSelect.value;
        if (addWorkoutInput !== "") {
            this.props.handleSubmitButton(addWorkoutInput, addWorkoutSelect);
            this.refs.addWorkoutInput.value = "";
            this.refs.addWorkoutSelect.value = "A";
        }
    }

    render() {

        let displayClass = this.state.displayAdd ? "addList addList-active" : "addList";
        let displayAddButton = this.state.displayAdd ?
            <i className="material-icons">remove</i> : <i className="material-icons">add</i>;

        const listWorkouts = this.props.workouts.map((item, index) => {
            return (
                <div className="items" key={index}>
                    <div className="title">
                        <i className="material-icons">fitness_center</i>  {item.key} - {item.title}  (Workout {item.workout})
                    </div>
                    <div className="control">
                        <button className="deleteButton" onClick={() => this.props.deleteItem(item.key)}>DELETE</button>
                    </div >
                </div >
            )
        })
        return (
            <div className="dashboard content" >
                <div className="addNew">
                    <button className="addToggle" onClick={this.toggleAdd.bind(this)}>
                        {displayAddButton}
                    </button>
                </div>


                <div className={displayClass}>
                    <input className="add__input" type="text" ref="addWorkoutInput" placeholder="Add new workout" />
                    <select className="add__select" required ref="addWorkoutSelect">
                        <option value="A">Workout A</option>
                        <option value="B">Workout B</option>
                        <option value="C">Workout C</option>
                    </select>
                    <button type="button" className="add__button" onClick={this.handleAddWorkout.bind(this)} >
                        Insert
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
