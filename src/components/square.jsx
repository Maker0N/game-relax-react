import React, { useState } from 'react'

const Square = () => {
  const [color, setColor] = useState('#1d1d1d')

  const randomInt = () => {
    const rendomInt = Math.floor(Math.random() * 255)
    return rendomInt
  }

  const mouseOver = () => {
    const rgb = `rgb(${randomInt()},${randomInt()},${randomInt()})`
    setColor(rgb)
  }
  const mouseLeave = () => {
    setColor('#1d1d1d')
  }

  return (
    <div
      className='square'
      style={
        color === '#1d1d1d'
          ? {
              background: `#1d1d1d`
            }
          : {
              background: `${color}`,
              boxShadow: `0 0 2px ${color}, 0 0 10px ${color}`
            }
      }
      onMouseOver={mouseOver}
      onMouseLeave={mouseLeave}
    ></div>
  )
}

export default Square
