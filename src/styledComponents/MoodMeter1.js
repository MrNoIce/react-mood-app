import React from 'react'
import styled from 'styled-components'

const { useState } = React;

const Conatiner = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Quandrant = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  height: 50%;
`;

const Button = styled.button`
  margin: 0px 5px;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: ${props => props.color}
`;

const FeelingsContainer = styled.div`
  width: 100%
  display: flex
  justify-content: center;
  align-items: center;
  margin: 10px 0px;
`;

const Feelings = styled.div`
    margin: 10px;
    color: ${props => props.mood === props.feeling ? 'blue' : 'black'};
`;
const Root = () => {
  const [mood, setMood] = useState('')

  let happy = { key: 'happy', color: 'green'};
  let sad = { key: 'sad', color: 'blue'};
  let mad = { key: 'mad', color: 'red'};
  let fear = { key: 'fear', color: 'yellow'};

  let makeButtons = (emotion, setMood) => {
    console.log(emotion)
      let buttons = Array(25).fill(0);
      return buttons.map((b, key) =>{
        return (
          <Button
            onClick={() => setMood(emotion.key)}
            color={emotion.color}
            key={key}
           />)
      })
  }

  return (
    <Conatiner>
      <Quandrant>{makeButtons(happy, setMood)}</Quandrant>
      <Quandrant>{makeButtons(sad, setMood)}</Quandrant>
      <Quandrant>{makeButtons(mad, setMood)}</Quandrant>
      <Quandrant>{makeButtons(fear, setMood)}</Quandrant>
      <FeelingsContainer >
        <Feelings mood={mood} feeling={happy.key}>HAPPY</Feelings>
        <Feelings mood={mood} feeling={sad.key}>SAD</Feelings>
        <Feelings mood={mood} feeling={mad.key}>MAD</Feelings>
        <Feelings mood={mood} feeling={fear.key}>FEAR</Feelings>
      </FeelingsContainer>
    </Conatiner>
  )
}

export default Root

// ReactDOM.render(<Root />, document.getElementById('app'))