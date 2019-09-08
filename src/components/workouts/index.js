import React from "react";
import "./workouts.scss";

class Workouts extends React.Component {
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

            <svg width="50" height="48" viewBox="0 0 92 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 20L21 44L90 2.5" stroke="blue" stroke-width="5" />
            </svg>

          </div>
          <div class="rep">
            <input type="checkbox" id={secondKey} name={secondKey} />
            <label htmlFor={secondKey} className="circle" />

          </div>
          <div class="rep">
            <input type="checkbox" id={thirdKey} name={thirdKey} />
            <label htmlFor={thirdKey} className="circle" />

          </div>
          <div class="rep">
            <input type="checkbox" id={fourthKey} name={fourthKey} />
            <label htmlFor={fourthKey} className="circle" />

          </div>
          <div class="rep">
            <input type="checkbox" id={fifthKey} name={fifthKey} />
            <label htmlFor={fifthKey} className="circle" />

          </div>
        </div>
      )
    })

    return (
      <div className="workouts">
        {listItems}
      </div>
    );
  }
}
export default Workouts;
