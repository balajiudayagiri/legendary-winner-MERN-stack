// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import HOC from './functional_compunents/HOCs/HOC';
// import Reqres from './functional_compunents/fetchingDataFromReqres/Reqres';
// import TableData from './functional_compunents/06Dec_test/TableData';
// import TableData from './components/06Dec_TEST/TableData';
// import Timer from './functional_compunents/timer/Timer';
// import Facstore from './components/Main_Web_Folder/Facstore';
// import ParentComp from './components/composition/ParentComp';
// import Parent from './components/stateLift/Parent';
// import Parent from './components/stateLifting-data-from-2child-to-1parent/Parent';
// import LoginComponent from './components/login_page/LoginComponent';
// import BodyLifecycle from './components/25-nov-lifecycle-of-compunents/Body-lifecycle';
// import Demo from './components/25-nov-lifecycle-of-compunents/Demo';
// import Component1 from './components/propDrilling/Component1';
// import photo from './images/WallCandy-6978.jpg'
// import Greeting from './components/class_components_props/greeting'
// import Greetings from './components/funtional_components_props/hello'
// import Header from './components/header';
// import ProductPage from './components/23_nov/product_details_card'
// import Practice from './components/23_nov/practice1'
// import Clock from './components/23_nov/practice2'
// import Greeting from './components/class_components_props/greeting';
// import Greetings from './components/funtional_components_props/hello';


class App extends Component {
  render() {
    return (<>
      {/* <Header /> */}
      {/* <ProductPage /> */}
      {/* <Greeting name='balaji' value={1997} /> */}
      {/* <Greetings name='Udayagiri' /> */}
      {/* <Practice /> */}
      {/* <Clock data={[1, 2, 3, 4]} /> */}
      {/* <BodyLifecycle name="hello" /> */}
      {/* <Demo data={[1, 2, 3, 4, 5, 6, 7]} /> */}
      {/* <Component1 value={100} /> */}
      {/* <LoginComponent /> */}
      {/* <Parent /> */}
      {/* <ParentComp /> */}
      {/* <Parent /> */}
      {/* <Facstore /> */}
      {/* <Timer /> */}
      {/* <TableData /> */}
      {/* <TableData /> */}
      {/* <Reqres /> */}
      <HOC />
    </>)
  }
}

export default App;
