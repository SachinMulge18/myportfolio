import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Hero, Navbar, About, Experience, Tech, Work } from "./components";
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Work />
        <span>FeedBack</span>
        <div className="relative z-0">
          <span>contack</span>
          <span>starcanvas</span>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
