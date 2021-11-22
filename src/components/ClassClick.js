import React, { Component } from "react"

class ClassClick extends Component {
  clickHandler() {
    console.log("clicked it")
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click Something</button>
      </div>
    )
  }
}

export default ClassClick
