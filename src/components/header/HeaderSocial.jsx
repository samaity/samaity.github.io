import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'


const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.facebook.com/profile.php?id=100094894981259" target="_blank"><BsFacebook /></a>
        <a href="https://www.linkedin.com/in/dr-moumita-maity-604b4b118/" target="_blank"><BsLinkedin /></a>
        <a href="https://www.instagram.com/drmoumitamaity/" target="_blank"><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocial