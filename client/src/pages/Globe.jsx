import './Globe.css'; // Import the CSS file for styling the globe
import crystalImage from '../assets/crystal.png';

function Globe() {
  return (
    <div className="globe-container">
      <div className="globe">
        <img src={crystalImage} alt="Crystal" className="crystal-image" />
      </div>
    </div>
  );
}

export default Globe;