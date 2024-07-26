import React from 'react'
import { useState } from 'react'
import useLocalStorage from "use-local-storage";
import { Toggle } from '../toggle/Toggle';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import './Settings.css'

function Settings() {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark");
  const[menuOpen, setMenuOpen] = useState(false)
  return (
    <div className='Settings'>      
    {!menuOpen&& <div className="settings-icons-icon" onClick={()=>setMenuOpen(true)}><h1>Settings</h1> <IoIosArrowDown className='settings-icons-icon-ikon'/></div>}
    {menuOpen&& <div className='settings-icons-icon' onClick={()=>setMenuOpen(false)}><h1>Settings</h1> <IoIosArrowUp className='settings-icons-icon-ikon'/></div>}
  
    
    {menuOpen&&
    
  <div className="settings-menu-open">
    <p>Tun-Kun</p>
      <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)}/>
        

</div>
}


</div>
  )
}

export default Settings