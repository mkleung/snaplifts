import React from 'react'
import "./dashboard.scss"
import Listitem from "./listitems"

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
        if (addWorkoutInput !== "") {
            this.props.handleSubmitButton(addWorkoutInput, "A");
            this.refs.addWorkoutInput.value = "";
        }
    }

    render() {

        let displayClass = this.state.displayAdd ? "addList addList-active" : "addList";
        let displayAddButton = this.state.displayAdd ? <i className="material-icons">remove</i> : <i className="material-icons">add</i>;
        const listA = this.props.workouts.filter(item => {
            return item.workout === "A"
        })

        const listItemsA = listA.map((item, index) => {
            return (
                <div className="items" key={index}>
                    <div className="title">
                        <div className="icon"><i className="material-icons">fitness_center</i></div>
                        <div>{item.key} - {item.title}</div>
                    </div>
                    <div className="control">
                        <button className="deleteButton" onClick={() => this.props.deleteItem(item.key)}>
                            <i className="material-icons">delete</i>
                        </button>
                    </div >
                </div >
            )
        })
        return (
            <div className="dashboard" >

                <Listitem />


                <div className="itemList">
                    <h4>Workout A</h4>
                    {listItemsA}
                </div>
                <div className="addNew">
                    <div className={displayClass}>
                        <input className="add__input" type="text" ref="addWorkoutInput" placeholder="Add new workout" />
                        <button type="button" className="add__button" onClick={this.handleAddWorkout.bind(this)}>Insert</button>
                    </div>
                    <button className="addToggle" onClick={this.toggleAdd.bind(this)}>
                        {displayAddButton}
                    </button>
                </div>


            </div>
        )
    }
}
export default Dashboard;
