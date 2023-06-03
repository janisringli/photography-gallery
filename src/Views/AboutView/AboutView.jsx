import "./AboutView.css";
import Header from "../../components/Header/Header";
import githubIcon from "../../assets/svg/github.svg";
import instaIcon from "../../assets/svg/instagram.svg";
import unsplashIcon from "../../assets/svg/unsplash.svg";
import janis2 from "../../assets/images/janis2.jpg";
import mailIcon from "../../assets/svg/mail.svg";

function AboutView() {
  return (
    <div className="about-wrapper">
      <Header title="" />
      <div className="about-content">
        <div className="title-section">
          <div className="about-title">About</div>
          <div className="footer">
            <div className="socials">
              <div className="social-item">
                <a
                  href="https://www.instagram.com/ring.lii/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="social-icon" src={instaIcon} alt="" />
                </a>
              </div>
              <div className="social-item">
                <a
                  href="https://github.com/janisringli"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="social-icon" src={githubIcon} alt="" />
                </a>
              </div>
              <div className="social-item">
                <a
                  href="https://unsplash.com/@janisringli"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="social-icon" src={unsplashIcon} alt="" />
                </a>
              </div>
              <div className="social-item">
                <a href="mailto:j@nisringli" target="_blank" rel="noreferrer">
                  <img className="social-icon" src={mailIcon} alt="" />
                </a>
              </div>
              {/* <div className="social-item"> <a href="" target="_blank"><img className="social-icon" src={twitterIcon} alt="" /></a></div> */}
            </div>
          </div>
        </div>
        <div className="main-section">
          <div className="main-header"></div>
          <div className="main-image-container">
            <img className="main-image" src={janis2} alt="" />
          </div>
          <div className="description-container">
            <div className="description-title">
              Descri <p>ption</p>
            </div>
            <div className="description-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
              nisi dolorem consectetur qui explicabo aliquam, nesciunt
              voluptates doloribus quia. Nulla voluptate perferendis sequi culpa
              laborum iste similique dolorem voluptatum quaerat. Lorem ipsum
              dolor sit amet consectetur, adipisicing elit. Atque nisi dolorem
              consectetur qui explicabo aliquam, nesciunt voluptates doloribus
              quia. Nulla voluptate perferendis sequi culpa laborum iste
              similique dolorem voluptatum quaerat. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Atque nisi dolorem consectetur qui
              explicabo aliquam, nesciunt voluptates doloribus quia. Nulla
              voluptate perferendis sequi culpa laborum iste similique dolorem
              voluptatum quaerat.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutView;
