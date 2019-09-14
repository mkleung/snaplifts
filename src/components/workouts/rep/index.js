import "./rep.scss"
import React from 'react';
const Rep = (props) => {
    let repKey = props.repKey;
    let item = props.item;
    let repColumn = props.repColumn;
    return (
        <div className="rep">
            <input
                type="checkbox"
                id={repKey}
                name={repKey}
                checked={item.sets[repColumn]}
                onChange={() => props.workoutToggle(item.key, repColumn)}
            />
            <label htmlFor={repKey} className="circleLabel">
                <svg className="checkmark" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 6L5.5 9.5L14.5 0.5" stroke="#FFF" />
                </svg>
            </label>
        </div>
    )
}
export default Rep;