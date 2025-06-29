import React from 'react'
import './footer.css'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Raj</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebook /></a>
        <a href="https://instagram.com"><FaInstagram /></a>
        <a href="https://twitter.com"><FaSquareXTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; 2025 Raj. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
