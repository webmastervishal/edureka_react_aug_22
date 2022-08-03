import React, { Component } from "react";
import CounterUI from "./CounterUI";

class CounterContainer extends Component {
  constructor(props) {
    super(props);
    console.log("constructor calling...");
    //initializing the state
    //binding the methods
    this.state = { count: 0 };
    this.increment = this.increment.bind(this);
    // this.decrement = this.decrement.bind(this);
  }

  static getDerivedStateFromProps(props) {
    console.log("getDerivedStateFromProps calling...");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate calling...");
    return true;
  }

  increment() {
    // console.log("increment calling...");
    this.setState({ count: this.state.count + 1 });
  }

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  //   decrement() {
  //     this.setState({ count: this.state.count - 1 });
  //   }

  render() {
    console.log("Render calling...");
    // return <h1>Counter: {this.state.count}</h1>;
    return (
      <CounterUI
        count={this.state.count}
        increment={this.increment}
        decrement={this.decrement}
      />
    );
  }

  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate calling...");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate calling...");
  }

  componentDidMount() {
    console.log("componentDidMount calling...");
  }
}

export default CounterContainer;
