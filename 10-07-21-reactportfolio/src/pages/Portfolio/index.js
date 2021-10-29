import React from 'react';
import Work from '../Work';
import illTechLogo1 from '../../assets/ILL TECH LOGO 1.jpeg';

function Portfolio(props) {
  return (
    <>
    <div className='portfolioContainer'>
      <Work
      // name='iLL Tech Logo'
      // repoLink='https://www.github.com'
      // liveLink= 'https://www.github.com'
      projectImage={illTechLogo1}
      className='work-item'/>
        <Work
          name='iLL Tech Logo'
          repoLink='https://www.github.com'
          liveLink='https://www.github.com'
          projectImage={illTechLogo1}
          className='work-item' />
        <Work
          name='iLL Tech Logo'
          repoLink='https://www.github.com'
          liveLink='https://www.github.com'
          projectImage={illTechLogo1}
          className='work-item' />
        <Work
          name='iLL Tech Logo'
          repoLink='https://www.github.com'
          liveLink='https://www.github.com'
          projectImage={illTechLogo1}
          className='work-item' />
        <Work
          name='iLL Tech Logo'
          repoLink='https://www.github.com'
          liveLink='https://www.github.com'
          projectImage={illTechLogo1}
          className='work-item' />
        <Work
          name='iLL Tech Logo'
          repoLink='https://www.github.com'
          liveLink='https://www.github.com'
          projectImage={illTechLogo1}
          className='work-item' />
    </div>
    </>
  )
}

export default Portfolio;