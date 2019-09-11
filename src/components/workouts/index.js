import React from "react";
import "./workouts.scss";

class Workouts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      workouts: [
        [false, true, true, false, true],
        [true, true, true, false, false],
        [false, true, true, false, true],
      ]
    };

  }
  toggleChange = (row, column) => {

    let workouts = this.state.workouts;
    workouts[row][column] = !workouts[row][column]

    this.setState({
      workouts: workouts
    });
  }

  finish = () => {
    alert(JSON.stringify(this.state.workouts));
  }
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
            {item.key} - {item.title}
          </div>
          <div className="reps">
            <div className="rep">
              <input type="checkbox" id={firstKey} name={firstKey}
                checked={this.state.workouts[index][0]}
                onChange={() => this.toggleChange(index, 0)} />
              <div className="explode"></div>
              <label htmlFor={firstKey} className="circleLabel">
                <svg className="checkmark" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 6L5.5 9.5L14.5 0.5" stroke="#FFF" />
                </svg>
              </label>
            </div>
            <div className="rep">
              <input type="checkbox" id={secondKey} name={secondKey}
                checked={this.state.workouts[index][1]}
                onChange={() => this.toggleChange(index, 1)} />
              <div className="explode"></div>
              <label htmlFor={secondKey} className="circleLabel" >
                <svg className="checkmark" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 6L5.5 9.5L14.5 0.5" stroke="#FFF" />
                </svg>
              </label>
            </div>
            <div className="rep">
              <input type="checkbox" id={thirdKey} name={thirdKey}
                checked={this.state.workouts[index][2]}
                onChange={() => this.toggleChange(index, 2)} />
              <div className="explode"></div>
              <label htmlFor={thirdKey} className="circleLabel">
                <svg className="checkmark" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 6L5.5 9.5L14.5 0.5" stroke="#FFF" />
                </svg>
              </label>
            </div>
            <div className="rep">
              <input type="checkbox" id={fourthKey} name={fourthKey}
                checked={this.state.workouts[index][3]}
                onChange={() => this.toggleChange(index, 3)} />
              <div className="explode"></div>
              <label htmlFor={fourthKey} className="circleLabel" >
                <svg className="checkmark" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 6L5.5 9.5L14.5 0.5" stroke="#FFF" />
                </svg>
              </label>
            </div>
            <div className="rep">
              <input type="checkbox" id={fifthKey} name={fifthKey}
                checked={this.state.workouts[index][4]}
                onChange={() => this.toggleChange(index, 4)} />
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
          <button onClick={this.finish}>FINISH</button>
        </div>

      </div>
    );
  }
}
export default Workouts;
