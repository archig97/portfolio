import React from 'react';
import Navbar from '../components/Navbar.js';
import MainPageCentre from '../components/MainPageCentre.js'
import Footer from '../components/footer.js';

const Home = () => {
    return(
        <div>
            <Navbar />
            <MainPageCentre />
            <Footer />
        </div>
    )
}

export default Home;