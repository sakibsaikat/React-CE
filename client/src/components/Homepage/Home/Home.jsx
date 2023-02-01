import React from 'react';
import './Home.css';
import Top from './Topbar/Topbar';
import Header from './Header/Header';
import Slider from './Slider/Slider';

const Home = () => {
  return (
    <div className='home'>
        <Top />
        <Header />
        <Slider />
    </div>
  )
}

export default Home