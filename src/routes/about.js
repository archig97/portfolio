import React from 'react';

import Navbar from '../components/Navbar.js';
import Footer from '../components/footer.js';
import PageCentre from '../components/PageCentre.js';


const About = () => {
  return (
    <div>
      <Navbar />
      <PageCentre heading="About Me" text = "I am currently a MCS student at NC State University and have previously worked as a frontend engineer for 2 years. I am proficient in Java, SpringBoot, Python and Django and I am currently looking for software engineering interships." />
      <Footer />
    </div>
  )
}

export default About
