import "./UploadView.css";
import Header from "../../components/Header/Header";
import SidebarTitle from "../../components/SideBarTitle/SideBarTitle";
import { useState } from "react";
import axios from 'axios'

function UploadView() {
  const [previewSrc, setPreviewSrc] = useState('');
  const [isImageSelected, setIsImageSelected] = useState(false);
  const [imageSelected ,setImageSelected] = useState("");
  const [chosenFormat, setChosenFormat] = useState("")

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    setImageSelected(event.target.files[0])

    reader.onload = (event) => {
      setPreviewSrc(event.target.result);
    };

    reader.readAsDataURL(file);
    setIsImageSelected(true);
  };

  const uploadImage = () => {
    console.log("Form submitted!");
    console.log(imageSelected);
  
    const formData = new FormData();
    formData.append("file", imageSelected);
    //upload for jpg
    if(chosenFormat == "jpg"){
    formData.append("upload_preset", "trw55lma");
    }
    if(chosenFormat == "png"){
    formData.append("upload_preset", "trw55lma"); //TODO: Change the upload_preset to one with png

    }
  
    axios
      .post("https://api.cloudinary.com/v1_1/dog4gebq2/image/upload", formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Upload failed:", error);
      });
  };

  return (
    <div className="about-wrapper">
      <Header title="" />
      <div className="about-content">
        <SidebarTitle title="Upload" />
        <div className="main-section">
          {previewSrc && (
            <img
              id="preview"
              src={previewSrc}
              alt="Preview"
              style={{
                maxWidth: '200px',
                maxHeight: '200px',
                marginBottom: '10px',
              }}
            />
          )}
          <label htmlFor="images" className="drop-container">
            <span className="drop-title">Drop files here</span> or
            <input type="file" id="images" accept="image/*" required onChange={handleFileChange} />
          </label>
          {isImageSelected && <button onClick={(event) => {
            uploadImage(event.target.files);
          }}>Submit</button>}
        </div>
      </div>
    </div>
  );
}

export default UploadView;
