import { useState } from 'react';
import Modal from 'react-modal';
import Github from '../images/github.png';
import webIcon from '../images/internet.png';

if (document.querySelector('#root')) {
  Modal.setAppElement('#root');
}

export default function Item(props) {
  const {
    name,
    imgLocation,
    briefDescription,
    description = '',
    githubLink = '',
    link = '',
  } = props;
  const [modalIsOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  const imageClasses = 'portfolioImage';
  const altText = `${name} main image`;

  let gitHubText = <></>;
  let linkText = <></>;
  let githubIcon = <></>;
  let linkIcon = <></>;
  if (githubLink) {
    gitHubText = (
      <div>Feel free to click onto the Github icon below to see the repo!</div>
    );
    githubIcon = (
      <a href={githubLink} target="_blank" rel="noreferrer">
        <img className="githubModal" src={Github} alt="Github Link" />
      </a>
    );
  }
  if (link) {
    linkText = (
      <div>
        Or to test the project click on the web icon. (As hosted on heroku it
        may take time to load)
      </div>
    );
    linkIcon = (
      <a href={link} target="_blank" rel="noreferrer">
        <img className="githubModal" src={webIcon} alt="Link" />
      </a>
    );
  }
  return (
    <>
      <div className={`overlayContainer ${name}-project`}>
        <img className={imageClasses} src={imgLocation} alt={altText} />
        <div
          className="overlay"
          onClick={() => {
            setIsOpen(name);
          }}
        >
          <div className="text">{briefDescription}</div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen === name}
        onRequestClose={closeModal}
        contentLabel={`${name}Modal`}
      >
        <div className="myModal">
          <span className="closeModal" onClick={closeModal}>
            ✖️
          </span>
          <h2>{name} Project</h2>
          <img
            className={`portfolioImageModal ${imageClasses}`}
            src={imgLocation}
            alt={altText}
          />
          <div className="textboxModal">
            <div>{description}</div>
            <br />
            {gitHubText}
            {linkText}
            <br />
            <div>Any feedback would be amazing!</div>
            <div>
              {githubIcon}
              {linkIcon}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
