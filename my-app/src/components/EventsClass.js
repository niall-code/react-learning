import React, { Component } from 'react'

export class EventsClass extends Component {
  clickHandler() {
    console.log("Class button clicked")
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>click me - class component</button>
      </div>
    )
  }
}

export default EventsClass
