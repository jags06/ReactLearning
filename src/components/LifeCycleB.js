import React, { Component } from "react"

class LifeCycleB extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "Arun",
    }
    console.log("LifeCycleB constructor")
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleB get derived state from props")
    return null
  }
  componentDidMount() {
    console.log("LifeCycleB componentDidMount")
  }
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log("LifeCycleB shouldComponentUpdate")
    return true
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycleB getSnapshotBeforeUpdate")
    return null
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("LifeCycleB componentDidUpdate")
  }

  render() {
    console.log("LifeCycleB Render")
    return <div>LifeCycleB</div>
  }
}

export default LifeCycleB
