import React from 'react'
import "./Services.css"
import {BiCheck} from 'react-icons/bi'


const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

    <div className="container services_container">
      <article className="service">
        <div className="service__head">
          <h3>Breast Cancer</h3>
        </div>
        <ul className='service_list'>
          <li>
            <BiCheck className='service_list-icon' />
            <p> Analyze report</p>
          </li>
          <li>
            <BiCheck className='service_list-icon' />
            <p> chemo</p>
          </li>
          <li>
            <BiCheck className='service_list-icon' />
            <p> Radiation</p>
          </li>
        </ul>
      </article>
      {/* End of breast Cancer */}

      <article className="service">
        <div className="service__head">
          <h3>Gynecological Cancer</h3>
        </div>
        <ul className='service_list'>
          <li>
            <BiCheck className='service_list-icon' />
            <p> Analyze report</p>
          </li>
          <li>
            <BiCheck className='service_list-icon' />
            <p> chemo</p>
          </li>
          <li>
            <BiCheck className='service_list-icon' />
            <p> Radiation</p>
          </li>
        </ul>
      </article>
      {/* End of Gynecological Cancer */}
    </div>
    </section>
  )
}

export default Services