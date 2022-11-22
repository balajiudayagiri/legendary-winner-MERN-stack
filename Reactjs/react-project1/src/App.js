import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import photo from './images/WallCandy-6978.jpg'

class App extends Component {
  // constructor() {
  //   super()
  // }
  render() {
    return (<><nav id='nav-bar'>
      <a>Home</a>
      <a>About</a>
      <a>login/signup</a>
      <a>Contact Us</a>
    </nav><img src={photo} /></>)
  }
}

export default App;
