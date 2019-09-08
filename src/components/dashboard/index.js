import React from 'react'
import Add from "../add";
import "./dashboard.scss"

class Dashboard extends React.Component {
    render() {
        const listItems = this.props.items.map((item, index) => {
            const firstKey = `first-${index}`;
            const secondKey = `second-${index}`;
            const thirdKey = `third-${index}`;
            const fourthKey = `fourth-${index}`;
            const fifthKey = `fifth-${index}`;
            return (
                <div className="set" key={index}>
                    <div className="rep">
                        {item.content}
                    </div>
                    <div class="rep">
                        <input type="checkbox" id={firstKey} name={firstKey} />
                        <label htmlFor={firstKey} className="circle" />
                        <div className="checkmark" />
                    </div>
                    <div class="rep">
                        <input type="checkbox" id={secondKey} name={secondKey} />
                        <label htmlFor={secondKey} className="circle" />
                        <div className="checkmark" />
                    </div>
                    <div class="rep">
                        <input type="checkbox" id={thirdKey} name={thirdKey} />
                        <label htmlFor={thirdKey} className="circle" />
                        <div className="checkmark" />
                    </div>
                    <div class="rep">
                        <input type="checkbox" id={fourthKey} name={fourthKey} />
                        <label htmlFor={fourthKey} className="circle" />
                        <div className="checkmark" />
                    </div>
                    <div class="rep">
                        <input type="checkbox" id={fifthKey} name={fifthKey} />
                        <label htmlFor={fifthKey} className="circle" />
                        <div className="checkmark" />
                    </div>
                </div>
            )
        })


        return (
            <div>
                <div className="dashboard">
                    {listItems}
                </div>

                <Add handleChange={this.props.handleChange}
                    handleSubmit={this.props.handleSubmit}
                    value={this.props.value} />
            </div>
        )
    }
}
export default Dashboard;
