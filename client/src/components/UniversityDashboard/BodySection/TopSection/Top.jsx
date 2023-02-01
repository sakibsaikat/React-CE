import React from 'react';
import './Top.css';

import { BiSearchAlt } from 'react-icons/bi';
import { MdOutlineNotificationImportant } from 'react-icons/md';
import { TbMessageCircle } from 'react-icons/tb';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

import AdminImg from './../../../../Assets/admin.png';
import CareerImg from './../../../../Assets/career-choice.png';
import Video from './../../../../Assets/scene.mp4';

const Top = () => {
  return (
    <div className='topSection'>
      <div className='headerSection flex'>

      <div className='title'>
        <h1>Welcome to Career Express.</h1>
        <p>Hello Sara, Welcome back!</p>
      </div>

      <div className='searchBar flex'>
        <input type='text' placeholder='Search Dashboard' />
        <BiSearchAlt className='icon' />
      </div>

      <div className='adminDiv flex'>
        <TbMessageCircle className='icon' />
        <MdOutlineNotificationImportant className='icon' />

        <div className='adminImg'>
            <img src={AdminImg} alt='admin_img' />
        </div>

      </div>

      </div>

      <div className='cardSection flex'>

      <div className='rightCard flex'>
        <h1>Offer attractive waivers to newbees.</h1>
        <p>Education is the powerhouse of all inventions and excellence.</p>

        <div className='buttons flex'>
          <button className='btn'>Explore more</button>
          <button className='btn transparent'>Top Posts</button>
        </div>

        <div className='videoDiv'>
          <video src={Video} muted autoPlay loop></video>
        </div>

      </div>

      <div className='leftCard flex'>
        <div className='main flex'>

          <div className='textDiv'>
            <h1>Overview</h1>

            <div className='flex'>
              <span>
                Today <br /> <small>4 Posts</small>
              </span>
              <span>
                This Month <br /> <small>109 Posts</small>
              </span>
            </div>

            <span className='flex link'>
                Go to my posts <BsFillArrowRightCircleFill className='icon'/>
            </span>


          </div>

          <div className='imgDiv'>
              <img src={CareerImg} alt='career_img' />
          </div>

        </div>
      </div>

      </div>

    </div>
  )
}

export default Top