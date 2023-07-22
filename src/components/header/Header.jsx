import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/pic1removebg.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Dr. Moumita Maity</h1>
        <h4 className='text-bright'>MBBS, MD, ECMO</h4>
        <h5 className='text-light'>Specialized in Radiation Oncology</h5>
        <CTA />
        <HeaderSocial />

        <div className='me'>
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header