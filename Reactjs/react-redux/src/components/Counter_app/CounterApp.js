import React from "react";
import { connect } from "react-redux";
import "./CounterApp.css";

class CounterApp extends React.Component {
  render() {
    return (
      <div id="counter_div">
        <h1>{this.props.counter}</h1>
        <button onClick={() => this.props.increment()}>+</button>
        <button onClick={() => this.props.decrement()}>-</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { counter: state.counter };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "increment" }),
    decrement: () => dispatch({ type: "decrement" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);
// connect is a higher order component
