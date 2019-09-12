import React from 'react'
import Add from "../add";
import "./dashboard.scss"

class Dashboard extends React.Component {
    render() {
        const listItems = this.props.items.map((item, index) => {
            return (
                <div className="items" key={index}>
                    <div className="title">
                        {item.key} - {item.title}  (Workout {item.workout}) - {item.content}
                    </div>
                    <div className="control">
                        <button className="deleteButton" onClick={() => this.props.deleteItem(item.key)}>DELETE</button>
                    </div >
                </div >
            )
        })
        return (
            <div className="dashboard" >

                {listItems}
                <hr />
                <Add changeAdd={this.props.changeAdd}
                    submitAdd={this.props.submitAdd}
                    value={this.props.value}
                    selectAddValue={this.props.selectAddValue}
                    selectAddChange={this.props.selectAddChange} />
            </div>
        )
    }
}
export default Dashboard;
