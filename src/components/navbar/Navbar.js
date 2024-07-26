import React from 'react'
import './Navbar.css'
import { FcLike } from "react-icons/fc";
import { FaUserPlus } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import Banner from '../banner/Banner';
import { Link } from 'react-router-dom';
import { BiSearchAlt2 } from "react-icons/bi";



function Navbar() {
  return (
    <div className='Navbar-container'>
      <Banner/>
      <div className="logo"></div>
      <div className="search-container">
        <div className="search-container-input">
          <input type="text" placeholder='Qidiruv...'/>
        </div>
        <div className="search-container-icons-icon">
          <BiSearchAlt2/>
        </div>
      </div>

      <div className="fakeP"></div>

      
      <div className="search-container-icon-link">
        <Link to={'./hedernavbar'}>
        <BiSearchAlt2 className='search-container-icon-link-icons'/>
        </Link>
      </div>


      <div className="main-section-bar">
      <div className="main-section-bar-item1">
      <Link to={'./like'} >
        <div className="main-section-bar-item1-icon-box">
          <FcLike/>
        </div>
        <div className="main-section-bar-item1-text-box">
          <p>like</p>
          
        </div>
        </Link>
      </div>
      <div className="main-section-bar-item2">
      <Link to={'./card'}>
      <div className="main-section-bar-item2-icon-box">
          <TiShoppingCart/>
        </div>
        <div className="main-section-bar-item2-text-box">
          <p>cart</p>
        </div>
        </Link>
      </div>
      <div className="main-section-bar-item3">
        <Link to={'/login'}>
        <div className="main-section-bar-item3-icon-box">
          <FaUserPlus/>
        </div>
        <div className="main-section-bar-item3-text-box">
          <p>User</p> 
        </div>
        </Link>
      
      </div>
      </div>
    </div>
  )
}

export default Navbar