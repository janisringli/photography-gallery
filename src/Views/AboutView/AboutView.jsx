import "./AboutView.css"
import Header from "../../components/Header/Header"
import githubIcon from "../../assets/svg/github.svg"
import instaIcon from "../../assets/svg/instagram.svg"
import unsplashIcon from "../../assets/svg/unsplash.svg"
import twitterIcon from "../../assets/svg/twitter.svg"


function AboutView(){
    return(
        <div className="about-wrapper">
            <Header title=""/>
            <div className="about-content">
            <div className="title-section">
                <div className="text-title about-title">About</div>
                <div className="footer">
                    <div className="socials">
                        <div className="social-item"> <img className="social-icon" src={instaIcon} alt="" /> </div>
                        <div className="social-item"> <img className="social-icon" src={githubIcon} alt="" /></div> 
                        <div className="social-item"><img className="social-icon" src={unsplashIcon} alt="" /></div>
                        <div className="social-item"><img className="social-icon" src={twitterIcon} alt="" /></div>
                    </div>
                </div>
            </div>
            <div className="main-section">
                hello

            </div>
            </div>
        </div>
    )
}
export default AboutView
