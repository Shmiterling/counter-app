import React from 'react';
import './Step.css';

function Step(props) {
  return (
    <div className="step">
      <span>Step: </span>
      <input className="stepInput" type="number" defaultValue={1} onChange={(event) => props.stepChangeMethod(event)}/>
    </div>
  )
}

export default Step;