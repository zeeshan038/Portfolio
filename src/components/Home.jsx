import React from 'react'
import '../styles/Home.css'
import img from '../assets/picofme (1).png'

import plane1 from '../assets/pkane2-removebg-preview.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import github from '../assets/github.png'
import curvedLines from '../assets/curved-arrow.svg'
import cv from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import {AiFillInstagram} from 'react-icons/ai'
import {FaFacebook} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
function Home() {
  return (
    <div id='home'>
    <div className='home-container'>
     <div className="home">
          <img src={plane1} alt=""  className='plane'/>
        <div className="personal-info">
          <img src={curvedLines} alt="" className="curved-lines" />
         <h5 className="main-heading"> I'M <br />
          <span className='name'>Muhammad Zeeshan</span></h5>
          <h1 className='developer'> Mern Stack <br /> developer 👋🏻</h1>
          <p className='personal-para'>Hi, I'm zeeshan. A passionate mern developer <br />  based in swabi, pakistan 📍</p>
          <div className="buttons">
            <div className='hire-btn'>
            <button className="hire-me btn">Hire me</button>
            </div>
            <div className='cv-btn' >
           <a href="/" download={cv}> <button className="download-cv btn">Download CV</button>  </a>
            </div>
          </div>
       <div className="icons"> 
       <a href="https://www.instagram.com/muhammadxzeeshan_/" target='blank' className='social-icon' ><AiFillInstagram /></a>
     
     <a href="https://web.facebook.com/profile.php?id=100058583021815" target='blank' className='social-icon'><FaFacebook /></a>
     <a href="https://github.com/zeeshan038" className='social-icon' target='blank'><AiFillGithub /></a>
     {/* <Link to="https://www.fiverr.com/zeeshankhan955?up_rollout=true" className='social-icon'>fiver</Link> */}
     </div>
        </div>
        <div className="personal-img">
        <img src={img} alt="image" className='my-image'/>
       
        </div>

    
       
     </div>
     <div className="technologies">

<div className="tech-learned">
  <h4 className="tech">Tech stack |</h4>
</div>
<div className="tech-icons">
  <img src={html} alt="" height={'150px'}  className='tech-img'/>
  <img src={css} alt=""  className='tech-img'/>
  <img src={js} alt=""  className='tech-img'/>
  <img src={tailwind} alt=""  className='tech-img'/>
  <img src={react} alt=""  className='tech-img'/>
  <img src={github} alt=""  className='tech-img'/>
    
</div>
</div>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
    </div>
  )
}

export default Home
