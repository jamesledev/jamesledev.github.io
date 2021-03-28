import Item from '../components/image';
import Pokemon from '../images/pokemon.png';
import Genshin from '../images/genshin.png';
import Saigon from '../images/saigon.png';
import ECommerce from '../images/ecommerce.png';
import StickyNav from '../components/stickyNav';

const projectsArray = [
  {
    name: 'Genshin Impact Project No. 2',
    imgLocation: Genshin,
    briefDescription: 'Genshin Impact Planner on Next.js (Work In Progress) ',
    description:
      'This follows the exact same concept at the other genshin impact project except this time on Next.js.',
    githubLink: 'https://github.com/jamesledev/genshin-impact-next-site',
    link: 'https://genshin-impact-site-site.herokuapp.com/',
  },
  {
    name: 'E-Commerce-Website',
    imgLocation: ECommerce,
    briefDescription: 'E-Commerce site using Commerce.js',
    description:
      'This E-Commerce app is the biggest project I have created to date. Using commerce.js and stripe I was able to create a fully functional site, although its all done in sandbox and no payments happen, I still do receive an email notification if anyone tries to buy anything. As it was a big project with many components, I of course encountered many bugs as well as errors, but they were mostly resolved. It is my first time also using a CSS framework, using material-ui made creating the app incredibly easier and for the most part was already small media friendly. ',
    githubLink: 'https://github.com/jamesledev/e-commerce-site',
    link: 'https://jamesledev-ecommerce.netlify.app/',
  },
  {
    name: 'Eat Saigon Restaurant Website',
    imgLocation: Saigon,
    briefDescription: 'Eat Saigon Restaurant Website',
    description:
      'Saigon Vietnamese Restaurant is the restaurant where I worked during my teenage years, it was owned by my family and so of course I was forced to work there… I needed practise building websites on React.js and so I borrowed the photos that we took before and created this website in one day. It is also a responsive design and so works across other media sizes. ',
    githubLink: 'https://github.com/jamesledev/eatsaigon-site',
    link: 'https://eatsaigon.netlify.app',
  },
  {
    name: 'Genshin Impact Project',
    imgLocation: Genshin,
    briefDescription: 'Genshin Impact Planner on Express',
    description:
      'Genshin Impact is a game that I have played essentially from release. I wanted to find a website that would allow me to plan out visual build paths for my characters. It being a relatively new game however, resulted in a lack of fan made websites, and so I decided to build it myself. There were, however, text-only build paths that I could as references in my project. By using a google-sheets-api I was able to extract the information which would then be used as the guide alongside a more visual part where the user would have the ability to drag images corresponding to the guide to designated areas. This was done by using a plug-in called draggable and was built mainly on express.',
    githubLink: 'https://github.com/jamesledev/genshin-impact-site',
    link: 'https://genshin-impact-site.herokuapp.com/',
  },
  {
    name: 'Pokedex Project',
    imgLocation: Pokemon,
    briefDescription: 'Pokemon-api on Express',
    description:
      'This was the first project I attempted after taking a multitude of Skillshare courses. Using express on node.js I created a pokedex (Pokemon info bank) and an item bank by using axios to request info via request/promise and async/await from a pokemon-api. As this is my first ever project there is a lot lacking in the CSS department, however, in the short time it took me to complete the project my back-end JS and css skills rose exponentially.',
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
