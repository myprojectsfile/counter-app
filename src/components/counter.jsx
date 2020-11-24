import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <React.Fragment>
        <button className="btn btn-primary btn-sm m-2">Ok</button>
        <span className="badge bg-warning">{this.state.count}</span>
      </React.Fragment>
    );
  }
}

export default Counter;
