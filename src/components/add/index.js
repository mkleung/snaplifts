import React from "react";
import "./add.scss";
class Add extends React.Component {
  render() {
    return (
      <div className="add">
        <form onSubmit={this.props.handleSubmit}>
          <input
            name="newItem"
            className="add__input"
            placeholder="New item"
            value={this.props.value}
            onChange={this.props.handleChange}
          />
          <button type="submit" className="add__button">
            +
          </button>
        </form>
      </div>
    );
  }
}
export default Add;
