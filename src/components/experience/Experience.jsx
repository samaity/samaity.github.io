import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h2>Areas of Expertise</h2>
  
      <div className="container experience__container">
        <div className="experience_speciality">
          <h3>Speciality</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <div>
                <BsPatchCheckFill className='experience_details-icon' />
                <h4>IMRT</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <div>
                <BsPatchCheckFill className='experience_details-icon' />
                <h4>IGRT</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <div>
                <BsPatchCheckFill className='experience_details-icon' />
                <h4>Tomotherapy</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      
        <div className="experience_interest">
          <h3>Area of Interest</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <div>
                <BsPatchCheckFill className='experience_details-icon' />
                <h4>Breast Cancer</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <div>
                <BsPatchCheckFill className='experience_details-icon' />
                <h4>Gynecological Cancer</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience