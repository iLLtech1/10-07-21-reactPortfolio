import React from 'react';
// Add Resume PDF to assets and import as 
// import resumePDF from ' ../../assets/resume' 


function  Resume() {
  return (
    <>
      <section className='resumeSection'>
        <div>
          <h1>
            Resumé
          </h1>
          <p>Download my <a 
          // href={resumePDF} 
          target='_blank' rel='noreferrer' className='resumeLink'>Resumé</a>  </p>
        </div>
        <br/>
        <h2>
          Front End
        </h2>
        <ul>
          <li>Example</li>
        </ul>

        <br/>
        <h2>Back End</h2>
        <ul>
          <li>Example</li>
        </ul>
      </section>
    </>
  )
}

export default Resume;