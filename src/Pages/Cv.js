import Test from '../components/Pdf';
import StickyNav from '../components/stickyNav';

function CV() {
  return (
    <div>
      <StickyNav />
      <div className="cvText">
        <h1 className="heading">CV</h1>
        <p>Click on the CV to view PDF</p>
        <div>
          <Test />
        </div>
      </div>
    </div>
  );
}

export default CV;
