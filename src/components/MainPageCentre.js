import "./MainPageCentre.css";

import React from 'react';

import IntroImg from "../assets/bg-img.avif";
import { Link } from "react-router-dom";

const MainPageCentre = () => {
  return (
    <div className="page-center">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="IntroImg"/>
        </div>
      <div className="content">
        <h1>ARCHISMITA GHOSH</h1>
        <p>Hi, I'm a Computer Science Masters student at North Carolina State University</p>
        <div>
        <Link to="/project" className="btn">PROJECTS</Link>
        <Link to="/contact" className="btn btn-light">CONTACT</Link>
      </div>
      </div>
      
    </div>
  )
}

export default MainPageCentre
