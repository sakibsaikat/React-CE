import React from 'react';
import './Header.css';
import logo from './../../../../Assets/ce_logo.png';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div className='header_container'>
        
        <div className='logo_div'>
            <img src={logo} alt='logo' />
        </div>
        <div className='navbar'>
            <ul>
                <li><Link className='a' to='/home'>Home</Link></li>
                <li><Link className='a' to='/about'>About Us</Link></li>
                <li><Link className='a' to='/admission'>Admission</Link></li>
                <li><Link className='a' to='/training'>Training</Link></li>
                <li><Link className='a' to='/contact'>Contact</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Header