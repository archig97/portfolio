import React from 'react';

import Navbar from '../components/Navbar.js';
import Footer from '../components/footer.js';
import PageCentre from '../components/PageCentre.js';

const Project = () => {
  return (
    <div>
      <Navbar />
      <PageCentre heading=" PROJECTS " text="Some of my recent works"/>
      <Footer />
    </div>
  )
}

export default Project
