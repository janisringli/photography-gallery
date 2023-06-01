import "./PhotoGalleryView.css";
import Header from "../../components/Header/Header";
import ImageThumbnail from "../../assets/images/7S0A0871.jpg";
import ImageThumbnailFlowers from "../../assets/images/7S0A0904.jpg";
import ImageThumbnailStreets from "../../assets/images/7S0A0502.jpg";



import { useNavigate } from "react-router-dom";

function PhotoGalleryView() {
  let navigateTo = useNavigate();

  function goToNature() {
    navigateTo("/photo/nature");
  }
  function goToFlowers() {
    navigateTo("/photo/flowers");
  }
  function goToNature() {
    navigateTo("/photo/nature");
  }
  function goToNature() {
    navigateTo("/photo/nature");
  }

  return (
    <div className="PhotoGalleryView-container">
      <Header />
      <div className="PhotoGalleryView-content">
        <div className="category-container">
          <div className="category-content">
            <div className="category-overlay" onClick={goToNature}>
              <div className="overlay-content">
                <div className="overlay-title">Nature</div>
              </div>
            </div>
            <img className="category-thumbnail" src={ImageThumbnail}></img>
          </div>
          <div className="category-content" onClick={goToFlowers}>
            <div className="category-overlay">
              <div className="overlay-content">
                <div className="overlay-title">Flowers</div>
              </div>
            </div>
            <img className="category-thumbnail" src={ImageThumbnailFlowers}></img>
          </div>
          <div className="category-content">
            <div className="category-overlay">
              <div className="overlay-content">
                <div className="overlay-title">Streets</div>
              </div>
            </div>
            <img className="category-thumbnail" src={ImageThumbnailStreets}></img>
          </div>
          <div className="category-content">
            <div className="category-overlay">
              <div className="overlay-content">
                <div className="overlay-title">Nature</div>
              </div>
            </div>
            <img className="category-thumbnail" src={ImageThumbnail}></img>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PhotoGalleryView;
