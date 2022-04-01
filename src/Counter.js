import React, { Component } from "react";
import './Counter.css'

import ButtonsPanel from "./ButtonsPanel";

import Display from './Display';

import ClockFunctional from './ClockFunctional';

import Step from './Step';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counterValue: this.props.initValue,
      showClock: true,
      step: 1
    };
  }

  stepChange = (event) => {

    this.setState({step: Number(event.target.value)})

  }


  changeValue = (action) => {

    this.setState((prevState, prevProps) => {

      let currentCounterValue = prevState.counterValue;

      if (action === 'add') {
        currentCounterValue += this.state.step;
      } else if (action === 'reInit') {
        currentCounterValue = prevProps.initValue;
      } else {
        currentCounterValue = 0;
      }

      return ({
        counterValue: currentCounterValue
      });
    });
  }


  toggleClock = () => {
    this.setState((prevState) => {
      return ({
        showClock: !prevState.showClock
      })
    })
  }


  render() {

    let clockElement = '';
    if (this.state.showClock) {
      clockElement = <ClockFunctional toggleClockMethod={this.toggleClock} />
    } else {
      clockElement = <span className="show-clock" onClick={this.toggleClock}>show clock</span>;
    }

    return (
      <div className="counter">
        Counter:
        <Display displayValue={this.state.counterValue} />
        <ButtonsPanel stepValue={this.state.step} buttonMethod={this.changeValue} />
        <Step stepChangeMethod={this.stepChange} />
        {clockElement}
      </div>
    )
  }
}

export default Counter;

