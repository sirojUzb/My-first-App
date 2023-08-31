import React, { Component } from 'react';
import { Wrapper} from "./style"

export default class Button extends Component {
  render() {
    return (
      <Wrapper mt={this.props.mt}>{this.props.children}</Wrapper>
    )
  }
}
