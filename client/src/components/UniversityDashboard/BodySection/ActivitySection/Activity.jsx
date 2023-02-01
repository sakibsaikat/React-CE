import React from 'react';
import './Activity.css';

import {BsArrowRightShort} from 'react-icons/bs';

const Activity = () => {
  return (
    <div className='activitySection'>

      <div className='heading flex'>
        <h1>My Activity</h1>
        <button className='btn flex'>See all <BsArrowRightShort className='icon' /></button>
      </div>

  

    </div>
  )
}

export default Activity