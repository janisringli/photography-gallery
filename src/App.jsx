import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeView from "./viewComponents/HomeView/HomeView.jsx";
import AboutView from "./viewComponents/AboutView/AboutView.jsx";
import ImpressumView from "./viewComponents/ImpressumView/ImpressumView.jsx";
import DatenschutzView from "./viewComponents/DatenschutzView/DatenschutzView.jsx";
import GalleryView from "./viewComponents/GalleryView/GalleryView.jsx";


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
