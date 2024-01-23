import React from 'react'
import './features.css'
import Feature from '../../Components/feature/Feature'

const featuresData =[
  {
    title:'Improving And distrusts instantly',
    text:'There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain'
  },{
    title:'Improving And distrusts instantly',
    text:'There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain'
  },{
    title:'Improving And distrusts instantly',
    text:'There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain'
  },{
    title:'Improving And distrusts instantly',
    text:'There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain'
  }
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
        <div className='gpt3__features-heading'>
           <h1 className='gradient__text'>The Future Is AI Now and You 
                    Just Need To Realize It. Step into Further Today & 
                       Make it Happen
           </h1>
           <p>Request early access To Get Started</p>
        </div>  
        <div className='gpt3__feature-container'>
           {featuresData.map((item,index)=>(
            <Feature title={item.title} text={item.text} key={item.title +index}/>
  ))}
        </div>
    </div>
  )
}

export default Features;
