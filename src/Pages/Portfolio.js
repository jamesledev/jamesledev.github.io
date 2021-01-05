import Item from '../components/image';
import Pokemon from '../images/pokemon.png';
import Genshin from '../images/genshin.png';
import StickyNav from '../components/stickyNav';

const projectsArray = [
  {
    name: 'genshin',
    imgLocation: Genshin,
    briefDescription: 'Genshin Impact Planner on Express',
    description:
      'Genshin Impact is a game that I have played essentially from release. I wanted to find a website that would allow me to plan out visual build paths for my characters. It being a relatively new game however, resulted in a lack of fan made websites, and so I decided to build it myself. There were, however, text-only build paths that I could as references in my project. By using a google-sheets-api I was able to extract the information which would then be used as the guide alongside a more visual part where the user would have the ability to drag images corresponding to the guide to designated areas. This was done by using a plug-in called draggable and was built mainly on express, node.js.',
    githubLink: 'https://github.com/jamesledev/genshin-impact-site',
    link: 'https://genshin-impact-site.herokuapp.com/',
  },
  {
    name: 'pokemon',
    imgLocation: Pokemon,
    briefDescription: 'Pokemon-api on Express',
    description:
      'This was the first project I attempted after taking a multitude of Skillshare courses. Using express on node.js I created a pokedex (Pokemon info bank) and an item bank by using axios to request info via request/promise and asych/await from a pokemon-api. As this is my first ever project there is a lot lacking in the CSS department, however, in the short time it took me to complete the project my back-end JS and css skills rose exponentially.',
    githubLink: 'https://github.com/jamesledev/pokemon-api',
    link: 'https://james-pokedex.herokuapp.com/',
  },
];

function Portfolio() {
  const listProjects = projectsArray.map((project) => (
    <Item
      key={project.name}
      name={project.name}
      imgLocation={project.imgLocation}
      briefDescription={project.briefDescription}
      description={project.description}
      githubLink={project.githubLink}
      link={project.link}
    />
  ));

  return (
    <div>
      <StickyNav />
      <div className="portfolio">
        <h1 className="heading">Portfolio</h1>
        <p>Click on the image to learn more.</p>
        <div className="porfolioCentre">
          <div className="portfolioFlex">{listProjects}</div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
