import React from 'react';
import './Body.css';
import Top from './TopSection/Top';
import Listing from './ListingSection/Listing';
import Activity from './ActivitySection/Activity';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Body = () => {
  return (
    <div className='mainContent'>
      <Top />

      <div className='bottom flex'>
        <Listing />
        <Activity />
      </div>

    </div>
  )
}

export default Body