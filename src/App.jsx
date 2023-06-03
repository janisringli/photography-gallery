import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeView from "./Views/HomeView/HomeView.jsx";
import AboutView from "./Views/AboutView/AboutView.jsx";
import PhotoGalleryView from "./Views/PhotoGalleryView/PhotoGalleryView.jsx";
import NatureView from "./Views/NatureView/NatureView.jsx";


function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/about" element={<AboutView />} />
          <Route path="/" element={<HomeView />} />
          <Route path='/photogallery' element={<PhotoGalleryView />} />
          <Route path="/photo/nature/" element={<NatureView/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
