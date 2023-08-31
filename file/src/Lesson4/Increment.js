import React, { Component } from "react";
import "./style";

export default class Increment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }
  render() {
    const increase = () => {
      this.setState({
        count: this.state.count + 1,
      });
    };
    const decrease = () => {
      if (this.state.count > 1) {
        this.setState({
          count: this.state.count - 1,
        });
      }
    };
    return (
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gridGap: "20px",
            height: "100vh",
          }}
        >
          <button
            onClick={increase}
            style={{
              width: "30px",
              height: "30px",
              background: "green",
              color: "#fff",
              borderRadius: "50%",
              border: "none",
            }}
          >
            +
          </button>
          <div className="amount">{this.state.count}</div>
          <button
            onClick={decrease}
            style={{
              width: "30px",
              height: "30px",
              background: "red",
              color: "#fff",
              borderRadius: "50%",
              border: "none",
            }}
          >
            -
          </button>
        </div>
      </div>
    );
  }
}
// 29-avgust
