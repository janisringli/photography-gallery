import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeView from "./Views/HomeView/HomeView.jsx";
import AboutView from "./Views/AboutView/AboutView.jsx";
import PhotoGalleryView from "./Views/PhotoGalleryView/PhotoGalleryView.jsx";
import NatureView from "./Views/NatureView/NatureView.jsx";
import FlowersView from "./Views/FlowersView/FlowersView.jsx";
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
          <Route path="/gallery" element={<GalleryView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
