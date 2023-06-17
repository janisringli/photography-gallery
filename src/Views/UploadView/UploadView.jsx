import "./UploadView.css";
import Header from "../../components/Header/Header";
import SidebarTitle from "../../components/SideBarTitle/SideBarTitle";
import { useEffect, useState } from "react";
import axios from "axios";

function UploadView() {
  const [previewSrc, setPreviewSrc] = useState("");
  const [isImageSelected, setIsImageSelected] = useState(false);
  const [imageSelected, setImageSelected] = useState([]);
  const [selectedFormat, setSelectedFormat] = useState("");

  useEffect(() => {
    const newFormat = event.target.checked ? "JPG" : "PNG";
    setSelectedFormat(newFormat);
  }, []);

  const handleToggle = (event) => {
    const newFormat = event.target.checked ? "JPG" : "PNG";
    setSelectedFormat(newFormat);
    console.log(selectedFormat);
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    const selectedImages = [];
    const readers = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      selectedImages.push(file);

      const reader = new FileReader();

      reader.onload = (event) => {
        // Implement your logic to preview each image if needed
      };

      reader.readAsDataURL(file);
      readers.push(reader);
    }

    setImageSelected(selectedImages);
    setIsImageSelected(true);
  };

  const uploadImage = () => {
    console.log("Form submitted!");
    console.log(imageSelected);

    const formData = new FormData();
/*
    for (let i = 0; i < imageSelected.length; i++) {
      formData.append("file", imageSelected[i]);
      formData.append("cloud_name", "dog4gebq2");
       // Replace with the desired folder name
      if (selectedFormat === "JPG") {
        formData.append("upload_preset", "jpgEndpoint");
        formData.append("folder", "gallery/jpg");

      } else if (selectedFormat === "PNG") {
        formData.append("upload_preset", "pngEndpoint");
        formData.append("folder", "gallery/png");

      }

      fetch("https://api.cloudinary.com/v1_1/dog4gebq2/image/upload/", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }


  */
  //if not accepted :)

  for (let i = 0; i < imageSelected.length; i++) {
    formData.append("file", imageSelected[i]);
    formData.append("cloud_name", "dog4gebq2");
    
      formData.append("upload_preset", "jpgEndpoint");
      formData.append("folder", "gallery/jpg");


    fetch("https://api.cloudinary.com/v1_1/dog4gebq2/image/upload/", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });

      console.log("first call complete")
      formData.append("file", imageSelected[i]);
  formData.append("cloud_name", "dog4gebq2");
  formData.append("upload_preset", "pngEndpoint");
      formData.append("folder", "gallery/png");
      fetch("https://api.cloudinary.com/v1_1/dog4gebq2/image/upload/", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
      console.log("second call complete")
  }
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
                maxWidth: "200px",
                maxHeight: "200px",
                marginBottom: "10px",
              }}
            />
          )}
          <label htmlFor="images" className="drop-container">
            <span className="drop-title">Drop files here</span> or
            <input
              type="file"
              id="images"
              accept="image/*"
              multiple="multiple"
              required
              onChange={handleFileChange}
            />
          </label>
          {isImageSelected && (
            <div className="upload-config">
              <div className="btn-container">
                <label className="switch btn-color-mode-switch">
                  <input
                    value="1"
                    id="color_mode"
                    name="color_mode"
                    type="checkbox"
                    onChange={handleToggle}
                  />
                  <label
                    className="btn-color-mode-switch-inner"
                    data-off="PNG"
                    data-on="JPG"
                    htmlFor="color_mode"
                  ></label>
                </label>
              </div>
              <button onClick={uploadImage}>
                <span className="button_top">Submit</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default UploadView;
