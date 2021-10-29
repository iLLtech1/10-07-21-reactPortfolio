import React from 'react';

function Footer() {
  return (
    <footer className='flex-row space-between px-1'>
      <ul>
        <li className='footerItem'>
          <a className="footerLink"href="https://github.com/iLLtech1" target="_blank" rel='noreferrer'>GitHub</a>
        </li>
        <li className='footerItem'>
          <a className="footerLink" href="https://linkedin.com/" target="_blank" rel='noreferrer'>LinkedIn</a>
        </li>
        <li className='footerItem'>
          <a className="footerLink" href="https://twitter.com/" target="_blank" rel='noreferrer'>Twitter</a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer;