import React, { useState } from 'react'


export const CounterComponent  = (props) => {
    const {increaseCount, decreaseCount, set10, counterObj:{count}} = props
  
    
    const countStyle = {
      fontSize:'35px',
      color:'red',
      width:'100%',
    }
  
    const buttonsCont = {
      display:'flex',
      justifyContent:'center'
    }
  
    const mainCont = {
      width:"500px",
      display:'flex',
      flexDirection:'column'
    }
    
    return (
        <div style={mainCont}>
        <div style={countStyle}>{count}</div>     

        <div style={buttonsCont}>
            <button onClick={increaseCount}>Increase</button>
            <button onClick={decreaseCount}>Decrase</button>
            <button onClick={set10}>set 10</button>
        </div>
      </div>
    )
}