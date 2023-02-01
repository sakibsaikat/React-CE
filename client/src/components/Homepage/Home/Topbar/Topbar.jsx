import React from 'react';
import './Topbar.css';

import { IoCallOutline } from 'react-icons/io5';
import { AiOutlineMail } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import { AiFillLinkedin } from 'react-icons/ai';

const Topbar = () => {
  return (
    <div className='topbar'>

        <div className='left_links'>
        <div className='span'><IoCallOutline className='icons' /> +8801723456789</div>
        <div className='span'><AiOutlineMail className='icons' /> careerexpress.net@gmail.com</div>
        </div>

        <div className='right_links'>
        <p><FaFacebookF className='s_icons' /></p>
        <p><FiTwitter className='s_icons' /></p>
        <p><AiFillLinkedin className='s_icons' /></p>
        </div>
       
    </div>
  )
}

export default Topbar