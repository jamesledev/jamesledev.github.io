import React, { Component } from 'react';
import Typed from 'react-typed';

export default class TypingCom extends Component {
  render() {
    return (
      <Typed
        strings={["Hi i'm James", 'Welcome to my website']}
        typeSpeed={40}
        backSpeed={50}
        loop
      />
    );
  }
}
