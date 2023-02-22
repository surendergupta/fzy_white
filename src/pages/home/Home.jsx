import React from 'react';
import './home.scss';
import Navbar from '../../components/navbar/Navbar';
import Top from '../../components/sections/top/Top';
import Benefit from '../../components/sections/benefits/Benefit';
import Product from '../../components/sections/product/Product';
import Roadmap from '../../components/sections/roadmap/Roadmap';
import About from '../../components/sections/about/About';
import Token from '../../components/sections/token/Token';
import Slider from '../../components/sections/slider/Slider';
import Subscription from '../../components/sections/subscription/Subscription';
import Footer from '../../components/sections/footer/Footer';

const Home = () => {
  return (
    <div className='home'>
        <div className='homeConatiner'>
            <Navbar />
            <Top />
            <Benefit />
            <Product />
            <Roadmap />
            <About />
            <Token />
            <Slider />
            <Subscription />
            <Footer />
        </div>
    </div>
  )
}

export default Home;