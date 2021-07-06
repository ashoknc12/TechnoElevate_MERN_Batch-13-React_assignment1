import React, { Component } from "react"

import "./Counter.css"

export default class Counter extends Component {
  state = {
    counter: 0,
  }
  render() {
    return (
      <table border="1px solid black">
        <tr>
          <td colSpan="3" id="value">
            {this.state.counter}
          </td>
        </tr>
        <tr style={{ height: "100px" }}>
          <td
            onClick={() => {
              this.setState({ counter: this.state.counter + 1 })
            }}
            style={{ background: "green",fontSize:"50px" }}
          >
           +
          </td>
          <td
            onClick={() => {
              this.setState({ counter: 0 })
            }}
            style={{ background: "yellow",fontSize:"20px" }}
          >
            reset
          </td>
          <td
            onClick={() => {
              this.setState({ counter: this.state.counter - 1 })
            }}
            style={{ background: "red",fontSize:"80px" }}
          >
            -
          </td>
        </tr>
      </table>
    )
  }
}