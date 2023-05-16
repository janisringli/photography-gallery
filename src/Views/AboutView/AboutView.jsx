import "./AboutView.css"
import Header from "../../components/Header/Header"
import githubIcon from "../../assets/svg/github.svg"
import instaIcon from "../../assets/svg/instagram.svg"
import unsplashIcon from "../../assets/svg/unsplash.svg"
import twitterIcon from "../../assets/svg/twitter.svg"
import janis2 from "../../assets/images/janis2.jpg"


function AboutView(){
    return(
        <div className="about-wrapper">
            <Header title=""/>
            <div className="about-content">
            <div className="title-section">
                <div className="about-title">About</div>
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
                <div className="main-header"></div>
                <div className="main-image-container">
                    <img className="main-image" src={janis2} alt="" />
                </div>
                <div className="description-container">
                    <div className="description-title"> Descri <p>ption</p> </div>
                    <div className="description-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque nisi dolorem consectetur qui explicabo aliquam, nesciunt voluptates doloribus quia. Nulla voluptate perferendis sequi culpa laborum iste similique dolorem voluptatum quaerat. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque nisi dolorem consectetur qui explicabo aliquam, nesciunt voluptates doloribus quia. Nulla voluptate perferendis sequi culpa laborum iste similique dolorem voluptatum quaerat. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque nisi dolorem consectetur qui explicabo aliquam, nesciunt voluptates doloribus quia. Nulla voluptate perferendis sequi culpa laborum iste similique dolorem voluptatum quaerat.</div>
                </div>

            </div>
            </div>
        </div>
    )
}
export default AboutView
