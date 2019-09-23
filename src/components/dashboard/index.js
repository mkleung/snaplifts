import React from 'react'
import "./dashboard.scss"
import DashboardItem from "./dashboarditems"

class Dashboard extends React.Component {

    constructor(props) {
        super(props);

        this.state = ({
            workouts: null
        })
    }

    componentDidMount() {
        this.setState({
            workouts: this.props.workouts
        })
    }

    dashboardAdd = (addWorkoutInput, addWorkoutSelect) => {
        let workouts = this.state.workouts;
        let lastItem = workouts.sets[workouts.sets.length - 1];
        let new_workout = { key: lastItem.key + 1, workout: addWorkoutSelect, title: addWorkoutInput, sets: [false, false, false, false, false] }

        workouts.sets.push(new_workout);
        this.setState({
            workouts: workouts
        })

        this.props.updateWorkout(this.state.workouts);
    }

    deleteItem = (key) => {
        var filteredSets = this.state.workouts.sets.filter((item) => {
            return item.key !== key;
        });
        let newWorkouts = this.state.workouts;
        newWorkouts.sets = filteredSets;
        this.setState({
            workouts: newWorkouts
        });

    }

    render() {

        const workoutsA = this.props.workouts.sets.filter(item => { return item.workout === "A" })
        const workoutsB = this.props.workouts.sets.filter(item => { return item.workout === "B" })
        const workoutsC = this.props.workouts.sets.filter(item => { return item.workout === "C" })

        const titleA = "A - " + this.props.workouts.category.find(item => { return item.workout === "A" }).title;
        const titleB = "B - " + this.props.workouts.category.find(item => { return item.workout === "B" }).title;
        const titleC = "C - " + this.props.workouts.category.find(item => { return item.workout === "C" }).title;

        return (
            <div className="dashboard container" >
                <DashboardItem dashboardAdd={this.dashboardAdd} deleteItem={this.deleteItem} workoutTitle={titleA} workouts={workoutsA} />
                <DashboardItem dashboardAdd={this.dashboardAdd} deleteItem={this.deleteItem} workoutTitle={titleB} workouts={workoutsB} />
                <DashboardItem dashboardAdd={this.dashboardAdd} deleteItem={this.deleteItem} workoutTitle={titleC} workouts={workoutsC} />
            </div>
        )
    }
}
export default Dashboard;
