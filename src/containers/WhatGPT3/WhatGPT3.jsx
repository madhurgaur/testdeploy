import React from 'react'
import './WhatGPT3.css'
import { Features } from '../../Components'

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
         <Features title="What Is GPT3"  text="There is no one who loves pain itself, who seeks after it and wants to have it, 
         simply because it is pain There is no one who loves pain itself,
          who seeks after it and wants to have it, simply because it is pain
           There is no one who loves pain itself, who seeks after it and wants to have it,
            simply because it is pain" />
      </div>
      <div className='gpt3__whatgpt3-heading'>
         <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
         <p>Explore The Library</p>
     </div> 
     <div className='gpt3__whatgpt3-container'>
        <Features  className="featurebox" title= "Chatbots"  text="There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain"  />
        <Features className="featurebox" title= "KnowledgeBase"  text="There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain" />
        <Features className="featurebox" title= "Education"  text="There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain" />
     </div>

    </div>
  )
}

export default WhatGPT3
