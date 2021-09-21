import React, { useState } from 'react'

const Square = () => {
  const [color, setColor] = useState({ background: '#1d1d1d' })

  const randomInt = () => {
    const rendomInt = Math.floor(Math.random() * 255)
    return rendomInt
  }

  const mouseOver = () => {
    const rgb = `rgb(${randomInt()},${randomInt()},${randomInt()})`
    setColor({
      background: rgb,
      boxShadow: `0 0 2px ${rgb}, 0 0 10px ${rgb}`
    })
  }
  const mouseLeave = () => {
    setColor({ background: '#1d1d1d' })
  }

  return (
    <div
      className='square'
      style={color}
      onMouseOver={mouseOver}
      onMouseLeave={mouseLeave}
    ></div>
  )
}

export default Square
