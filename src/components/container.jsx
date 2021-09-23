import React from 'react'
import Square from './square.jsx'

const Container = () => {
  const squaresArr = Array(1596).fill(<Square />)
  return (
    <div className="container">{squaresArr.map((it) => it)}</div>
  )
}

export default Container
