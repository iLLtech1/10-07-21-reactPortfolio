import React from 'react';
import { BrowserRouter as Route, Switch, Link } from 'react-router-dom';

function  Nav(props) {
  const {pages = [], currentPage, setCurrentPage} = props;

  return (
  <>
    <header className='flex-row space-between px-1'>
      <h2>
        <Link to='/10-07-21-reactportfolio'>CLivingston</Link>
      </h2>
    <nav>
      <ul className='flex-row'>
        <li className={`${currentPage === 'about' && 'nav-active'}`}>
          <span onClick={()=> setCurrentPage('about')}>
            <Link to='/10-07-21-reactportfolio/'>About Me</Link>
          </span>
        </li>
        <li className={`${currentPage === 'portfolio' && 'nav-active'}`}>
          <span onClick={()=> setCurrentPage('portfolio')}>
            <Link to='/10-07-21-reactportfolio/portfolio'>Portfolio</Link>
          </span>
        </li>
        <li className={`${currentPage === 'contact' && 'nav-active'}`}>
          <span onClick={()=> setCurrentPage('contact')}>
            <Link to='/10-07-21-reactportfolio/contact'>Contact Me</Link>
          </span>
        </li>
        <li className={`${currentPage === 'resume' && 'nav-active'}`}>
          <span onClick={()=> setCurrentPage('resume')}>
            <Link to='/10-07-21-reactportfolio/resume'>Resumé</Link>
          </span>
        </li>
      </ul>
    </nav>
   </header>

    </>
  )
}

export default Nav;