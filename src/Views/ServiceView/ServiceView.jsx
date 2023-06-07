import Header from "../../components/Header/Header";
import "./ServiceView.css";
import ArealHeader from "../../assets/images/gallery/DJI_0281.jpg";
import PhotoHeader from "../../assets/images/gallery/7S0A0447.jpg";

function ServiceView() {
  return (
    <div className="service-container">
      <Header title="Services" />
      <div className="service-content">
        <div className="card-wrapper">
          <div className="card-container">
            <img className="image-header" src={PhotoHeader} alt="" />
            <div className="card-content">
              <div className="card-title">Photography Pack</div>
              <ul className="features-list">
                <li className="feature-item">2h Photoshooting</li>
                <li className="feature-item">All Photos at your desposal</li>
                <li className="feature-item">Best Quality</li>
                <li className="feature-item"></li>
              </ul>
              <div className="chosePack">
                <a
                  className="chosen"
                  href="mailto:janis.ringli@gmail.com?subject=I want to book you for a Photoshoot"
                >
                  Chose Pack
                </a>
              </div>
            </div>
          </div>

          <div className="card-container">
            <img className="image-header" src={ArealHeader} alt="" />

            <div className="card-content">
              <div className="card-title">Areal Pack</div>
              <ul className="features-list">
                <li className="feature-item">Drone Photoshoot</li>
                <li className="feature-item">All Photos at your desposal</li>
                <li className="feature-item"></li>
                <li className="feature-item"></li>
              </ul>
              <div className="chosePack">
                <a
                  className="chosen"
                  href="mailto:janis.ringli@gmail.com?subject=I want to book you for a Areal Photoshoot"
                >
                  Chose Pack
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ServiceView;
