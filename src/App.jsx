import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeView from "./ViewComponents/HomeViews/HomeViews";
import AboutView from "./ViewComponents/AboutViews/AboutViews";
import ImpressumView from "./ViewComponents/ImpressumView/ImpressumView";
import DatenschutzView from "./ViewComponents/DatenschutzView/DatenschutzView";
import GalleryView from "./ViewComponents/GalleryView/GalleryView";


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
