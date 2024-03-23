import React from 'react'
import '../styles/Skills.css'
function Skills() {
  return (
      <div id='skill'>
      <div className="my-skills">
           <div className="skil-headings">
          <h3 className="skills">Skills </h3>

          </div>

          <div className="skills-boxes">
            <div className="skill-box">
              <h1 className="skill-name">Front-End Development </h1>
              <p>HTML</p>
              <p>CSS</p>
              <p>Tailwind Css</p>
              <p>JavaScript</p>
              <p>React js</p>
              <p>Typescript</p>
              <p>scss</p>
            </div>

            <div className="skill-box">
             <h1 className='skill-name'>Backend Development</h1>
             <p>Node Js</p>
              <p>Express Js</p>
              <p>Mongo Db</p>
           
            </div>
            <div className="skill-box">
             <h1 className='skill-name'>Others </h1>
             <p>Git</p>
             <p>GitHub</p>
            </div>
          </div>
      </div>
      </div>
  )
}

export default Skills
