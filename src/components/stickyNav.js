import React, { Component } from 'react';
import Sticky from 'react-sticky-el';

class stickyNav extends Component {
  render() {
    return (
      <Sticky>
        <header className="table">
          <ul id="horizontal-list">
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#recent">Recent Work</a>
            </li>
            <li>Contacts</li>
          </ul>
        </header>
      </Sticky>
    );
  }
}

export default stickyNav;
