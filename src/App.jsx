import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeView from "./views/HomeView/HomeView.jsx";
import AboutView from "./views/AboutView/AboutView.jsx";
import PhotoGalleryView from "./views/PhotoGalleryView/PhotoGalleryView.jsx";
import ImpressumView from "./views/ImpressumView/ImpressumView.jsx";
import DatenschutzView from "./views/DatenschutzView/DatenschutzView.jsx";
import ServiceView from "./views/ServiceView/ServiceView.jsx";
import GalleryView from "./views/GalleryView/GalleryView.jsx";


function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/about" element={<AboutView />} />
          <Route path="/" element={<HomeView />} />
          <Route path="/datenschutz" element={<ImpressumView />} />
          <Route path="/impressum" element={<DatenschutzView />} />
          <Route path="/gallery" element={<GalleryView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
