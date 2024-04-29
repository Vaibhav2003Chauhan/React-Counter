import React from 'react'

export default function Button(props) {
  return (
    <div>
      <button onClick={() => props.updateValue(props.value)} className='btn'>Click for increment by {props.value}</button>
    </div>
  )
}
