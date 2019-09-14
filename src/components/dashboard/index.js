import React from 'react'
import "./dashboard.scss"
import DashboardItem from "./dashboarditems"

class Dashboard extends React.Component {
    render() {
        const workoutsA = this.props.workouts.filter(item => { return item.workout === "A" })
        const workoutsB = this.props.workouts.filter(item => { return item.workout === "B" })
        const workoutsC = this.props.workouts.filter(item => { return item.workout === "C" })
        return (
            <div className="dashboard" >
                <DashboardItem dashboardAdd={this.props.dashboardAdd} deleteItem={this.props.deleteItem} workoutTitle="A" workouts={workoutsA} />
                <DashboardItem dashboardAdd={this.props.dashboardAdd} deleteItem={this.props.deleteItem} workoutTitle="B" workouts={workoutsB} />
                <DashboardItem dashboardAdd={this.props.dashboardAdd} deleteItem={this.props.deleteItem} workoutTitle="C" workouts={workoutsC} />
            </div>
        )
    }
}
export default Dashboard;
