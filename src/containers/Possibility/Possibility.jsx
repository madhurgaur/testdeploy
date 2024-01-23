import React from 'react'
import './Possibility.css'
import possibimage from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img  src={possibimage} alt='poss' />
      </div>

      <div className='gpt3__possibility-content'>
      <h4>Request Early Access to Get Started</h4>
      <h1 className='gradient__text'> The possibilities are beyond your imagination</h1>
      <p>There is no one who loves pain itself, who seeks after it and wants to have it, 
      simply because it is pain There is no one who loves pain itself,
       who seeks after it and wants to have it, simply because it is pain
        There is no one who loves </p>
        <h4>Request Early Access to get started</h4>
      </div>
     
    </div>
  )
}

export default Possibility
