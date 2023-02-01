import React from 'react';
import './Sidebar.css';
import logo from './../../../Assets/logo.png';
import { Link } from 'react-router-dom';

import { useState } from 'react';

import { IoMdSpeedometer } from 'react-icons/io';
import { IoCreateOutline } from 'react-icons/io5';
import { CiViewList } from 'react-icons/ci';
import { BiMessageAdd } from 'react-icons/bi'; 
import { SiGooglescholar } from 'react-icons/si'; 
import { BsGraphUp } from 'react-icons/bs'; 
import { FaMoneyBillAlt } from 'react-icons/fa'; 
import { AiFillContacts } from 'react-icons/ai'; 
import { BsQuestionCircle } from 'react-icons/bs'; 
import { MdLogout } from 'react-icons/md'; 

const Sidebar = () => {

  const [selectedItem, setselectedItem] = useState('dash');




  return (
    <div className='sidebar grid'>

        <div className='logoDiv flex'>
          <img src={logo} alt='logo' />
          <h2>Career Express.</h2>
        </div>

        <div className='menuDiv'>

          <h3 className='divTitle'>QUICK MENU</h3>

          <ul className='menuLists grid'>

              <li className={selectedItem==='dash' ? 'listItem selected': 'listItem'}>
                <Link onClick={()=>{ setselectedItem('dash') }} to='/' className='menuLink flex selectedItem'>
                  <IoMdSpeedometer className='icon' />
                  <span className='smallText'>Dashboard</span>
                </Link>
              </li>

              
              <li className={selectedItem==='create_post' ? 'listItem selected': 'listItem'}>
                <Link onClick={()=>{ setselectedItem('create_post') }} to='/create' className='menuLink flex'>
                  <IoCreateOutline className='icon' />
                  <span className='smallText'>Create Post</span>
                </Link>
              </li>

              <li className={selectedItem==='posts' ? 'listItem selected': 'listItem'}>
                <Link onClick={()=>{ setselectedItem('posts') }} to='/posts' className='menuLink flex'>
                  <CiViewList className='icon' />
                  <span className='smallText'>Posts</span>
                </Link>
              </li>

              <li className={selectedItem==='create_waiver' ? 'listItem selected': 'listItem'}>
                <Link onClick={()=>{ setselectedItem('create_waiver') }} to='/create_waiver' className='menuLink flex'>
                  <BiMessageAdd className='icon' />
                  <span className='smallText'>Add Waiver Details</span>
                </Link>
              </li>

              <li className={selectedItem==='waivers' ? 'listItem selected': 'listItem'}>
                <Link onClick={()=>{ setselectedItem('waivers') }} to='/waivers' className='menuLink flex'>
                  <SiGooglescholar className='icon' />
                  <span className='smallText'>Waiver Info</span>
                </Link>
              </li>


          </ul>


        </div>

        <div className='settingDiv'>

        
          <h3 className='divTitle'>SETTING</h3>

          <ul className='menuLists grid'>

              <li className='listItem'>
                <Link to='/' className='menuLink flex'>
                  <BsGraphUp className='icon' />
                  <span className='smallText'>Graphs Charts</span>
                </Link>
              </li>

              <li className='listItem'>
                <Link to='/' className='menuLink flex'>
                  <FaMoneyBillAlt className='icon' />
                  <span className='smallText'>Billing</span>
                </Link>
              </li>

              <li className='listItem'>
                <Link to='/' className='menuLink flex'>
                  <AiFillContacts className='icon' />
                  <span className='smallText'>Contact</span>
                </Link>
              </li>

              <li className='listItem'>
                <Link to='/logout' className='menuLink flex'>
                  <MdLogout className='icon' />
                  <span className='smallText'>Logout</span>
                </Link>
              </li>
            
          </ul>

        </div>


        <div className='sideCard'>

        <BsQuestionCircle className='icon' />

        <div className='cardContent'>
          <div className='circle1'></div>
          <div className='circle2'></div>

          <h3>Help Center</h3>
          <p>Having trouble in Career Express, please contact us for more question.</p>
          <button className='btn'>Go to help center</button>
        </div>

        </div>




    </div>
  )
}

export default Sidebar