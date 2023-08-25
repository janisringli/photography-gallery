import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeView from "./Views/HomeView/HomeView.jsx";
import AboutView from "./Views/AboutView/AboutView.jsx";
import PhotoGalleryView from "./Views/PhotoGalleryView/PhotoGalleryView.jsx";
import ImpressumView from "./Views/ImpressumView/ImpressumView.jsx";
import DatenschutzView from "./Views/DatenschutzView/DatenschutzView.jsx";
import ServiceView from "./Views/ServiceView/ServiceView.jsx";
import GalleryView from "./Views/GalleryView/GalleryView.jsx";
import UploadView from "./Views/UploadView/UploadView.jsx";


function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/about" element={<AboutView />} />
          <Route path="/" element={<HomeView />} />
          <Route path="/photogallery" element={<PhotoGalleryView />} />
          <Route path="/datenschutz" element={<ImpressumView />} />
          <Route path="/impressum" element={<DatenschutzView />} />
          <Route path="/service" element={<ServiceView />} />
          <Route path="/gallery" element={<GalleryView />} />
          <Route path="/upload" element={<UploadView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
