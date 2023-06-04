import "./NatureView.css";
import Header from "../../components/Header/Header";
import githubIcon from "../../assets/svg/github.svg";
import instaIcon from "../../assets/svg/instagram.svg";
import unsplashIcon from "../../assets/svg/unsplash.svg";
import janis2 from "../../assets/images/janis2.jpg";
import mailIcon from "../../assets/svg/mail.svg";
import SidebarTitle from "../../components/SideBarTitle/SideBarTitle";
import DiscriptionBox from "../../components/DiscriptionBox/DiscriptionBox";

function NatureView() {
  return (
    <div className="about-wrapper">
      <Header title="" />
      <div className="about-content">
       <SidebarTitle title="Nature" />
        <div className="main-section">
          <div className="main-header"></div>
          <div className="main-image-container">
            <img className="main-image" src="" alt="" />
          </div>
          <DiscriptionBox content=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque nisi
        dolorem consectetur qui explicabo aliquam, nesciunt voluptates doloribus
        quia. Nulla voluptate perferendis sequi culpa laborum iste similique
        dolorem voluptatum quaerat. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Atque nisi dolorem consectetur qui explicabo aliquam,
        nesciunt voluptates doloribus quia. Nulla voluptate perferendis sequi
        culpa laborum iste similique dolorem voluptatum quaerat. Lorem ipsum
        dolor sit amet consectetur, adipisicing elit. Atque nisi dolorem
        consectetur qui explicabo aliquam, nesciunt voluptates doloribus quia.
        Nulla voluptate perferendis sequi culpa laborum iste similique dolorem
        voluptatum quaerat."></DiscriptionBox>
        </div>
      </div>
    </div>
  );
}
export default NatureView;
