import React from 'react';
import ReactDOM from 'react-dom';
// import MoodList from './components/moodList'
import './index.css';




const Emotions = [
        'angry',
        'depressed',
        'excited',
        'happy'
]
const maps = Emotions.map((name) =>
<button>{name}</button>)

console.log('emo', maps)

export default class MyTable extends React.Component {

    createTable = () => {
      let table = []

      // Outer loop to create parent
      for (let i = 0; i < 10; i++) {
        let children = []
        //Inner loop to create children
        for (let j = 0; j < 10; j++) {
          children.push(<button onClick={() => alert("You clicked me")} className='circle'>{`${' '}`}</button>)
        }
        //Create the parent and add the children
        table.push(<div className='quadrant_container'>{children}</div>)
      }
      return table
    }


    render() {
      return(
        <div className="board-row">
          {this.createTable()}
        </div>
      )
    }

  }

function Square(props) {
    return (
        <div className='quadrant_container'>
            <button className="square" value={maps.name} onClick={() => alert("You clicked me")}>
                {maps[0]}
            </button>
            <button className="square" value={maps.name} onClick={() => alert("You clicked me")}>
                {maps[1]}
            </button>
            <button className="square" value={maps.name} onClick={() => alert("You clicked me")}>
                {maps[2]}
            </button>
            <button className="square" value={maps.name} onClick={() => alert("You clicked me")}>
                {maps[3]}
            </button>
        </div>

    );
  }

  console.log('name', )

function Circle() {
    return (
        <div className="main_container">
            <div className="sub_container">1</div>
            <div className="sub_container">2</div>
            <div className="sub_container">3</div>
            <div className="sub_container">4</div>
        </div>
    )
}

  class Board extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        squares: Array(9).fill(null),
        xIsNext: true,
      };
    }

    renderSquare(i) {
      return (
        <Square
          value={this.state.squares[i]}
          onClick={() => this.handleClick(i)}
        />,
        <MyTable/>
      );
    }

    render() {

      return (
        <div>
            {this.renderSquare(0)}
        </div>
      );
    }
  }

  class Game extends React.Component {
    render() {
      return (
        <div className="main">
            <Board />
        </div>
      );
    }
  }

  // ========================================

  ReactDOM.render(
    <MyTable/>,
    document.getElementById('root')
  );

