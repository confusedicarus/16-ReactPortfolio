import React from 'react';

function NavBar({currentPage, handlePageChange}) {

    return (
        <ul className= 'nav nav-tabs'>
            <li className='nav-item'>
                <a
                    href='#home'
                    onClick={() => handlePageChange('Home')}
                    className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                    >
                        Home
                </a>
            </li>
            <li className="nav-item">
        <a
          href="#aboutme"
          onClick={() => handlePageChange('AboutMe')}
          className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#work"
          onClick={() => handlePageChange('Work')}
          className={currentPage === 'Work' ? 'nav-link active' : 'nav-link'}
        >
          Blog
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
    )
}
export default NavBar