import Test from '../components/Pdf';

function CV() {
  return (
    <div className="cvText">
      <h1 className="heading">CV</h1>
      <p>Click on the CV to view PDF</p>
      <div>
        <Test />
      </div>
    </div>
  );
}

export default CV;
