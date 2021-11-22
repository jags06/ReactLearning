import React, { Component } from "react"

class EventBind extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: "Hello",
    }
    //Option 3 Binding in constructor called once
    // this.clickHandler = this.clickHandler.bind(this)
  }
  //   clickHandler() {
  //     this.setState({
  //       message: "GoodBye",
  //     })
  //     console.log(this)
  //   }
  //Option 1 for binding not a good way when have huge child element
  //   render() {
  //     return (
  //       <div>
  //         {this.state.message}
  //         <button onClick={this.clickHandler.bind(this)}>Click</button>
  //       </div>
  //     )
  //   }
  // }
  //Option2 Arrow method also has performance implication
  //   render() {
  //     return (
  //       <div>
  //         {this.state.message}
  //         <button onClick={() => this.clickHandler()}>Click</button>
  //       </div>
  //     )
  //   }
  // }
  //Option 4 using arrow method instead of calling in render method
  clickHandler = () => {
    this.setState({ message: "GoodBye " })
  }
  //option3
  render() {
    return (
      <div>
        {this.state.message}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind
