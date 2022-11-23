import React, {useState} from 'react';
import './Navbar.scss';
import {images} from '../../constants';
import {RiCloseCircleFill, RiMenu3Line} from 'react-icons/ri';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
    <div className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>

      <ul className='app__navbar-links'>
        <li className='p__poppins'><a href="#home">Home</a></li>
        <li className='p__poppins'><a href="#about">About</a></li>
        <li className='p__poppins'><a href="#menu">Menu</a></li>
        <li className='p__poppins'><a href="#awards">Awards</a></li>
        <li className='p__poppins'><a href="#contact">Contact</a></li>
      </ul>

      <div className="app__navbar-login">
        <a href="#login" className='p__opensans'>Log In / Registration</a>

        <div/>
        
        <a href="#book" className='p__opensans'>Book Table</a>
      </div>

      <div className="app__navbar-smallscreen">
        <RiMenu3Line onClick={() => setToggleMenu(true)}/>

        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <RiCloseCircleFill className='overlay__close' onClick={() => setToggleMenu(false)}/>

            <ul className='app__navbar-smallscreen_links'>
              <li className='p__poppins'><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li className='p__poppins'><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li className='p__poppins'><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li className='p__poppins'><a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a></li>
              <li className='p__poppins'><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </div>
    </>
  )
}

export default Navbar