import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUserAdd} from 'react-icons/ai'
import {MdOutlineMedicalServices} from 'react-icons/md'
import {RiServiceFill} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'

import { useState } from 'react'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  const handleNavClick = (newNavValue) => {
    setActiveNav(newNavValue); // Change activeNav to the new value passed as an argument
  };

  return (
    <nav>
      <a href="#" onClick={() => handleNavClick("#")} className={activeNav === '#'? 'active' : ''}><AiOutlineHome /></a>
      {/* onclick : event handler without any argument */}
      <a href="#about" onClick={() => handleNavClick("#about")} className={activeNav === '#about'? 'active' : ''}><AiOutlineUserAdd /></a>
      <a href="#experience" onClick={() => handleNavClick("#experience")} className={activeNav === '#experience'? 'active' : ''}><MdOutlineMedicalServices /></a>
      <a href="#services" onClick={() => handleNavClick("#services")} className={activeNav === '#services'? 'active' : ''}><RiServiceFill /></a>
      <a href="#contact" onClick={() => handleNavClick("#contact")} className={activeNav === '#contact'? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav