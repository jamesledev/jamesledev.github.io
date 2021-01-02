import React, { Component } from 'react';
import Sticky from 'react-sticky-el';

class stickyNav extends Component {
  render() {
    return (
      <Sticky>
        <header className="table">
          <ul id="horizontal-list">
            <li>About Me </li>
            <li>Recent Work </li>
            <li>Contacts</li>
          </ul>
        </header>
      </Sticky>
    );
  }
}

export default stickyNav;
