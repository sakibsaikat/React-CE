import React from 'react';
import './Listing.css';

import {BsArrowRightShort} from 'react-icons/bs';


import Im1 from './../../../../Assets/p1.jpg';
import Im2 from './../../../../Assets/p2.jpg';
import Im3 from './../../../../Assets/p3.jpg';
import Im4 from './../../../../Assets/p4.jpg';
import Im5 from './../../../../Assets/p5.jpg';
import User from './../../../../Assets/user.jpg';

const Listing = () => {
  return (
    <div className='listingSection'>

    <div className='heading flex'>
      <h1>My Features</h1>
      <button className='btn flex'>See all <BsArrowRightShort className='icon' /></button>
    </div>

  

    </div>
  )
}

export default Listing