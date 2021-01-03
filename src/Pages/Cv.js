import cv from '../images/cv.png';
import CVFile from '../files/CV-JamesLe.pdf';

function CV() {
  return (
    <div className="cv">
      <h1>CV</h1>
      <p>Click on the CV to view PDF</p>
      <a href={CVFile} target="_blank" rel="noreferrer">
        <img className="cvImg" src={cv} alt="some alt text" />
      </a>
    </div>
  );
}

export default CV;
