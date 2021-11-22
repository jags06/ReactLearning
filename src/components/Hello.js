import React from "react"
export const Hello = () => {
  //   return (
  //     <div>
  //       <h1>Hello V</h1>
  //     </div>
  //   )
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Hello A")
  )
}
