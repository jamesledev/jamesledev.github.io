import React, { Component } from 'react';
import Typed from 'react-typed';

export default class TypingCom extends Component {
  render() {
    return (
      <div className="blackText">
        <Typed
          strings={["Hi I'm James", 'Welcome to my <br>website!✌️']}
          typeSpeed={40}
          backSpeed={50}
          loop
          font
        />
      </div>
    );
  }
}
