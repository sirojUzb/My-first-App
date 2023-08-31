import React, { Component } from 'react';
import Opener from './components/Opener';
import Navbar from './components/Navbar';

export default class Cootels extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Opener />
      </div>
    )
  }
}
