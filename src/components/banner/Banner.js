import React from 'react'
import './Banner.css'
import { useState } from 'react'
import { FiMenu } from "react-icons/fi";
import { FaX } from "react-icons/fa6";
import { MdHome } from "react-icons/md";
import { Link } from 'react-router-dom';
import { SiYoutubeshorts } from "react-icons/si";
import { RiMenuUnfold2Fill } from "react-icons/ri";
import { IoSettings } from "react-icons/io5";
import Settings from '../../pages/Settings';



function Banner() {


   
  const[menuOpen, setMenuOpen] = useState(false)
  return (
    <div className='Banner'>
      
              {!menuOpen&& <FiMenu className="banner-icons" onClick={()=>setMenuOpen(true)}/>}
              {menuOpen&& <FaX className='banner-icons' onClick={()=>setMenuOpen(false)}/>}
            
              
          {menuOpen&&
            <div className="navbar-menu-open" >
              
              <div className="home-pages">
         <Link to={'./'}>
        <div className="Home1" >
        <h1>Home</h1>
        </div>
        </Link>
        </div>


        <div className="shorts-pages">
         <Link to={'./about'}>
        <div className="shorts" >
        <h1>About</h1>
        </div>
        </Link>
        </div>

        <div className="pleylist-pages">
         <Link to={'./contact'}>
        <div className="pleylist" >
        <h1>Contact</h1>
        </div>
        </Link>
        </div>

        <div className="settings-pages">
  
        <div className="settings" >


        <Settings/>


        </div>
        </div>



        </div>
          }
              <div className="home-banner-icons">
              <Link to={'./'}>
              <div className="home-banner-icons-icon1">
              <MdHome className='house'/>
              </div>
              </Link>
              <Link to={'./about'}>
              <div className="home-banner-icons-icon2">
              <SiYoutubeshorts className='house1'/>
              </div>
              </Link>
              <Link to={'./contact'}>
              <div className="home-banner-icons-icon3">
              <RiMenuUnfold2Fill className='house2'/>
              </div>
              </Link>
              <div className="home-banner-icons-icon4">
              <IoSettings className='house3'/>
              </div>
              </div>
    </div>
          
  )
}

export default Banner