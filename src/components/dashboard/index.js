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
                <div className="items" key={index}>
                    <div className="title">
                        {item.content}
                    </div>
                    <div className="control">
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>

                </div>
            )
        })


        return (
            <div className="dashboard">
                {listItems}
                <Add handleChange={this.props.handleChange}
                    handleSubmit={this.props.handleSubmit}
                    value={this.props.value} />
            </div>
        )
    }
}
export default Dashboard;
