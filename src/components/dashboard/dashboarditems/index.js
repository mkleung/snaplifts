import React from 'react';

class DashboardItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            displayAdd: false
        })
    }

    handleAddWorkout(event) {
        event.preventDefault();
        const addWorkoutInput = this.refs.addWorkoutInput.value;
        if (addWorkoutInput !== "") {
            this.props.dashboardAdd(addWorkoutInput, "A");
            this.refs.addWorkoutInput.value = "";
        }
    }

    toggleAdd() {
        this.setState(prevState => ({
            displayAdd: !prevState.displayAdd
        }));
    }
    render() {
        let displayClass = this.state.displayAdd ? "addList addList-active" : "addList";
        let displayAddButton = this.state.displayAdd ? <i className="material-icons">remove</i> : <i className="material-icons">add</i>;

        const listItem = this.props.workouts.map((item, index) => {
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
            <React.Fragment>
                <div className="itemList">
                    <h4>Workout {this.props.workoutTitle}</h4>
                    {listItem}
                </div>
                <div className="addNew">
                    <div className={displayClass}>
                        <input className="add__input" type="text" ref="addWorkoutInput" placeholder="Add new workout" />
                        <button type="button" className="add__button" onClick={this.handleAddWorkout.bind(this)}>Insert</button>
                    </div>
                    <button className="addToggle" onClick={() => this.toggleAdd()}>
                        {displayAddButton}
                    </button>
                </div>
            </React.Fragment>
        )
    }
}
export default DashboardItems;