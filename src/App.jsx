import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import ServicePage from "./pages/ServicePage";
import TeamPage from "./pages/TeamPage";
import TestimonialPage from "./pages/TestimonialPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Subscribe from "./components/Subscribe";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/testimonial" element={<TestimonialPage />} />
      </Routes>
      <Subscribe />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
