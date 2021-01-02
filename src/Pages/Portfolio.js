import Item from '../components/image';
import Pokemon from '../images/pokemon.png';
import Genshin from '../images/genshin.png';

function Portfolio() {
  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      <h2>Click on the image to expand</h2>
      <div className="porfolioCentre">
        <div className="portfolioFlex">
          <Item
            name="pokemon"
            imgLocation={Pokemon}
            description="some pokemon description"
          />
          <Item
            name="genshin"
            imgLocation={Genshin}
            description="some genshin description"
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
