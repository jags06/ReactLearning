import React, { Component } from "react"

class UserGreeting extends Component {
  constructor(props) {
    super(props)
    this.state = { isLoggedIn: true }
  }
  render() {
    //Approach 4 short circuit operator for visibility
    return this.state.isLoggedIn && <div>Welcome Arun</div>
    //Approach 3 using ternary
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Arun</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // )
    //Approach 2 store it to variable
    // let message
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Arun</div>
    // } else {
    //   message = <div>Welcome Guest</div>
    // }
    // return message
    //Approach 1 simple if else looks clumsy
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Arun</div>
    // } else {
    //   return <div>Welcome Guest</div>
    // }
    // return (
    //   <div>
    //     <div>Welcome Arun</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // )
  }
}

export default UserGreeting
