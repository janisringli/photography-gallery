import Header from "../../components/Header/Header";
import SidebarTitle from "../../components/AnnoyingTitle/AnnoyingTitle";
import "./GalleryView.css";
import { useState,useRef, useEffect } from "react";
import FullsizeView from "../FullsizeView/FullsizeView.jsx"
import axios from "axios";



function GalleryView() {
  const [imageUrl, setImageUrl] = useState("")
  const [images, setImages] = useState([])
  const FullsizeWrapperRef = useRef(null);
  
   function openFullsize(event)  {
    const imageUrl = event.target.src;
    setImageUrl(imageUrl)


    FullsizeWrapperRef.current.style.display =  "block"
    
  
  }

  useEffect(() => {
    axios.get("https://api.cloudinary.com/v1_1/dog4gebq2/resources/image?type=upload&prefix=gallery/jpg/&max_results=500", {
      headers: {
        'Authorization': 'Basic ' + btoa(`${import.meta.env.VITE_APP_CLOUDINARY_API_KEY}:${import.meta.env.VITE_APP_CLOUDINARY_API_SECRET}`)
        
      },
    })


    .then((res) => {
      console.log(res.data.resources);
      setImages(res.data.resources)
      for (let i = 0; i < res.data.resources.length; i++) {
        console.log(res.data.resources[i].secure_url);
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);


  const numColumns = 3; // Number of columns



  return (
    <div className="gallery-flex">
    
<div className="gallery-container">
<Header title="Gallery"></Header>

  <FullsizeView imageUrl={imageUrl} FullsizeWrapperRef={FullsizeWrapperRef} />

<div className="gallery-content">





{Array.from({ length: numColumns }, (_, columnIndex) => (
  <div className="gallery-row" key={columnIndex}>
    
    {images.map((image, index) => {
      console.log(image)
      let thumbnailUrl = image.secure_url.replace("/upload","/upload/c_thumb,w_400");

      //First Column is copyrighted
      if(index % 3 === 0){
        thumbnailUrl = image.secure_url.replace("/upload","/upload/b_rgb:000000,c_limit,h_200,o_90,w_400/ar_1:1,b_rgb:000000,c_lfill,co_rgb:ffffff,l_text:arial_80:®,o_60,r_max");
        console.log(thumbnailUrl)
      }
      if (index % numColumns !== columnIndex){
       return null;
      };
      
      return (
        <div className="gallery-item" key={index}>
          <img
            src={thumbnailUrl}
            alt={image.public_id}
            onClick={openFullsize}
          />
        </div>
      );
    })}
  </div>
))}
    

  

</div>
  </div>
  </div>
    );
}
export default GalleryView
