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
    // let selectAddValue = { value: this.props.selectAddValue, label: `Workout ${this.props.selectAddValue}` }
    return (
      <React.Fragment>
        <form onSubmit={this.props.submitAdd}>
          <button type="submit" className="add__button"><i className="material-icons">add</i></button>
          <input
            name="newItem"
            className="add__input"
            placeholder="New item"
            ref="input"
          />

          <Select
            options={options}
            onChange={this.props.addSelectChange}
            value=""
          />

        </form>
      </React.Fragment>
    );
  }
}
export default Add;
