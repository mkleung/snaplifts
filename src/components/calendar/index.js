import React from 'react'
import "./calendar.scss"
import Weekdaylabels from "./labels";
import Dates from "./dates";


class Calendar extends React.Component {
    render() {
        const date = new Date();
        const month = date.toLocaleString("default", { month: "long" });
        const year = date.getFullYear();
        return (
            <div className="calendar">
                <div className="month">
                    <div className="title">
                        <h3>Workout Statistics</h3>
                        <span className="month">{month}</span>{" "}
                        <span className="year">{year}</span>
                    </div>
                    <Weekdaylabels />
                    <Dates history={this.props.history} />
                </div>
            </div>
        )
    }
}
export default Calendar;
