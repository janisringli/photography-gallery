import "./FlowersView.css";
import Header from "../../components/Header/Header";
import githubIcon from "../../assets/svg/github.svg";
import instaIcon from "../../assets/svg/instagram.svg";
import unsplashIcon from "../../assets/svg/unsplash.svg";
import janis2 from "../../assets/images/janis2.jpg";
import mailIcon from "../../assets/svg/mail.svg";
import SidebarTitle from "../../components/SideBarTitle/SideBarTitle";
import DiscriptionBox from "../../components/DiscriptionBox/DiscriptionBox";
import Image1 from "../../assets/images/gallery/DJI_0281.jpg" 
import Image2 from "../../assets/images/gallery/7S0A0447.jpg"

import Image3 from "../../assets/images/7S0A0502.jpg"


import ImageSlider from "../../components/ImageSlider/ImageSlider";




function FlowersView() {
    
    const imageUrls = [
        Image1,
        Image2,
        Image3
    ]
  return (
    <div className="about-wrapper">
      <Header title="" />
      <div className="about-content">
       <SidebarTitle title="Flowers" />
        <div className="main-section">
          <div className="main-header"></div>
          
          <div class="elfsight-app-430b03d3-1b0a-400b-92ac-2d925ecf2c97"></div>
          
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
export default FlowersView;
