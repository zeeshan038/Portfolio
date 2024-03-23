import React, { useState } from 'react';
import { projectData } from '../projectsdata';
import '../styles/projects.css';
import { AiFillGithub } from 'react-icons/ai';
import { BsSend } from 'react-icons/bs';

function Projects() {
  const [activeCat, setActiveCat] = useState('all');
  const [filterPro, setFilterPro] = useState(projectData);

  const handlePro = (category) => {
    setActiveCat(category);
    if (category === 'all') {
      setFilterPro(projectData);
    } else {
      const updateProject = projectData.filter((currentProject) => {
        console.log('Current project category:', currentProject.category);
        console.log('Selected category:', category);
        return currentProject.category === category;
      });
      console.log('Filtered projects:', updateProject);
      setFilterPro(updateProject);
    }
  };
  

  return (
    <div id='projects'>
    <div className='projects-main-container'>
      <div className='project-hero'>
        <h5 className='Portfolio'>Portfolio</h5>
        <p className='portfoio-para'>Each project is a unique piece of development💸</p>
      </div>
      <div className='pro-btn'>
        <button onClick={() => handlePro('all')} className={activeCat === 'all' ? 'active' : ''} id='selective-btns'>
          All
        </button>
        <button onClick={() => handlePro('react')} className={activeCat === 'react' ? 'active' : ''} id='selective-btns'>
          React
        </button>
        <button onClick={() => handlePro('typescript')} className={activeCat === 'typescript' ? 'active' : ''} id='selective-btns'>
          TypeScript
        </button>
      </div>
      <div className='projects-card-container'>
        {filterPro.length === 0 ? ( 
          <div className='no-projects'>
            <p>No projects yet</p>
          </div>
        ) : (
      
          filterPro.map((pro, index) => {
            return (
              <div key={index} className='project-card'>
                <img src={pro.image} alt='' className='pro-img' />
                <h1 className='pro-heading'>{pro.h1}</h1>
                <div className='tech-used'>
                  <p className='pro-tech'>{pro.tech1}</p>
                  <p className='pro-tech'>{pro.tech2}</p>
                </div>
                <div className='pro-links'>
                  <a href={pro.urlCode} target='blank' className='pro-anker'>
                    {' '}
                    <button className='pro-github'>
                      {' '}
                      Code <AiFillGithub className='git-icon' />
                    </button>
                  </a>
                  <a href={pro.urlLive} target='blank' className='pro-anker'>
                    <button className='live-btn'>
                      Live Demo <BsSend className='send' />
                    </button>
                  </a>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
    </div>
  );
}

export default Projects;
