import React, { Component } from "react";
import './Clock.css'

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = { date: new Date() };
    console.log('Initialization lifeCycle constructor(props)');

  }


  componentDidMount() {
    this.timerID = setInterval(
      () => { this.tick() },
      1000)
    console.log(`Mouning lifeCycle`)
  }


  componentDidUpdate() {
    console.log(`Update lifeCycle`)
  }


  componentWillUnmount() {
    clearInterval(this.timerID);
    console.log(`Unmounting lifeCycle`)
  }


  tick = () => {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div className="clock">
        <h4>Time: {this.state.date.toLocaleTimeString()}<span onClick={this.props.toggleClockMethod}> X </span></h4>
      </div>
    )
  }
}

export default Clock