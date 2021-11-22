import React, { Component, PureComponent } from "react"
import MemoComponent from "./MemoComponent"
import PureComp from "./PureComp"
import RegularComponent from "./RegularComponent"

class ParentComp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "Arun",
    }
  }
  componentDidCatch(error, errorInfo) {
    setInterval(() => {
      this.setState({
        name: "Arun",
      })
    }, 2000)
  }
  render() {
    console.log("************ Parent Comp Render *********")
    return (
      <div>
        ParentComponet
        {/* <RegularComponent name={this.state.name}></RegularComponent>
        <PureComp name={this.state.name}></PureComp> */}
        {/* Implementing Memo  */}
        <MemoComponent name={this.state.name}></MemoComponent>
      </div>
    )
  }
}

export default ParentComp
