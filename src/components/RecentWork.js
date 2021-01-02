import Section from './Section';
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Email from '../images/email.png';
import LinkedIn from '../images/linkedin.png';
import Telephone from '../images/telephone.png';

const handleDragStart = (e) => e.preventDefault();
const items = [
  <img src={Email} onDragStart={handleDragStart} className="email" />,
  <img src={LinkedIn} onDragStart={handleDragStart} className="linkedin" />,
  <img src={Telephone} onDragStart={handleDragStart} className="telephone" />,
];

export default function RecentWork(props) {
  return (
    <Section>
      <div id="recent">
        <AliceCarousel mouseTracking items={items} />
      </div>
      <div>this is the work i've been doing recently</div>
    </Section>
  );
}
