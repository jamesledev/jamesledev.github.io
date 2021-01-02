import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import Pokemon from '../images/pokemon.png';
import Genshin from '../images/genshin.png';

const handleDragStart = (e) => e.preventDefault();
const items = [
  <img src={Pokemon} onDragStart={handleDragStart} className="portfolioPics" />,
  <img src={Genshin} onDragStart={handleDragStart} className="portfolioPics" />,
];

export default function RecentWork(props) {
  return (
    <>
      <div className="portfolioTopBox">
        <div>
          <AliceCarousel mouseTracking items={items} />
        </div>
        <div>Most recent workings</div>
      </div>
      <div className="portfolioWork"></div>
    </>
  );
}
