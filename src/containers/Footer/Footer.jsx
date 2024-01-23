import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className='gpt3__footer section padding'>
      <div className='gpt3__footer-heading'>
      <h1 className='gradient__text'>Do you want to step into future before others</h1>
      </div>
      <div className='gpt3__footer-btn'>
        <p>Request Early access</p>
      </div>

      <div className='gpt3__footer-links'>
       <div className='gpt3__footer-links_logo'>
         <img src={gpt3Logo} alt='logo'/>
         <p> 1672, K12,XYZ Company, India ,All rights reserved </p>
       </div>
       <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact Us</p>
       </div>
       <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>TErms & condition</p>
          <p>Social Media</p>
          <p>Privacy POlicy</p>
          <p>Contact</p>
       </div>
       <div className='gpt3__footer-links_div'>
       <h4>Get In Touch</h4>
       <p>Cretcherwood k12 182 DK Alkncjknb</p>
       <p>015-23689</p>
       <p>info@gmail.com</p>
    </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p> 2024 gpt3. All Rights reserved</p>
      </div>
    </div>
  )
}

export default Footer;
