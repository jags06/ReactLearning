import React, { Component } from "react"

class RefsDemo extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
    //Callback approach is old one but still valid
    // this.cbRef = null
    // this.setCbRef = (element) => {
    //   this.cbRef = element
    // }
  }
  componentDidMount() {
    //Using Callback
    //   if(this.cbRef){
    //       this.cbRef.focus()
    //   }
    this.inputRef.current.focus()
    console.log(this.inputRef)
  }
  clickHandler = () => {
    alert(this.inputRef.current.value)
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef}></input>
        {/* For Callback */}
        {/* <input type="text" ref={this.setCbRef}></input> */}

        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default RefsDemo
