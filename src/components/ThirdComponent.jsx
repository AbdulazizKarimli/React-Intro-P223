
import React, { Component } from 'react'

export const ThirdComponent = (props) => {
    
  return (
    <div style={{display:'flex',flexDirection:'column'}}>
      {props.count}
      <button onClick={props.decreaseCount}>Decrease from ThirdComponent</button>
    </div>
  )
}
