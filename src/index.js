// import React from 'react';
// import ReactDOM from 'react-dom';
// // import MoodList from './components/moodList'
// import './index.css';




// const Emotions = [
//         'angry',
//         'depressed',
//         'excited',
//         'happy'
// ]
// const maps = Emotions.map((name) =>
// <button>{name}</button>)

// console.log('emo', maps)

// export default class MyTable extends React.Component {

//     createTable = () => {
//       let table = []
//       for (let i = 0; i < 25; i++) {
//         table.push(<div color><button onClick={() => alert("You clicked me")} className='circle'></button></div>)
//       }
//       return table
//     }
//     render() {
//       return(
//         <div className='sub_container'>
//             <div className="board-row-1" color={'green'}>{this.createTable()}</div>
//             <div className="board-row-2">{this.createTable()}</div>
//             <div className="board-row-3">{this.createTable()}</div>
//             <div className="board-row-4">{this.createTable()}</div>
//         </div>
//       )
//     }
//   }
//   // ========================================

//   ReactDOM.render(
//       <MyTable/>,
//     document.getElementById('root')
//   );

import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import MoodMeter from './components/MoodMeter'
import Root from './styledComponents/MoodMeter1'
import './styles/index.scss'
const routing = (
  <Router>
    <div>
      <Route path="/" component={Root} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))
// ReactDOM.render(<Root />, document.getElementById('app'))
