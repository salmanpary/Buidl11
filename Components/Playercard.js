import React from 'react'

const Playercard = (props) => {
  return (
    <div>
        <h2>{props.name}</h2>
        <h4>{props.credits}</h4>
    </div>
  )
}

export default Playercard