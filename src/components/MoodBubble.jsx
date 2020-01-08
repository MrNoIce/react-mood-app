import React from 'react'

function MoodBubble({ color }) {
  return (
    <div className='mood-bubble_container'>
      <div
        className={color ? `mood-bubble mood-bubble--${color}` : 'mood-bubble'}
      />
    </div>
  )
}

export default MoodBubble
