import React from 'react'
import './about.css'
import ME from '../../assets/me-about.JPG'
import { FaAward } from 'react-icons/fa'
import { FaUsersGear } from 'react-icons/fa6'
import { VscFolderActive } from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className="about__card">
              <FaUsersGear className="about__icon" />
              <h5>Clients</h5>
              <small>8+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderActive className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
            I am a passionate software developer with a knack for creating dynamic and responsive web applications. My journey in the tech world has been fueled by a desire to learn and grow, and I am always on the lookout for new challenges and opportunities to expand my skill set.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
