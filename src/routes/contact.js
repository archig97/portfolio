import React from 'react';

import Navbar from '../components/Navbar.js';
import Footer from '../components/footer.js';
import PageCentre from '../components/PageCentre.js';


const Contact = () => {
  return (
    <div>
      <Navbar />
      <PageCentre heading="CONTACT ME" text="archismitaghosh@yahoo.com /
      aghosh7@ncsu" />
      <Footer />
    </div>
  )
}

export default Contact
