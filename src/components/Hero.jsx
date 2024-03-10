import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles.js";

const Hero = () => {
  return (
    <section className="relative  w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0  
      top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 h-40 rounded-full sm:h-80 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Sachin</span>
          </h1>
          <span className={`${styles.heroSubText}mt-2 text-white-100`}>
            Skilled in integrating APIs & <br className="sm:block hidden" />{" "}
            Building reusable components using ReactJs <br />
            for Web applications.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
