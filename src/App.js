import React from 'react'
import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Admin from './pages/Admin'
import { useState } from 'react'
import { auth, provider } from './firebase';
import { signInWithPopup } from 'firebase/auth';
import useLocalStorage from 'use-local-storage'
import Settings from './pages/Settings'
import Login from './pages/Login'
import Card from './pages/card/Card'
import Liked from './pages/Liked'
import Hedernavbar from './pages/Hedernavbar'

export const App=() =>{

  const [adminPage, setAdminPage] = useState('')
    const LoginWidthGoogle =()=>{
      signInWithPopup(auth,provider).then((data)=>{
        setAdminPage(data.user.email)
  
      })
    }


  const [isDark, setIsDark] = useLocalStorage("isDark");
  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/settings' element={<Settings/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
        <Route path='/card' element={<Card/>}></Route>
        <Route path='/like' element={<Liked/>}></Route>
        <Route path='/hedernavbar' element={<Hedernavbar/>}></Route>
      </Routes>
    </div>
  )
}
export default App
