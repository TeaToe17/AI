import React from 'react'

const Button = ({text, style, onClick}) => {
  return (
    <>
    <button style={style} className="button-on-page" onClick={onClick}>{text}</button>
    </>
  )
}

export default Button;