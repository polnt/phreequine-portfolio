import { Route, Routes } from "react-router-dom";

import Home from './views/Home';
import Projects from './views/Projects';
import Contact from './views/Contact';
import About from './views/About';

const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/work" element={<Projects />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/about" element={<About />} />
  </Routes>
);

export default Router;
