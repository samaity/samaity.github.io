import React from 'react'
import './Footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'></a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Expertise</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className='footer_socials'>
        <a href="https://www.facebook.com/profile.php?id=100094894981259" target="_blank"><BsFacebook /></a>
        <a href="https://www.linkedin.com/in/dr-moumita-maity-604b4b118/" target="_blank"><BsLinkedin /></a>
        <a href="https://www.instagram.com/drmoumitamaity/" target="_blank"><BsInstagram /></a>
      </div>
      <div className='footer__copyright'>
        <small>&copy; Moumita Maity. All rights reserved.</small>
      </div>
    </footer>

  )
}

export default Footer