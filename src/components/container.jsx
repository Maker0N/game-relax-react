import React from 'react'
import Square from './square.jsx'

const Container = () => {
  const squaresArr = Array(836).fill(<Square />)
  return (
    <div className="container">{squaresArr.map((it) => it)}</div>
  )
}

export default Container
