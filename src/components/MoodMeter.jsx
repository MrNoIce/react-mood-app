import React from 'react'
import MoodBubble from './MoodBubble'
import { MATRIX } from './constants'

const renderQudrantBubbles = ({ count, color }) => {
  const bubbles = []
  for (var i = 0; i < count; i++) {
    bubbles.push(<MoodBubble color={color} />)
  }
  return bubbles
}

function MoodMeter() {
  const {
    quadrantSize: { width, height }
  } = MATRIX
  const quadrantBubbleCount = height * width
  return (
    <div className='mood-meter_container'>
      <p className='mood-meter_title'>How am I feeling?</p>
      <div className='mood-meter_quadrant-container'>
        <div className='mood-meter_quadrant-row'>
          <div className='mood-meter_quadrant'>
            {renderQudrantBubbles({ count: quadrantBubbleCount, color: 'red' })}
          </div>
          <div className='mood-meter_quadrant'>
            {renderQudrantBubbles({
              count: quadrantBubbleCount,
              color: 'yellow'
            })}
          </div>
        </div>
        <div className='mood-meter_quadrant-row'>
          <div className='mood-meter_quadrant'>
            {renderQudrantBubbles({
              count: quadrantBubbleCount,
              color: 'green'
            })}
          </div>
          <div className='mood-meter_quadrant'>
            {renderQudrantBubbles({
              count: quadrantBubbleCount,
              color: 'blue'
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoodMeter
