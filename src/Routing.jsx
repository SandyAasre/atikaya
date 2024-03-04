import { Routes, Route } from "react-router-dom";
import About from "./Component/Pages/About";
import Service from "./Component/Pages/Service";
import Project from "./Component/Pages/Project";
import Contact from "./Component/Pages/Contact";
import Feature from "./Component/Pages/Feature";
import Team from "./Component/Pages/Team";
import Testimonial from "./Component/Pages/Testimonial";
import MainBody from './Component/Pages/MainBody'
function AllRouting() {
  return (
    <Routes>
      <Route index element={<MainBody />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/project" element={<Project />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/feature" element={<Feature />} />
      <Route path="/team" element={<Team />} />
      <Route path="/testimonial" element={<Testimonial />} />
      <Route path="/main" element={<MainBody />} />

    </Routes>
  );
}

export default AllRouting;
