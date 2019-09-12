import React from 'react'
import "./calendar.scss"


class Calendar extends React.Component {
    render() {

        return (
            <div className="calendar">
                <h1>Calendar</h1>
                <div className="history">
                    {this.props.history.map((item, index) => {
                        let result = item.result;
                        let colorClass = "day"
                        switch (true) {
                            case (result < .1):
                                colorClass = "day ";
                                break;
                            case (result < .2):
                                colorClass = "day lighterRed";
                                break;
                            case (result < .4):
                                colorClass = "day lightRed";
                                break;
                            case (result < .6):
                                colorClass = "day red";
                                break;
                            case (result < .8):
                                colorClass = "day darkRed";
                                break;
                            case (result < 1.1):
                                colorClass = "day darkerRed";
                                break;
                            default:
                                break;
                        }
                        return (
                            <div className={colorClass} key={index}>
                                <div className="tooltip">
                                    {item.date}
                                </div>
                            </div>

                        )
                    })
                    }
                </div>

                {/* <div className="history">
                    {this.props.history.map((item, index) => {
                        let result = item.result;
                        let colorClass = "day"
                        switch (true) {
                            case (result < .1):
                                colorClass = "day ";
                                break;
                            case (result < .2):
                                colorClass = "day lighterRed";
                                break;
                            case (result < .4):
                                colorClass = "day lightRed";
                                break;
                            case (result < .6):
                                colorClass = "day red";
                                break;
                            case (result < .8):
                                colorClass = "day darkRed";
                                break;
                            case (result < 1.1):
                                colorClass = "day darkerRed";
                                break;
                            default:
                                break;
                        }
                        let date = (item.date.getMonth() + 1) + '/' + item.date.getDate() + '/' + item.date.getFullYear()
                        return (
                            <div className={colorClass} key={index}>
                                <div className="tooltip">
                                    {date}
                                </div>
                            </div>

                        )

                    })}

                </div> */}

            </div>
        )
    }
}
export default Calendar;
