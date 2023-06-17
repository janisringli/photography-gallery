import Header from "../../components/Header/Header";
import SidebarTitle from "../../components/SideBarTitle/SideBarTitle";
import "./GalleryView.css";
import { useState,useRef, useEffect } from "react";
import FullsizeView from "../../Views/FullsizeView/FullsizeView.jsx"

function GalleryView() {
  const [imageUrl, setImageUrl] = useState("")
  const FullsizeWrapperRef = useRef(null);
  
   function openFullsize(event)  {
    const imageUrl = event.target.src;
    setImageUrl(imageUrl)


    FullsizeWrapperRef.current.style.display =  "block"
    
  }
  
  return (
    <div className="gallery-flex">
    
<div className="gallery-container">
<Header title="Gallery"></Header>

  <FullsizeView imageUrl={imageUrl} FullsizeWrapperRef={FullsizeWrapperRef} />

<div className="gallery-content">
    <div className="gallery-row">
    <div className="gallery-item" >
      <img onClick={openFullsize} src="https://res.cloudinary.com/dog4gebq2/image/upload/v1686950442/gallery/jpg/o192rvxratsy2ch67xcr.jpg" alt="Image 3" />
    </div>
    <div className="gallery-item">
      <img  onClick={openFullsize} src="https://res.cloudinary.com/dog4gebq2/image/upload/v1686950445/gallery/jpg/wsqvqu1ukreggmu7rzes.jpg" alt="Image 3" />
    </div>
    <div className="gallery-item">
      <img onClick={openFullsize} src="https://res.cloudinary.com/dog4gebq2/image/upload/v1686950442/gallery/jpg/lyf5tyfaxojthzykc2l0.jpg" alt="Image 3" />
    </div>
    <div className="gallery-item">
      <img onClick={openFullsize} src="https://res.cloudinary.com/dog4gebq2/image/upload/v1687019028/gallery/jpg/bprf6oo7bpsmgtw5vnhj.jpg" alt="Image 3" />
    </div>
    <div className="gallery-item">
      <img onClick={openFullsize} src="https://res.cloudinary.com/dog4gebq2/image/upload/v1687019428/gallery/jpg/ojzunbitu2rxkaptywrw.jpg" alt="Image 3" />
    </div>
    <div className="gallery-item">
      <img onClick={openFullsize} src="https://res.cloudinary.com/dog4gebq2/image/upload/v1687020152/gallery/jpg/zvisakzdgwdpxzlvejwy.jpg" alt="Image 3" />
    </div>
    <div className="gallery-item">
      <img onClick={openFullsize} src="https://res.cloudinary.com/dog4gebq2/image/upload/v1687020111/gallery/jpg/mfwvvws7hpfq1eb30bkc.jpg" alt="Image 3" />
    </div>
    <div className="gallery-item">
      <img onClick={openFullsize} src="https://res.cloudinary.com/dog4gebq2/image/upload/v1687020106/gallery/jpg/d62so7x3z1kpvpjv9ggg.jpg" alt="Image 3" />
    </div>

    </div>
    <div className="gallery-row">
    <div className="gallery-item">
      <img onClick={openFullsize} src="https://res.cloudinary.com/dog4gebq2/image/upload/v1686950272/gallery/jpg/zvwxqhf7n5udzaqiajwt.jpg" alt="Image 3" />
    </div>
    <div className="gallery-item">
      <img onClick={openFullsize} src="https://res.cloudinary.com/dog4gebq2/image/upload/v1686950444/gallery/jpg/it9rcwxuthqhlntstkce.jpg" alt="Image 3" />
    </div>
    <div className="gallery-item">
      <img onClick={openFullsize} src="https://res.cloudinary.com/dog4gebq2/image/upload/v1686950442/gallery/jpg/xpaixo74zdjhsxmozvlg.jpg" alt="Image 3" />
    </div>
    <div className="gallery-item">
      <img onClick={openFullsize} src="https://res.cloudinary.com/dog4gebq2/image/upload/v1687019029/gallery/jpg/xdwzkiic373joqmk4tox.jpg" alt="Image 3" />
    </div>
    <div className="gallery-item">
      <img onClick={openFullsize} src="https://res.cloudinary.com/dog4gebq2/image/upload/v1687019428/gallery/jpg/uvdhwkrgz0h68vzfbyx6.jpg" alt="Image 3" />
    </div>
    <div className="gallery-item">
      <img onClick={openFullsize} src="https://res.cloudinary.com/dog4gebq2/image/upload/v1687019417/gallery/jpg/xaxk2csctiocxjwkxu1p.jpg" alt="Image 3" />
    </div>
    <div className="gallery-item">
      <img onClick={openFullsize} src="https://res.cloudinary.com/dog4gebq2/image/upload/v1687020109/gallery/jpg/nojodx5pvhlk59rzybuq.jpg" alt="Image 3" />
    </div>

    <div className="gallery-item">
      <img onClick={openFullsize} src="https://res.cloudinary.com/dog4gebq2/image/upload/v1687020412/gallery/jpg/akh96w660uyqmcmpbop1.jpg" alt="Image 3" />
    </div>
    </div>
    <div className="gallery-row">
    <div className="gallery-item">
      <img onClick={openFullsize} src="https://res.cloudinary.com/dog4gebq2/image/upload/v1686950067/gallery/jpg/qzcdztcnw1iwhmgtqpph.jpg" alt="Image 3" />
    </div>
    <div className="gallery-item">
      <img onClick={openFullsize} src="https://res.cloudinary.com/dog4gebq2/image/upload/v1686950443/gallery/jpg/ed43bdidtb68vyvb2mfe.jpg" alt="Image 3" />
    </div>
    <div className="gallery-item">
      <img onClick={openFullsize} src="https://res.cloudinary.com/dog4gebq2/image/upload/v1687019029/gallery/jpg/scz7ko5uij86rexhtygu.jpg" alt="Image 3" />
    </div>
    <div className="gallery-item">
      <img onClick={openFullsize} src="https://res.cloudinary.com/dog4gebq2/image/upload/v1687019426/gallery/jpg/zkxqbx4eiamijjtij4d5.jpg" alt="Image 3" />
    </div>
    <div className="gallery-item">
      <img onClick={openFullsize} src="https://res.cloudinary.com/dog4gebq2/image/upload/v1687019424/gallery/jpg/ydidgbclh9ezewwmitpu.jpg" alt="Image 3" />
    </div>
    <div className="gallery-item">
      <img onClick={openFullsize} src="https://res.cloudinary.com/dog4gebq2/image/upload/v1687020114/gallery/jpg/udzahed4qfx2yvn8fw8t.jpg" alt="Image 3" />
    </div>
    <div className="gallery-item">
      <img onClick={openFullsize} src="https://res.cloudinary.com/dog4gebq2/image/upload/v1687020107/gallery/jpg/uqc8zy15eetkzwau3htu.jpg" alt="Image 3" />
    </div>

    </div>
</div>
  </div>
  </div>
    );
}
export default GalleryView
