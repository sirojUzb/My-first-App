import React, { Component } from 'react'
import { Button, SecondButton } from "./style"; 

export default class ButtonComponent extends Component {
  render() {
    return (
      <div 
        style={{ 
          display:'flex',
          justifyContent:'center', 
          alignItems:'center', 
          height: "100vh",
        }}
      >
        <Button dark padding="12">Click me!</Button>
        {/* <Button padding="20">Click me!</Button> */}
        <SecondButton margin="50" padding="50">Second Button</SecondButton>
      </div>
    )
  }
}
