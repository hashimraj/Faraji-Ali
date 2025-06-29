import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Creating user-friendly interfaces</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Designing engaging user experiences</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Conducting user research and testing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Prototyping and wireframing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Creating responsive designs</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Building responsive websites</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Implementing front-end frameworks</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Integrating APIs and services</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Optimizing website performance</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Ensuring cross-browser compatibility</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Maintaining and updating websites</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Graphics Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Creating visually appealing graphics</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Designing logos and branding materials</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Developing marketing collateral</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Creating infographics and data visualizations</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Designing social media graphics</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services
