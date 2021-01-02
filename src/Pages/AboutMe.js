import React from 'react';
import Me from '../images/me.jpg';

function About() {
  return (
    <div>
      <div className="container">
        <h1 className="heading">James Le</h1>
        <h1 className="headingText heading">I am unemployed :)</h1>
      </div>
      <div className="aboutMeBox">
        <div>
          <img className="picture" src={Me} alt="some alt text" />
        </div>
        <div>
          <br />
          <br />
          <br />
          <br />
          <div className="aboutMe">
            Hello... Not sure what to type here yet but wanted to change it from
            being the same as my cv..
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
