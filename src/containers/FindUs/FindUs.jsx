import React from 'react';
import './FindUs.scss';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => {
  return (
    <>
    <div className="app__findus app__bg app__wrapper section__padding" id='contact'>
      <div className="app__findus-info app__wrapper_info">
        <SubHeading title='Contact'/>
        <h1 className='headtext__poppins'>Find Us</h1>

        <div className="app__findus-info_content app__wrapper-content">
          <p className='p__opensans'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
          <p className='p__poppins'>Opening Hours</p>
          <p className='p__opensans'>Mon - Fri: 10:00 am - 02:00 am</p>
          <p className='p__opensans'>Sat - Sun: 10:00 am - 03:00 am</p>
        </div>

        <div className="app__findus-img app__wrapper_img">
          <img src={images.findus} alt="findus" />
        </div>
      </div>
    </div>
    </>
  )
}

export default FindUs