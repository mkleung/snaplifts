import React from "react";
import "./workouts.scss";

class Workouts extends React.Component {
  render() {

    var currentWorkouts = this.props.items.filter(item => item.workout === this.props.currentWorkout);

    const listItems = currentWorkouts.map((item, index) => {
      const firstKey = `first-${index}`;
      const secondKey = `second-${index}`;
      const thirdKey = `third-${index}`;
      const fourthKey = `fourth-${index}`;
      const fifthKey = `fifth-${index}`;
      return (
        <div className="set" key={index}>
          <div className="title">
            {item.key} - {item.content}
          </div>
          <div className="reps">
            <div className="rep">
              <input type="checkbox" id={firstKey} name={firstKey} />
              <div className="explode"></div>
              <label htmlFor={firstKey} className="circleLabel">
                <svg className="checkmark" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 6L5.5 9.5L14.5 0.5" stroke="#FFF" />
                </svg>
              </label>
            </div>
            <div className="rep">
              <input type="checkbox" id={secondKey} name={secondKey} />
              <div className="explode"></div>
              <label htmlFor={secondKey} className="circleLabel" >
                <svg className="checkmark" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 6L5.5 9.5L14.5 0.5" stroke="#FFF" />
                </svg>
              </label>
            </div>
            <div className="rep">
              <input type="checkbox" id={thirdKey} name={thirdKey} />
              <div className="explode"></div>
              <label htmlFor={thirdKey} className="circleLabel">
                <svg className="checkmark" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 6L5.5 9.5L14.5 0.5" stroke="#FFF" />
                </svg>
              </label>
            </div>
            <div className="rep">
              <input type="checkbox" id={fourthKey} name={fourthKey} />
              <div className="explode"></div>
              <label htmlFor={fourthKey} className="circleLabel" >
                <svg className="checkmark" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 6L5.5 9.5L14.5 0.5" stroke="#FFF" />
                </svg>
              </label>
            </div>
            <div className="rep">
              <input type="checkbox" id={fifthKey} name={fifthKey} />
              <div className="explode"></div>
              <label htmlFor={fifthKey} className="circleLabel">
                <svg className="checkmark" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 6L5.5 9.5L14.5 0.5" stroke="#FFF" />
                </svg>

              </label>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="workouts">
        {listItems}

        <div className="finishButton">
          <button>FINISH</button>
        </div>
      </div>
    );
  }
}
export default Workouts;
