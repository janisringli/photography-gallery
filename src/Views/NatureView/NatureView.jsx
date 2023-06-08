import "./NatureView.css";
import Header from "../../components/Header/Header";
import SidebarTitle from "../../components/SideBarTitle/SideBarTitle";
import DiscriptionBox from "../../components/DiscriptionBox/DiscriptionBox";
import Image1 from "../../assets/images/gallery/DJI_0281.jpg";
import Image2 from "../../assets/images/gallery/7S0A0447.jpg";

import Image3 from "../../assets/images/7S0A0502.jpg";
import Image4 from "../../assets/images/7S0A0284.jpg";
import Image5 from "../../assets/images/IMG_7074.jpg";

import ImageSlider from "../../components/ImageSlider/ImageSlider";

function NatureView() {
  const imageUrls = [Image1, Image2, Image3, Image4, Image5];
  return (
    <div className="about-wrapper">
      <Header title="" />
      <div className="about-content">
        <SidebarTitle title="Nature" />
        <div className="main-section">
          <div className="main-header"></div>
          <ImageSlider images={imageUrls}></ImageSlider>
          <DiscriptionBox
            content=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque nisi
        dolorem consectetur qui explicabo aliquam, nesciunt voluptates doloribus
        quia. Nulla voluptate perferendis sequi culpa laborum iste similique
        dolorem voluptatum quaerat. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Atque nisi dolorem consectetur qui explicabo aliquam,
        nesciunt voluptates doloribus quia. Nulla voluptate perferendis sequi
        culpa laborum iste similique dolorem voluptatum quaerat. Lorem ipsum
        dolor sit amet consectetur, adipisicing elit. Atque nisi dolorem
        consectetur qui explicabo aliquam, nesciunt voluptates doloribus quia.
        Nulla voluptate perferendis sequi culpa laborum iste similique dolorem
        voluptatum quaerat."
          ></DiscriptionBox>
        </div>
      </div>
    </div>
  );
}
export default NatureView;
