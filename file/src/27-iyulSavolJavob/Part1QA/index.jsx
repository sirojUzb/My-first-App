import React, { Component } from "react";

export default class Part1QA extends Component {
  constructor (props) {
    super(props);
    this.state = {
      count: 0,
    }
  }
  render() {
    return(
      <div>
        <button onClick={()=>{this.setState({count: this.state.count + 1 })}}>INCREASE</button>
        <div>{this.state.count}</div>
        <button onClick={()=>{ if (this.state.count > 1) this.setState({count: this.state.count - 1})}}>DECREASE</button>
      </div>
    )
  }
}