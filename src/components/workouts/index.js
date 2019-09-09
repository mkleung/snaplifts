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
            <div className="explode"></div>
            <label htmlFor={firstKey} className="circleLabel">
              <svg className="checkmark" width="40" height="40" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 6L5.5 9.5L14.5 0.5" stroke="#FFF" />
              </svg>
            </label>
          </div>
          <div class="rep">
            <input type="checkbox" id={secondKey} name={secondKey} />
            <div className="explode"></div>
            <label htmlFor={secondKey} className="circleLabel" >
              <svg className="checkmark" width="40" height="40" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 6L5.5 9.5L14.5 0.5" stroke="#FFF" />
              </svg>
            </label>
          </div>
          <div class="rep">
            <input type="checkbox" id={thirdKey} name={thirdKey} />
            <div className="explode"></div>
            <label htmlFor={thirdKey} className="circleLabel">
              <svg className="checkmark" width="40" height="40" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 6L5.5 9.5L14.5 0.5" stroke="#FFF" />
              </svg>
            </label>
          </div>
          <div class="rep">
            <input type="checkbox" id={fourthKey} name={fourthKey} />
            <div className="explode"></div>
            <label htmlFor={fourthKey} className="circleLabel" >
              <svg className="checkmark" width="40" height="40" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 6L5.5 9.5L14.5 0.5" stroke="#FFF" />
              </svg>
            </label>
          </div>
          <div class="rep">
            <input type="checkbox" id={fifthKey} name={fifthKey} />
            <div className="explode"></div>
            <label htmlFor={fifthKey} className="circleLabel">
              <svg className="checkmark" width="40" height="40" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 6L5.5 9.5L14.5 0.5" stroke="#FFF" />
              </svg>

            </label>
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
