import React, { Component } from "react"
import LifeCycleB from "./LifeCycleB"

class LifeCycleA extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "Arun",
    }
    console.log("LifecycleA constructor")
  }
  static getDerivedStateFromProps(props, state) {
    console.log("Lifecycle get derived state from props")
    return null
  }
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log("LifeCyleA shouldComponentUpdate")
    return true
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCyleA getSnapshotBeforeUpdate")
    return null
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("LifeCyleA componentDidUpdate")
  }
  componentDidMount() {
    console.log("LifeCyleA componentDidMount")
  }
  changeState = () => {
    this.setState({
      name: "CodeEvolution",
    })
  }
  render() {
    console.log("LifeCyleA Render")
    return (
      <div>
        LifecycleA
        <button onClick={this.changeState}>Change State</button>
        <LifeCycleB></LifeCycleB>
      </div>
    )
  }
}

export default LifeCycleA
