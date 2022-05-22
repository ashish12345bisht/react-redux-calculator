import React from 'react'

function Keypad() {
    const keys=[9,8,7,6,5,4,3,2,1,0];
  return (
    <div className="keypad">
        {keys.map((key)=>{
            return <button>{key}</button>
        })}
    </div>
  )
}

export default Keypad