import React, { Component } from "react";

class FocusInput extends Component {
  constructor(props) {
    super(props);

    this.componetRef = React.createRef();
  }
  clickHandler = () => {
    this.componetRef.current.focus();
  };
  render() {
    return (
      <div>
        <input ref={this.componetRef}></input>
        <button onClick={this.clickHandler}>Focus Button</button>
      </div>
    );
  }
}

export default FocusInput;
