import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StyleNavbar from "./header/StyledNavbar" 
import Aboutus from "./routes/Aboutus";
import Summary from "./routes/Summary";
import Project from "./routes/Project";
import Mainrespo from "./routes/Mainrespo";
import Home from "./Home";
import Footer from './Footer';
import React from "react"
// import Contact from './routes/Contact';
function App() {
  return (
    <div>
    <BrowserRouter>
      <StyleNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Summary" element={<Summary />} /> 
        <Route path="/Project" element={<Project />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/Mainresponsibilitie" element={<Mainrespo />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;