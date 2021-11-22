import React from "react"

function FunctionClick() {
  function clickHandler() {
    console.log("Button Clicked")
  }
  return (
    <div>
      {/* Event Handler is function not a function call therefor no need to add braces */}
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick
