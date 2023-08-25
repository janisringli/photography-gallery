import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeView from "./viewComponents/HomeView/HomeView";
import AboutView from "./viewComponents/AboutView/AboutView";
import ImpressumView from "./viewComponents/ImpressumView/ImpressumView";
import DatenschutzView from "./viewComponents/DatenschutzView/DatenschutzView";
import GalleryView from "./viewComponents/GalleryView/GalleryView";


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
