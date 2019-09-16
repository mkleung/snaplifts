import React from "react";
import "./dates.scss";

class Dates extends React.Component {
    render() {
        let history = this.props.history;
        const currentDate = new Date();
        // return an array containing rows
        const days = returnDays(currentDate.getMonth(), currentDate.getFullYear());
        // display on screen
        const displayDays = days.map((day, index) => {
            return (
                <div key={index} className="row">
                    {day}
                </div>
            );
        });

        function returnDays(month, year) {
            // an array containing arrays
            let days = [];
            var firstOfMonth = new Date(year, month, 1);
            var lastOfMonth = new Date(year, month + 1, 0);
            var used = firstOfMonth.getDay() + lastOfMonth.getDate();
            let weeksNum = Math.ceil(used / 7);
            for (let i = 0; i < weeksNum; i++) {
                days.push([]);
            }

            // insert empty days
            var emptyDays = new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                1
            ).getDay();
            for (let i = 0; i < emptyDays; i++) {
                days[0].push(<div key={"empty" + i} className="date" />);
            }

            // get all dates
            var c = 0;
            for (var i = firstOfMonth; i <= lastOfMonth; i.setDate(i.getDate() + 1)) {
                let myDay = new Date(i);

                let colorClass = "";
                history.map((item) => {
                    if (item.date === myDay.toLocaleDateString("en-US")) {
                        let result = item.result;

                        switch (true) {
                            case (result < .1):
                                colorClass = "";
                                break;
                            case (result < .2):
                                colorClass = "lighterColor";
                                break;
                            case (result < .4):
                                colorClass = "lightColor";
                                break;
                            case (result < .6):
                                colorClass = "color";
                                break;
                            case (result < .8):
                                colorClass = "dakrColor";
                                break;
                            case (result < 1.1):
                                colorClass = "darkerColor";
                                break;
                            default:
                                break;
                        }
                    }
                    return null;
                })
                days[c].push(
                    <div className="square" key={i}>
                        <div
                            className={colorClass + " date " + (myDay.getDate() === new Date().getDate() ? "current" : "")}>
                            {myDay.getDate()}
                        </div>
                    </div>
                );
                if (Object.keys(days[c]).length === 7) {
                    c = c + 1;
                }
            }
            return days;
        }
        return <div className="weekdays">{displayDays}</div>;
    }
}
export default Dates;
