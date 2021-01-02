import cv from '../images/cv.png';
import CVFile from '../images/CV-JamesLe.pdf';
function CV() {
  return (
    <div className="cv">
      <h1>CV</h1>
      <p>Click on the CV to view PDF</p>
      <a href={CVFile}>
        <img className="cvImg" src={cv}></img>
      </a>
    </div>
  );
}

export default CV;
