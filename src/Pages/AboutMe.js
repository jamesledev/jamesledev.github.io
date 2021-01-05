import React from 'react';
import Me from '../images/me.jpg';
import Ig from '../images/instagram.png';
import StickyNav from '../components/stickyNav';

function About() {
  return (
    <div>
      <StickyNav />
      <div className="aboutMe">
        <div className="headingContainer">
          <h1 className="heading">James Le</h1>
          <h1 className="headingText">
            “If you don’t share someone’s pain, you can never understand them.”
          </h1>
        </div>
        <div className="aboutMeBox">
          <div className="aboutMePicture">
            <img className="picture" src={Me} alt="some alt text" />
          </div>
          <div className="aboutMeTextBox">
            <p className="aboutMeText">
              After deciding upon a programming type project for my master’s
              dissertation, I began my descent into the world of development.
              After self-teaching myself the basics of HTML, CSS and JavaScript
              I began developing different websites and projects. Using skills I
              gained through my chemistry degree I was able to quickly grasp the
              logic behind various different frameworks and am now looking
              forward to taking this passion further to become a more proficient
              and most importantly, an efficient engineer. <br /> <br />
              Outside of my passion for programming comes my want for clout on
              instagram. Joking aside I spend most of my time playing games,
              watching korean dramas or playing badminton. <br /> <br /> Feel
              free send an email my way with any questions! If there is one
              thing I can guarentee, its the speed at which I reply to emails
              at. <br />
              <br />
              jamesle.mt@gmail.com
              <a
                href="https://instagram.com/ijamesle"
                target="_blank"
                rel="noreferrer"
              >
                <img className="igIcon" src={Ig} alt="ig icon" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
