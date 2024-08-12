
import React from 'react';
import Sidebar from './Components/Sidebar';
import About from './Components/About';
import Experience from './Components/Internships';
import Projects from './Components/Projects';
import Skills from './Components/Skills'
import './App.css';

const App = () => (
  <div className="app">
    <Sidebar />
    <div className="root">
      <About />
      <Experience />
      <Projects />
      <Skills/>
      
    </div>
  </div>
);

export default App;

