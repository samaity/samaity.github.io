import React from 'react'
import './About.css'
import ME from '../../assets/gather-rm.png'
import {FaBriefcaseMedical} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {FaAward} from 'react-icons/fa'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To know</h5>
      <h2>About Me</h2>
      
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
    
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaBriefcaseMedical className='about__icon'/>
              <h5>Experience</h5>
              <small>6+ years Working</small>
            </article>

            <article className='about__card'>
              <FaUsers className='about__icon'/>
              <h5>Patients Consulted</h5>
              <small>3600+ worldwide</small>
            </article>

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Award/Fellowship</h5>
              <small>10+ worldwide</small>
            </article>
          </div>
          <p>
            Experienced Radiation Oncologist with a track record of six years, 
            proficiently interpreting and analyzing over 1000 oncology cases. 
            Demonstrates exceptional problem-solving skills and effective leadership in devising treatment plans.
          </p>

          <a href="#contact" className='btn btn-primary'>Consult here</a>
        </div>
      </div>
    </section>
  )
}

export default About