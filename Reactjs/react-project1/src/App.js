// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
// import photo from './images/WallCandy-6978.jpg'
// import Greeting from './components/class_components_props/greeting'
// import Greetings from './components/funtional_components_props/hello'
import Header from './components/header';
import Body from './components/23_nov/product_details_card'
// import Practice from './components/23_nov/practice1'
// import Clock from './components/23_nov/practice2'



class App extends Component {
  render() {
    return (<>
      <Header />
      <Body />
      {/* <Practice /> */}
      {/* <Clock data={[1, 2, 3, 4]} /> */}
    </>)
  }
}

export default App;
