import React from "react";
import "./add.scss";
import Select from 'react-select';

const options = [
  { value: 'A', label: 'Workout A' },
  { value: 'B', label: 'Workout B' },
  { value: 'C', label: 'Workout C' },
];

class Add extends React.Component {
  render() {
    let selectAddValue = { value: this.props.selectAddValue, label: `Workout ${this.props.selectAddValue}` }
    return (
      <div className="add item">
        <form onSubmit={this.props.submitAdd}>
          <input
            name="newItem"
            className="add__input"
            placeholder="New item"
            value={this.props.value}
            onChange={this.props.changeAdd}
          />

          <Select
            options={options}
            onChange={this.props.selectAddChange}
            value={selectAddValue}
          />
          <button type="submit" className="add__button">Add</button>
        </form>
      </div>
    );
  }
}
export default Add;
