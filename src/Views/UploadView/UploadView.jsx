import "./UploadView.css";
import Header from "../../components/Header/Header";
import SidebarTitle from "../../components/SideBarTitle/SideBarTitle";
import { useState } from "react";

function UploadView() {
  const [previewSrc, setPreviewSrc] = useState('');
  const [isImageSelected, setIsImageSelected] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      setPreviewSrc(event.target.result);
    };

    reader.readAsDataURL(file);
    setIsImageSelected(true);
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log("Form submitted!");
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
          {isImageSelected && <button onClick={handleSubmit}>Submit</button>}
        </div>
      </div>
    </div>
  );
}

export default UploadView;
