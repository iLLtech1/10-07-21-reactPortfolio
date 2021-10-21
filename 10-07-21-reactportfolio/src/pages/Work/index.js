import React from 'react';

function Work(props) {
  const {name, projectImage, liveLink, repoLink} = props;

  return (
    <>
    <div id='works' href={liveLink} target='_blank' className='workContainer'>
      <img src={projectImage} alt={name} className='projectImage' />
      <div className='linkContainer'>
        <div className='links'>
          <a href={liveLink}
          target='_blank'
          className='projectName'
          rel='noreferrer'>{name}</a>
          <a href={repoLink}
          target='_blank'
          rel='noreferrer'
          className='github-link'>GitHub Repo</a>
        </div>
      </div>
    </div>
    </>
  )
}

export default Work;