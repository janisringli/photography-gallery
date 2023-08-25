import "./AboutViews.css";
import Header from "../../components/Header/Header";
import githubIcon from "../../assets/svg/github.svg";
import instaIcon from "../../assets/svg/instagram.svg";
import unsplashIcon from "../../assets/svg/unsplash.svg";
import janis2 from "../../assets/images/janis2.jpg";
import mailIcon from "../../assets/svg/mail.svg";
import SidebarTitle from "../../components/AnnoyingTitle/AnnoyingTitle";
import DiscriptionBox from "../../components/DiscriptionBox/DiscriptionBox";

function AboutView() {
  return (
    <div className="about-wrapper">
      <Header title="" />
      <div className="about-content">
        <div className="title-section">
          <SidebarTitle title="About" />
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
          <DiscriptionBox
            content=" I'm Janis, a passionate photographer who has embarked on an incredible journey to capture the beauty and essence of the world through my lens. Photography is not just a hobby for me; it's a way of life—a means to express my creativity and share my unique perspective with others. This website is the result of countless hours spent chasing the perfect shot, honing my skills, and pouring my heart and soul into each frame. I created this platform to showcase my photography and invite you to join me on this visual adventure. Through my lens, I strive to capture moments that tell stories—moments filled with raw emotions, hidden details, and breathtaking beauty. Whether it's the vibrant colors of a stunning sunset, the candid expressions of a street scene, or the intricate patterns of nature, each photograph holds a tale waiting to be discovered.



"
          ></DiscriptionBox>
        </div>
      </div>
    </div>
  );
}
export default AboutView;
