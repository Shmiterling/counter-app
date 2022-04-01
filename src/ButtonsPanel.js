import React from 'react';
import './ButtonsPanel.css';
import NextStepDisplay from './NextStepDisplay';
import Step from './Step';


function ButtonsPanel(props) {

  return(
    <div className='buttonsPanel'>
      <button onClick={() => {
        props.buttonMethod('add')
      }}>Add {props.stepValue}</button>
      <button onClick={() => {
        props.buttonMethod('reInit')
      }}>ReInit</button>
      <button onClick={() => {
        props.buttonMethod('reset')
      }}>Reset</button>
    </div>
  )
}

export default ButtonsPanel;