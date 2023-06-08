import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeView from "./Views/HomeView/HomeView.jsx";
import AboutView from "./Views/AboutView/AboutView.jsx";
import PhotoGalleryView from "./Views/PhotoGalleryView/PhotoGalleryView.jsx";
import NatureView from "./Views/NatureView/NatureView.jsx";
import FlowersView from "./Views/FlowersView/FlowersView.jsx";
import ImpressumView from "./Views/ImpressumView/ImpressumView.jsx";
import DatenschutzView from "./Views/DatenschutzView/DatenschutzView.jsx";
import ServiceView from "./Views/ServiceView/ServiceView.jsx";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/about" element={<AboutView />} />
          <Route path="/" element={<HomeView />} />
          <Route path="/photogallery" element={<PhotoGalleryView />} />
          <Route path="/photo/nature/" element={<NatureView />} />
          <Route path="/photo/flowers/" element={<FlowersView />} />
          <Route path="/datenschutz" element={<ImpressumView />} />
          <Route path="/impressum" element={<DatenschutzView />} />
          <Route path="/service" element={<ServiceView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
