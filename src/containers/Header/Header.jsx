import React from 'react';
import './Header.scss';
import {images} from '../../constants';
import {SubHeading} from '../../components';

const Header = () => {
  return (
    <>
    <div className="app__header app__wrapper section__padding" id='home'>
      <div className='app__header-info'>
        <SubHeading title={'Chase the new flavour'}/>
        
        <h1>The Key To Fine Dining</h1>
        
        <p className='p__opensans'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <button type='button' className='custom__button'>Explore Menu</button>
      </div>

      <div className='app__wrapper_img'>
        <img src={images.welcome} alt="hero" />
      </div>
    </div>
    </>
  )
}

export default Header