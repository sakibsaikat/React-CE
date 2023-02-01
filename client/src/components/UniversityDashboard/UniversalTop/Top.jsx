import React from 'react';
import './Top.css';

import { BiSearchAlt } from 'react-icons/bi';
import { MdOutlineNotificationImportant } from 'react-icons/md';
import { TbMessageCircle } from 'react-icons/tb';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

import AdminImg from './../../../Assets/admin.png';
import CareerImg from './../../../Assets/career-choice.png';
import Video from './../../../Assets/scene.mp4';

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


    </div>
  )
}

export default Top