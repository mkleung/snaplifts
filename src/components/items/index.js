import React from "react";
import "./items.scss";

class Items extends React.Component {
  render() {
    const items = this.props.items;

    const listItems = items.map((item, index) => (
      <li key={index}>
        <input type="checkbox" id={index} name={index} />
        <label className="item" htmlFor={index}>
          {item.key}. {item.content}
        </label>
        <label htmlFor={index} className="circle" />
        <div className="checkmark" />
        <div
          className="delete"
          onClick={() => {
            this.props.deleteItem(item.key);
          }}
        >
          <i className="fa fa-trash" />
        </div>
      </li>
    ));

    return (
      <div className="body">
        <ul>{listItems}</ul>
      </div>
    );
  }
}
export default Items;
