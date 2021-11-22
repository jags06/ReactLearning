import React from "react"
//using destructuring instead of props
// export const Greet = ({ name, heroName }) => {
//   return (
//     <div>
//       <h1>
//         Hello {name} {heroName}
//       </h1>
//     </div>
//   )
// }
//using destructuring with Const

export const Greet = (props) => {
  const { name, heroName } = props
  return (
    <div>
      <h1>
        Hello {name} {heroName}
      </h1>
    </div>
  )
}
