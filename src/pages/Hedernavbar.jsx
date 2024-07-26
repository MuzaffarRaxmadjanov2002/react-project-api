import React from 'react'
import './Hedernavbar.css'
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";
import { FaMicrophone } from "react-icons/fa";

function Hedernavbar() {
  return (
    <div className='Hedernavbar'>
      <div className="Hedernavbar-container">
      <Link to={'/'}>
        <FaArrowLeft className='Hedernavbar-container-icons'/>
        </Link>
        <div className="Hedernavbar-container-input">
          <input type="text" placeholder='Qidiruv...'/>
        </div>
        <div className="Hedernavbar-container-golos">
          <FaMicrophone/>
        </div>
      </div>
       <div className="Hedernavbar-container2">
        
       </div>
    </div>
  )
}

export default Hedernavbar