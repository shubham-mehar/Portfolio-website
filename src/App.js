import React from "react";
import "./index.css";
import Home from './routes/Home';
import About from './routes/About';
import Project from './routes/Project';
import Contact from './routes/Contact';
import Skill from "./routes/Skill";
import PageNotFound from "./routes/PageNotFound";
import {Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/Project" element={ <Project/> } />
        <Route path="/About" element={ <About/> } />
        <Route path="/Skill" element={<Skill/>} />
        <Route path="/Contact" element={ <Contact/> } />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
