import React from 'react'
import '../styles/About.css'
import Aboutimg from '../assets/About.jpeg'
function About() {
  return (
    <div id='About'>

       <div className='About-me'>
       <div className='Aboutimg-container'>

       <h1 className='about-heading about-mobile'>About Me</h1>
        <img src={Aboutimg} alt="" className='about-img' />




       </div>

        <div className='About-text'>
        <h1 className='about-heading about-desktop'>About Me</h1>
        <h3 className='about-sec-heading'>A dedicated web developer based in swabi, pakistan 📍</h3>
        <p className="info">I'M Muhammad Zeeshan a web developer, who's a student of computer science. As a developer a learned 
        a lot of technologies to  create an interactive , responsive websites. I learned Javascript, React, Typescript, Tailwind,Scss,Node Js , Express Js , Mongo Db.
        
   
         </p>
        </div>
        
       </div>
    
    </div>
  )
}

export default About
