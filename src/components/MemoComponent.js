import React from "react"

function MemoComponent({ name }) {
  console.log("rendering meo components ")
  return <div>{name}</div>
}

export default React.memo(MemoComponent)
