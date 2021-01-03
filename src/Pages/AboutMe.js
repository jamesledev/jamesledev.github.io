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
            After deciding upon a programming type project for my master’s
            dissertation, I began my descent into the world of development.
            After self-teaching myself the basics of HTML, CSS and JavaScript I
            began developing different websites and projects. With the skills I
            gained through my chemistry degree I was able to quickly grasp the
            logic behind various frameworks and am now looking forward to taking
            this passion further to become a more proficient and most
            importantly, an efficient engineer.
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
