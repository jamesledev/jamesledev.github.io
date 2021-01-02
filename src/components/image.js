import { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function Item(props) {
  const { name, imgLocation, description = '' } = props;
  const [modalIsOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  const imageClasses = 'portfolioImage';
  const altText = `${name} main image`;

  return (
    <>
      <div className={`${name}-project`}>
        <img
          className={imageClasses}
          src={imgLocation}
          onClick={() => {
            setIsOpen(name);
          }}
          alt={altText}
        />
      </div>

      <Modal
        isOpen={modalIsOpen === name}
        onRequestClose={closeModal}
        contentLabel={`${name}Modal`}
      >
        <div className="myModal">
          <h2>{name} Project</h2>
          <img className={imageClasses} src={imgLocation} alt={altText} />
          <div>I am a modal for {name}</div>
          <div>{description}</div>
          <button onClick={closeModal}>close</button>
        </div>
      </Modal>
    </>
  );
}
