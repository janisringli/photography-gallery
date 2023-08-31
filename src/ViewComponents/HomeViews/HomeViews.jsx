import "./HomeView.css";
import Header from "../../components/Header/Header.jsx";
import janis from "../../assets/images/janis1.jpg";

function HomeViews() {
  return (
    <div className="homeView-container">
      <Header title="Home" />
      <div className="homeView-content">
        <div className="greetings-container">
          <div className="greeting">
            <p className="image-overlap">Hello there,</p>I'm Janis Ring
            <span className="image-overlap">li</span>
            <img className="intro-photo" src={janis} alt="A Portrait of Janis Ringli" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeViews;
