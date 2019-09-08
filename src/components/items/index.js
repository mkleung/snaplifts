import React from "react";
import "./items.scss";

class Items extends React.Component {
  render() {
    const items = this.props.items;



    const listItems = items.map((item, index) => {
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


    // const listItems = items.map((item, index) => (
    //     <li key={index}>
    //       <input type="checkbox" id={index} name={index} />
    //       <label className="item" htmlFor={index}>
    //         {item.key}. {item.content}
    //       </label>
    //       <label htmlFor={index} className="circle" />
    //       <div className="checkmark" />
    //     </li>
    // ));

    return (
      <div className="body">
        {listItems}
      </div>
    );
  }
}
export default Items;
